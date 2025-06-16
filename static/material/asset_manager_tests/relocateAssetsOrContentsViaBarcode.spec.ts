import { AssetGroupsType, AssetsType, PlaceGroupsType, PlacesType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { test } from '@e2e/pages/cognityv';
import { generateBarcode, getRandomTestId } from '@e2e/pages/utils';

test('Relocate with assets barcode', async ({ testUserPage }) => {
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
  const asset: AssetsType = {
    asset_group_id: assetGroup.name,
    barcode: generateBarcode(),
    quantity: 146,
    place_id: `${place.high_level_id} ${place.mid_level} ${place.low_level}`
  };
  await testUserPage.visitDashboard();

  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: assetGroup });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Buildings', fields: placeGroup });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Places', fields: place });
  const { form: inventoryFirstRow } = await testUserPage.addItemToDataGrid({ team: 'Operations', page: 'Inventory Multi-Batch Bulk', fields: { asset_group_id: asset.asset_group_id } });

  const inventoryDetails = await inventoryFirstRow.openSubFlow(0);
  const inventoryDetailsDataGrid = await inventoryDetails.getDataGridByIndex(0);
  await inventoryDetailsDataGrid.addNewRow({ validate: false, fields: { barcode: asset.barcode, quantity: asset.quantity } });
  await inventoryDetails.closeSubFlow();

  await testUserPage.visitPage({ team: 'Operations', page: 'Asset Manager' });
  await testUserPage.page.getByText('Relocate with assets barcode').click();
  await Barcode.scan(testUserPage.page, [asset.barcode]);
  await Barcode.scan(testUserPage.page, [place.barcode]);

  await testUserPage.acceptTransaction();

  // Validation
  await testUserPage.validateAssetAndContents({
    asset: { asset_group_id: asset.asset_group_id },
    searchValue: asset.asset_group_id,
    contents: [{ barcode: asset.barcode, place_id: asset.place_id }]
  });
});
