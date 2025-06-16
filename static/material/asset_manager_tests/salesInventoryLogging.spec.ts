import { AssetGroupsType, AssetsType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { expect, test } from '@e2e/pages/cognityv';
import { PartnerType } from '@e2e/pages/type';
import { generateBarcode, getBlock, getRandomTestId } from '@e2e/pages/utils';
import { testTemplates } from '@frontend/utils/testTemplates';
import dayjs from 'dayjs';

test('Sales Inventory logging', async ({ testUserPage }) => {
  const testId = getRandomTestId();
  const assetGroup: AssetGroupsType = {
    name: `Product ${testId}`
  };
  const asset: AssetsType = {
    asset_group_id: assetGroup.name,
    barcode: generateBarcode(),
    quantity: 146
  };
  const partner: PartnerType = { name: `User ${testId}`, currency: 'USD' };
  await testUserPage.visitDashboard();

  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Partners', fields: { name: partner.name } });
  await testUserPage.addItemToDataGrid({ team: 'Operations', page: 'Sales', fields: { partner_id: partner.name, expected_completion_date: dayjs().add(1, 'day').hour(10).minute(0).format('YYYY-MM-DD HH:mm') } });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: assetGroup });
  const { form: inventoryFirstRow } = await testUserPage.addItemToDataGrid({ team: 'Operations', page: 'Inventory Multi-Batch Bulk', fields: { asset_group_id: asset.asset_group_id } });

  const inventoryDetails = await inventoryFirstRow.openSubFlow(0);
  const inventoryDetailsDataGrid = await inventoryDetails.getDataGridByIndex(0);
  await inventoryDetailsDataGrid.addNewRow({ validate: false, fields: { barcode: asset.barcode, quantity: asset.quantity } });
  await inventoryDetails.closeSubFlow();

  await testUserPage.visitPage({ team: 'Operations', page: 'Asset Manager' });
  await testUserPage.page.getByText('Sales Inventory logging').click();
  await testUserPage.page.waitForTimeout(1000);
  const select = await getBlock(testUserPage.page, testUserPage.locator, 'active_sales');
  await select.updateValue(partner.name, true);
  await testUserPage.page.getByTestId(testTemplates.acceptButton()).click();

  await Barcode.scan(testUserPage.page, [asset.barcode]);
  await testUserPage.acceptTransaction();

  // Validation
  await testUserPage.visitPage({ team: 'Operations', page: 'Sales' });
  const salesDataGrid = await testUserPage.getDataGridByIndex(0);
  const salesRow = await salesDataGrid.getFormByFieldValue({ partner_id: partner.name, products: asset.asset_group_id });
  const salesDetails = await salesRow.openSubFlow(0);
  const salesDetailsDataGrid = await salesDetails.getDataGridByIndex(0);
  const newSalesRow = await salesDetailsDataGrid.getFormByFieldValue(asset);
  expect(newSalesRow).not.toBeNull();
});
