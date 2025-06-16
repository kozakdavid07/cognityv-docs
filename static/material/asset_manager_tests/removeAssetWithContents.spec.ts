import { AssetGroupsType, AssetsType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { expect, test } from '@e2e/pages/cognityv';
import { generateBarcode, getRandomTestId } from '@e2e/pages/utils';
import { testTemplates } from '@frontend/utils/testTemplates';

test('Remove asset by barcode', async ({ adminUserPage }) => {
  const testId = getRandomTestId();
  const assetGroup: AssetGroupsType = {
    name: `Product ${testId}`
  };
  const asset: AssetsType = {
    asset_group_id: assetGroup.name,
    barcode: generateBarcode(),
    quantity: 18
  };
  await adminUserPage.visitDashboard();

  await adminUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: assetGroup });
  const { form: inventoryFirstRow } = await adminUserPage.addItemToDataGrid({ team: 'Operations', page: 'Inventory Multi-Batch Bulk', fields: { asset_group_id: asset.asset_group_id } });

  const inventoryDetails = await inventoryFirstRow.openSubFlow(0);
  const inventoryDetailsDataGrid = await inventoryDetails.getDataGridByIndex(0);
  await inventoryDetailsDataGrid.addNewRow({ validate: false, fields: { barcode: asset.barcode, quantity: asset.quantity } });
  await inventoryDetails.closeSubFlow();

  await adminUserPage.visitPage({ team: 'Operations', page: 'Admin Asset Manager' });
  await adminUserPage.page.getByText('Remove asset by barcode').click();
  await Barcode.scan(adminUserPage.page, [asset.barcode]);
  await adminUserPage.page.getByTestId(testTemplates.acceptButton()).click();

  // Validation
  await adminUserPage.visitPage({ team: 'Operations', page: 'Inventory Multi-Batch Bulk' });
  const assetDataGrid = await adminUserPage.getDataGridByIndex(0);
  const assetRow = await assetDataGrid.getFormByFieldValue({ asset_group_id: asset.asset_group_id });
  expect(assetRow).toBeNull();
});
