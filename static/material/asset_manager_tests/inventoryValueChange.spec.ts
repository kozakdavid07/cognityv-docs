import { AssetGroupsType, AssetsType, PlaceGroupsType, PlacesType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { test } from '@e2e/pages/cognityv';
import { generateBarcode, getBlock, getRandomTestId } from '@e2e/pages/utils';
import { testTemplates } from '@frontend/utils/testTemplates';

test('Inventory value change', async ({ adminUserPage }) => {
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
    unified_unit_price: 1200,
    place_id: `${place.high_level_id} ${place.mid_level} ${place.low_level}`
  };

  await adminUserPage.visitDashboard();

  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: assetGroup });
  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Buildings', fields: placeGroup });
  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Places', fields: place });
  const { form: inventoryFirstRow } = await adminUserPage.addItemToDataGrid({ team: 'Operations', page: 'Inventory Multi-Batch Bulk', fields: { asset_group_id: asset.asset_group_id } });

  const inventoryDetails = await inventoryFirstRow.openSubFlow(0);
  const inventoryDetailsDataGrid = await inventoryDetails.getDataGridByIndex(0);
  await inventoryDetailsDataGrid.addNewRow({ validate: false, fields: { barcode: asset.barcode, quantity: asset.quantity, unified_unit_price: asset.unified_unit_price } });
  await inventoryDetails.closeSubFlow();

  await adminUserPage.visitPage({ team: 'Operations', page: 'Admin Asset Manager' });
  await adminUserPage.page.getByText('Inventory value change').click();
  await Barcode.scan(adminUserPage.page, [asset.barcode]);

  await adminUserPage.page.waitForTimeout(2000);
  const quantity = await getBlock(adminUserPage.page, adminUserPage.locator, 'content0');
  await quantity.updateValue(asset.unified_unit_price / 2, true);
  await adminUserPage.page.getByTestId(testTemplates.acceptButton()).click();

  await adminUserPage.acceptTransaction();

  // Validation
  await adminUserPage.validateAssetAndContents({
    asset: { asset_group_id: asset.asset_group_id },
    searchValue: asset.asset_group_id,
    contents: [{ barcode: asset.barcode, unified_unit_price: asset.unified_unit_price / 2 }]
  });
});
