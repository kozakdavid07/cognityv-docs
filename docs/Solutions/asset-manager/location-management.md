---
sidebar_position: 4
---

# Location Management

## What is the goal for the user

Enable comprehensive location-based asset management through:
- **Efficient asset relocation** using barcode scanning technology
- **Quick asset discovery** by location or individual asset lookup
- **Structured location organization** with hierarchical placement system
- **Real-time location tracking** with complete audit trails

## What is the user flow

### Location-Based Operations
1. **Choose Operation Type** based on your specific need:
   - Bulk location transfers
   - Individual asset moves
   - Asset discovery and lookup
   - Location inventory verification

2. **Scan Barcodes** for identification:
   - Location barcodes for place-based operations
   - Asset barcodes for individual item management
   - Destination barcodes for relocation operations

3. **Complete Operations** with system confirmation:
   - Review transfer or lookup results
   - Confirm changes and updates
   - Receive operation completion notification

## What is the outcome

Users achieve comprehensive location management with:
- **Accurate asset placement** through systematic location tracking
- **Efficient operations** using barcode-driven workflows
- **Complete visibility** into asset locations and movements
- **Organized facility management** with structured location hierarchy

---

## Location Management Operations

### Asset Relocation
- [**Relocate with Place Barcode**](./relocate-with-place-barcode.md) - Move all assets from one location to another using location barcodes
- [**Relocate Assets via Barcode**](./relocate-assets-via-barcode.md) - Move specific individual assets between locations

### Asset Discovery
- [**Find Assets by Place**](./find-assets-by-place.md) - Discover all assets at a specific location using place barcodes
- [**List Assets via Barcode**](./list-assets-via-barcode.md) - Get detailed information about specific assets

### System Structure
- [**Location Hierarchy System**](./location-hierarchy.md) - Understanding the place groups and places structure

---

## Key Features

### Barcode Integration
- **Location Barcodes** - Scan place barcodes for bulk operations
- **Asset Barcodes** - Scan individual assets for precise control
- **Automatic Recognition** - Instant identification and data capture
- **Validation** - System confirms valid locations and assets

### Movement Tracking
- **Real-time Updates** - Immediate location record changes
- **Audit Trails** - Complete movement history for all operations
- **User Attribution** - Track who performed each operation
- **Timestamp Recording** - Precise timing of all location changes

### Operational Flexibility
- **Bulk Operations** - Move all assets at a location simultaneously
- **Individual Control** - Relocate specific assets as needed
- **Multiple Asset Support** - Handle several assets in one operation
- **Location Validation** - Confirm destinations exist and are accessible

---

## Asset-Specific Relocation

### Feature Overview
Individual asset relocation allows users to move specific assets between locations by scanning both the asset and destination location barcodes.

### Workflow Process
1. **Access Asset Relocation** - Select "Relocate assets or contents via barcode"
2. **Scan Asset Barcodes** - Identify specific assets to be moved
3. **Scan Destination Location** - Specify the target location
4. **Confirm Transfer** - Review and accept the asset movement
5. **Location Update** - System updates individual asset location records

### Key Features
- **Selective Asset Movement** - Move specific assets rather than all assets at a location
- **Multiple Asset Support** - Can scan and move multiple assets in one operation
- **Location Validation** - Confirms destination location exists and is valid
- **Individual Tracking** - Maintains separate movement history for each asset

---

## Location-Based Asset Search

### Find Assets by Place Barcode

#### Feature Overview
This feature enables users to quickly identify all assets located at a specific place by scanning the location's barcode.

#### Workflow Process
1. **Access Search Feature** - Select "Find assets by place via barcode"
2. **Scan Location Barcode** - Identify the location to search
3. **View Results** - System displays all assets at that location
4. **Asset Details** - View detailed information about each asset found

#### Key Features
- **Instant Location Query** - Immediate results upon barcode scan
- **Comprehensive Asset List** - Shows all assets and contents at location
- **Asset Details Display** - Quantity, type, and other asset information
- **Real-time Data** - Current asset status and location information

### List Assets or Contents via Barcode

#### Feature Overview
This feature provides detailed asset information retrieval by scanning individual asset barcodes.

#### Workflow Process
1. **Access Asset Lookup** - Select "List assets or contents via barcode"
2. **Scan Asset Barcode** - Identify the specific asset
3. **View Asset Information** - System displays comprehensive asset details
4. **Location Context** - Shows current location and placement information

#### Technical Implementation
```typescript
// Test shows the workflow:
await testUserPage.page.getByText('List assets or contents via barcode').click();
await Barcode.scan(testUserPage.page, [asset.barcode]);
// Validation shows asset details
await testUserPage.toBeVisible([place.high_level_id, place.mid_level, place.low_level, asset.asset_group_id, asset.quantity]);
```

#### Information Displayed
- **Asset Group** - Product category and classification
- **Current Location** - Complete location hierarchy (building, floor, position)
- **Quantity** - Available quantity at location
- **Asset Status** - Current status and availability
- **Movement History** - Recent location changes (if applicable)

---

## Location Hierarchy Management

### Place Groups Structure
- **Purpose** - Organize locations into logical groupings
- **Examples** - Buildings, warehouses, facilities, departments
- **Hierarchy** - Top-level organizational structure
- **Barcode Support** - Each place group can have associated barcodes

### Places Structure
- **Three-Level System**:
  - **High Level** - Building or facility reference
  - **Mid Level** - Floor, section, zone, or area
  - **Low Level** - Specific position, shelf, or spot number
- **Unique Identification** - Combination creates unique location ID
- **Barcode Integration** - Each place has scannable barcode for operations

### Location Referencing
```typescript
// Location ID format:
place_id: `${place.high_level_id} ${place.mid_level} ${place.low_level}`
// Example: "Building A 4 5" (Building A, Floor 4, Position 5)
```

 