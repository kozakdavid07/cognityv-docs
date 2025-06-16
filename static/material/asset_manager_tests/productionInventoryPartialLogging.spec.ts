import { AssetGroupsType, AssetsType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { expect, test } from '@e2e/pages/cognityv';
import { generateBarcode, getBlock, getRandomTestId } from '@e2e/pages/utils';
import { testTemplates } from '@frontend/utils/testTemplates';
import dayjs from 'dayjs';

test('Production Inventory partial logging', async ({ testUserPage }) => {
  const testId = getRandomTestId();
  const assetGroup: AssetGroupsType = {
    name: `Product ${testId}`
  };
  const asset: AssetsType = {
    asset_group_id: assetGroup.name,
    barcode: generateBarcode(),
    quantity: 146
  };
  await testUserPage.visitDashboard();

  const { form: productionFirstRow } = await testUserPage.addItemToDataGrid({
    team: 'Operations',
    page: 'Productions',
    fields: { issue_date: dayjs().format('YYYY-MM-DD'), completion_date: dayjs().format('YYYY-MM-DD') }
  });
  const serialNumber = await productionFirstRow.getFieldValue('serial_number');
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: assetGroup });
  const { form: inventoryFirstRow } = await testUserPage.addItemToDataGrid({ team: 'Operations', page: 'Inventory Multi-Batch Bulk', fields: { asset_group_id: asset.asset_group_id } });

  const inventoryDetails = await inventoryFirstRow.openSubFlow(0);
  const inventoryDetailsDataGrid = await inventoryDetails.getDataGridByIndex(0);
  await inventoryDetailsDataGrid.addNewRow({ validate: false, fields: { barcode: asset.barcode, quantity: asset.quantity } });
  await inventoryDetails.closeSubFlow();

  await testUserPage.visitPage({ team: 'Operations', page: 'Asset Manager' });
  await testUserPage.page.getByText('Production Inventory partial logging').click();
  await testUserPage.page.waitForTimeout(1000);
  const select = await getBlock(testUserPage.page, testUserPage.locator, 'active_production');
  await select.updateValue(serialNumber, true);
  await testUserPage.page.getByTestId(testTemplates.acceptButton()).click();

  await Barcode.scan(testUserPage.page, [asset.barcode]);
  await testUserPage.page.waitForTimeout(1000);
  const quantity = await getBlock(testUserPage.page, testUserPage.locator, 'quantity');
  await quantity.updateValue(asset.quantity / 2, true);
  await testUserPage.page.getByTestId(testTemplates.acceptButton()).click();

  await testUserPage.acceptTransaction();

  // Validation
  await testUserPage.visitPage({ team: 'Operations', page: 'Productions' });
  const productionDataGrid = await testUserPage.getDataGridByIndex(0);
  const productionRow = await productionDataGrid.getFormByFieldValue({ serial_number: serialNumber });
  const productionDetails = await productionRow.openSubFlow(0);
  const productionDetailsDataGrid = await productionDetails.getDataGridByIndex(1);
  const newProductionRow = await productionDetailsDataGrid.getFormByFieldValue({ ...asset, quantity: asset.quantity / 2 });
  expect(newProductionRow).not.toBeNull();
});
