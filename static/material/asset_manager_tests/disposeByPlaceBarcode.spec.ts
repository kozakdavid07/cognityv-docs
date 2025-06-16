import { AssetGroupsType, PlaceGroupsType, PlacesType, TransactionRecordsType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { expect, test } from '@e2e/pages/cognityv';
import { PartnerType } from '@e2e/pages/type';
import { generateBarcode, getRandomTestId } from '@e2e/pages/utils';

test('Dispose by place barcode', async ({ adminUserPage }) => {
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
  await adminUserPage.visitDashboard();

  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Partners', fields: { name: partner.name } });
  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Transfer Accounts', fields: { partner_id: partner.name, account_type: 'Bank account', currency: partner.currency } });
  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: assetGroup });
  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Buildings', fields: placeGroup });
  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Places', fields: place });
  await adminUserPage.executeOrder({ records: [record], partner });

  await adminUserPage.visitPage({ team: 'Operations', page: 'Admin Asset Manager' });
  await adminUserPage.page.getByText('Dispose by place barcode').click();
  await Barcode.scan(adminUserPage.page, [place.barcode]);
  await adminUserPage.acceptTransaction();

  // Validation
  await adminUserPage.visitPage({ team: 'Operations', page: 'Inventory Multi-Batch Bulk' });
  const assetDataGrid = await adminUserPage.getDataGridByIndex(0);
  const assetRow = await assetDataGrid.getFormByFieldValue({ asset_group_id: record.asset_group_id });
  expect(assetRow).toBeNull();
});
