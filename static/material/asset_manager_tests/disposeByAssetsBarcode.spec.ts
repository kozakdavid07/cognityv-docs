import { AssetGroupsType, PlaceGroupsType, PlacesType, TransactionRecordsType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { expect, test } from '@e2e/pages/cognityv';
import { PartnerType } from '@e2e/pages/type';
import { generateBarcode, getRandomTestId } from '@e2e/pages/utils';

test('Dispose by assets barcode', async ({ testUserPage }) => {
  const testId = getRandomTestId();
  const placeGroup: PlaceGroupsType = {
    name: `Building ${testId}`
  };
  const place: PlacesType = {
    high_level_id: placeGroup.name,
    mid_level: '4',
    low_level: 5,
    barcode: generateBarcode()
  };
  const assetGroup: AssetGroupsType = {
    name: `Product ${testId}`
  };
  const record: TransactionRecordsType = {
    asset_group_id: assetGroup.name,
    barcode: generateBarcode(),
    quantity: 18,
    place_id: `${place.high_level_id} ${place.mid_level} ${place.low_level}`
  };
  const partner: PartnerType = { name: `Partner ${testId}`, currency: 'Euro EUR (€)' };

  await testUserPage.visitDashboard();
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Partners', fields: { name: partner.name } });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Transfer Accounts', fields: { partner_id: partner.name, account_type: 'Bank account', currency: partner.currency } });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: assetGroup });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Buildings', fields: placeGroup });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Places', fields: place });
  await testUserPage.executeOrder({ records: [record], partner });

  await testUserPage.visitPage({ team: 'Operations', page: 'Asset Manager' });
  await testUserPage.page.getByText('Dispose by assets barcode').click();
  await Barcode.scan(testUserPage.page, [record.barcode]);
  await testUserPage.acceptTransaction();

  // Validation
  await testUserPage.visitPage({ team: 'Operations', page: 'Inventory Multi-Batch Bulk' });
  const assetDataGrid = await testUserPage.getDataGridByIndex(0);
  const assetRow = await assetDataGrid.getFormByFieldValue({ asset_group_id: record.asset_group_id });
  expect(assetRow).toBeNull();
});
