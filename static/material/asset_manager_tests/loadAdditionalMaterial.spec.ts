import { AssetGroupsType, PlaceGroupsType, PlacesType, TransactionRecordsType } from '@cognityv-cloud/types/schemas';
import { Barcode } from '@e2e/elements/blocks/barcode';
import { test } from '@e2e/pages/cognityv';
import { PartnerType } from '@e2e/pages/type';
import { generateBarcode, getBlock, getRandomTestId } from '@e2e/pages/utils';
import { testTemplates } from '@frontend/utils/testTemplates';
import _ from 'lodash';

test('Load additional material', async ({ testUserPage }) => {
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
  const inputAssetGroup: AssetGroupsType = {
    name: `Product ${testId}`
  };
  const inputRecord: TransactionRecordsType = {
    asset_group_id: inputAssetGroup.name,
    barcode: generateBarcode(),
    quantity: 200,
    place_id: `${place.high_level_id} ${place.mid_level} ${place.low_level}`
  };

  const outputAssetGroup: AssetGroupsType = {
    name: `Product ${testId}.1`,
    is_production_ready: true
  };
  const outputRecord1: TransactionRecordsType = {
    asset_group_id: outputAssetGroup.name,
    barcode: generateBarcode(),
    quantity: 100,
    place_id: `${place.high_level_id} ${place.mid_level} ${place.low_level}`
  };
  const outputRecord2: TransactionRecordsType = {
    asset_group_id: outputAssetGroup.name,
    barcode: generateBarcode(),
    quantity: 25,
    place_id: `${place.high_level_id} ${place.mid_level} ${place.low_level}`
  };

  const partner: PartnerType = { name: `User ${testId}`, currency: 'Euro EUR (€)' };
  await testUserPage.visitDashboard();

  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Partners', fields: { name: partner.name } });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Transfer Accounts', fields: { partner_id: partner.name, account_type: 'Bank account', currency: partner.currency } });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: inputAssetGroup });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Buildings', fields: placeGroup });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Places', fields: place });
  await testUserPage.addItemToDataGrid({ team: 'Management', page: 'Products', fields: outputAssetGroup });
  await testUserPage.executeOrder({ records: [inputRecord], partner });
  const serialNumber = await testUserPage.executeProduction({ outcomeRecord: outputRecord1, records: [{ ...inputRecord, quantity: inputRecord.quantity / 4 }] });
  await testUserPage.executeProduction({ outcomeRecord: outputRecord2, records: [{ ...inputRecord, quantity: inputRecord.quantity / 4 }] });

  await testUserPage.visitPage({ team: 'Operations', page: 'Asset Manager' });
  await testUserPage.page.getByText('Load additional material').click();
  await Barcode.scan(testUserPage.page, [outputRecord1.barcode]);
  await Barcode.scan(testUserPage.page, [outputRecord2.barcode]);

  await testUserPage.page.waitForTimeout(2000);
  const quantity = await getBlock(testUserPage.page, testUserPage.locator, 'quantity');
  await quantity.updateValue(_.round(outputRecord1.quantity / 1.5, 0), true);
  await testUserPage.page.getByTestId(testTemplates.acceptButton()).click();

  await testUserPage.acceptTransaction();

  // Validation
  await testUserPage.validateAssetAndContents({
    asset: { batch_number: serialNumber, quantity: 125 }
  });
});
