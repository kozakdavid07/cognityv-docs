import { AssetGroupsType, PlaceGroupsType, PlacesType, TransactionRecordsType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { test } from '@e2e/pages/cognityv';
import { PartnerType } from '@e2e/pages/type';
import { generateBarcode, getRandomTestId } from '@e2e/pages/utils';
import { testTemplates } from '@frontend/utils/testTemplates';

test('Inventory packaging into storage containers', async ({ testUserPage }) => {
  const testId = getRandomTestId();
  const contentBarcode1 = generateBarcode();
  const contentBarcode2 = generateBarcode();

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
    quantity: 146,
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
  await testUserPage.page.getByText('Inventory packaging into storage containers').click();
  await Barcode.scan(testUserPage.page, [record.barcode]);

  await testUserPage.page.getByTestId(testTemplates.scanBarcodesButton()).click();
  await Barcode.scan(testUserPage.page, [contentBarcode1, contentBarcode2]);
  await testUserPage.page.getByTestId(testTemplates.splitAmountButton()).click();
  await testUserPage.page.getByTestId(testTemplates.acceptButton()).click();

  await testUserPage.acceptTransaction();

  // Validation
  await testUserPage.validateAssetAndContents({
    asset: { asset_group_id: record.asset_group_id },
    searchValue: record.asset_group_id,
    contents: [
      { barcode: contentBarcode1, place_id: record.place_id, quantity: record.quantity / 2 },
      { barcode: contentBarcode2, place_id: record.place_id, quantity: record.quantity / 2 }
    ]
  });
});
