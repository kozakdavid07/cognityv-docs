---
sidebar_position: 3
---

# Inventory Logging

The Asset Manager provides specialized inventory logging workflows for different business operations. These features enable users to scan asset barcodes and automatically update inventory records in the context of sales orders, production runs, and general inventory management.

---

## Overview

### Purpose
Inventory logging workflows streamline the process of:
- **Recording asset movements** during sales and production operations
- **Updating inventory quantities** in real-time through barcode scanning
- **Maintaining transaction records** for audit and compliance
- **Linking physical operations** to business transactions
- **Ensuring inventory accuracy** across different operational contexts

### Supported Workflows
- **Sales Inventory Logging** - Record assets consumed during sales fulfillment
- **Production Inventory Logging** - Track materials used in production processes
- **General Inventory Updates** - Manual inventory adjustments and corrections

---

## Sales Inventory Logging

### Feature Overview
Sales Inventory Logging enables users to quickly record which assets are being consumed or delivered as part of sales orders. This workflow connects physical asset movements to active sales transactions.

### Workflow Process
1. **Access Sales Logging** - Navigate to Asset Manager and select "Sales Inventory logging"
2. **Select Active Sales Order** - Choose from dropdown of active sales orders by partner
3. **Scan Asset Barcodes** - Use mobile scanner to identify assets being consumed
4. **Confirm Transaction** - Review and accept the inventory movement
5. **Automatic Updates** - System updates both inventory and sales order records

### Key Features
- **Active Sales Selection** - Dropdown showing current open sales orders
- **Partner-based Filtering** - Sales orders organized by partner/customer
- **Real-time Integration** - Immediate updates to sales order details
- **Quantity Tracking** - Automatic quantity deduction from inventory
- **Audit Trail** - Complete record of what assets were used for which sales

### Technical Implementation
```typescript
// Test shows the workflow:
await testUserPage.page.getByText('Sales Inventory logging').click();
const select = await getBlock(testUserPage.page, testUserPage.locator, 'active_sales');
await select.updateValue(partner.name, true);
await Barcode.scan(testUserPage.page, [asset.barcode]);
await testUserPage.acceptTransaction();
```

### Data Flow
1. **Sales Order Creation** - Must have active sales order with expected completion date
2. **Asset Selection** - Assets must exist in inventory with sufficient quantity
3. **Recording** - Creates transaction record linking asset to sales order
4. **Validation** - Sales order shows updated product details and quantities

---

## Production Inventory Logging

### Feature Overview
Production Inventory Logging tracks materials consumed during production processes. This workflow ensures accurate material usage tracking and maintains production cost records.

### Workflow Process
1. **Access Production Logging** - Navigate to Asset Manager and select "Production Inventory logging"
2. **Select Active Production** - Choose from dropdown of active production runs by serial number
3. **Scan Material Barcodes** - Identify materials being consumed in production
4. **Confirm Consumption** - Accept the material usage transaction
5. **Production Records Update** - System updates production details with material usage

### Key Features
- **Production Run Selection** - Dropdown showing active production runs by serial number
- **Material Tracking** - Links specific materials to production processes
- **Cost Allocation** - Tracks material costs for production costing
- **Serial Number Integration** - Production runs identified by unique serial numbers
- **Automatic Documentation** - Creates production material usage records

### Technical Implementation
```typescript
// Test shows the workflow:
await testUserPage.page.getByText('Production Inventory logging').click();
const select = await getBlock(testUserPage.page, testUserPage.locator, 'active_production');
await select.updateValue(serialNumber, true);
await Barcode.scan(testUserPage.page, [asset.barcode]);
await testUserPage.acceptTransaction();
```

### Data Flow
1. **Production Order Creation** - Must have active production with issue and completion dates
2. **Material Availability** - Materials must exist in inventory
3. **Consumption Recording** - Creates production material usage record
4. **Production Update** - Production details show consumed materials

---

## Common Features

### Barcode Scanning Integration
- **Mobile Scanner Support** - Camera-based barcode reading
- **Batch Scanning** - Multiple barcodes can be scanned in sequence
- **Validation** - Confirms asset exists and is available
- **Error Handling** - Clear feedback for invalid or unavailable assets

### Transaction Management
- **Preview Before Commit** - Users can review transactions before finalizing
- **One-Click Acceptance** - Simple transaction confirmation process
- **Immediate Updates** - Real-time database updates upon acceptance
- **Rollback Capability** - Ability to reverse transactions if needed

### Integration Points
- **Sales Orders** - Direct integration with sales order management
- **Production Orders** - Links to production planning and execution
- **Inventory Management** - Real-time inventory quantity updates
- **Financial Tracking** - Cost allocation and transaction recording

---

## User Interface Design

### Selection Screens
- **Operation Selection** - Clear buttons for different logging types
- **Context Selection** - Dropdowns for active sales/production orders
- **Visual Confirmation** - Clear indication of selected context

### Scanning Interface
- **Camera View** - Full-screen barcode scanning interface
- **Scan Feedback** - Audio and visual confirmation of successful scans
- **Asset Preview** - Display of scanned asset information
- **Quantity Validation** - Checks for sufficient inventory

### Confirmation Screens
- **Transaction Summary** - Review of all scanned assets and quantities
- **Context Display** - Clear indication of target sales/production order
- **Accept/Cancel Options** - Final confirmation before committing changes

---

## Business Benefits

### Operational Efficiency
- **Reduced Manual Entry** - Barcode scanning eliminates typing errors
- **Faster Processing** - Quick workflows for common operations
- **Real-time Updates** - Immediate inventory and order status updates
- **Mobile Convenience** - Operations can be performed on warehouse floor

### Accuracy and Compliance
- **Barcode Validation** - Ensures correct asset identification
- **Automatic Calculations** - Reduces mathematical errors
- **Audit Trails** - Complete transaction history for compliance
- **Integration Consistency** - Synchronized data across all systems

### Business Intelligence
- **Material Usage Tracking** - Detailed production cost analysis
- **Sales Fulfillment Records** - Customer delivery tracking
- **Inventory Turnover** - Real-time inventory movement analysis
- **Performance Metrics** - Operation efficiency measurements

---

## Best Practices

### Workflow Setup
- **Maintain Active Orders** - Ensure sales and production orders are properly created
- **Asset Preparation** - Verify all assets have valid barcodes and inventory records
- **User Training** - Train operators on proper scanning techniques
- **Error Procedures** - Establish procedures for handling scanning errors

### Data Quality
- **Regular Validation** - Periodic checks of inventory accuracy
- **Barcode Maintenance** - Ensure barcodes remain readable and properly placed
- **Transaction Review** - Regular review of transaction logs for anomalies
- **System Synchronization** - Verify integration points remain functional

### Performance Optimization
- **Batch Operations** - Group similar operations for efficiency
- **Network Connectivity** - Ensure reliable connectivity for real-time updates
- **Device Management** - Maintain scanning devices in good working condition
- **User Feedback** - Collect and address user experience feedback

---

The Inventory Logging features provide essential tools for maintaining accurate inventory records while supporting core business operations like sales fulfillment and production execution. Through mobile-friendly barcode scanning and real-time integration, these workflows ensure inventory accuracy while minimizing manual effort and errors. 