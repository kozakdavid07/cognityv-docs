---
sidebar_position: 8
---

# List Assets via Barcode

## What is the goal for the user

Enable users to retrieve detailed information about specific assets by scanning individual asset barcodes, supporting:
- **Instant asset identification** and information access
- **Asset status verification** and current location
- **Detailed asset specifications** and history
- **Quick asset lookup** during operations and maintenance

## What is the user flow

### Getting Started
1. Navigate to Asset Manager
2. Select **"List assets or contents via barcode"**
3. Locate the asset barcode you want to scan

### Step-by-Step Process
1. **Scan Asset Barcode**
   - Point camera at the specific asset's barcode
   - Wait for automatic recognition
   - Verify the asset is correctly identified

2. **View Asset Information**
   - System displays comprehensive asset details
   - Review current location and placement
   - Check asset status and availability

3. **Review Location Context**
   - See complete location hierarchy
   - Understand asset's current placement
   - Access location-specific information

4. **Access Additional Details**
   - View asset specifications and properties
   - Check movement history if available
   - Review maintenance or status notes

### Information Retrieved
- **Asset identification** and classification details
- **Current location** with complete hierarchy
- **Quantity information** and availability status
- **Asset group** and category classification

## What is the outcome

### Immediate Results
- **Complete asset profile** displayed instantly
- **Current location details** with full hierarchy
- **Asset status information** and availability
- **Quantity data** and placement context

### Information Displayed
- **Asset Group ID** - Product category and classification
- **Current Location** - Complete location hierarchy:
  - High Level ID (Building/Facility)
  - Mid Level (Floor/Section/Area)
  - Low Level (Specific position/shelf)
- **Quantity** - Available quantity at current location
- **Asset Status** - Current condition and availability
- **Movement History** - Recent location changes (when applicable)

### Operational Benefits
- **Quick asset verification** for maintenance or operations
- **Location confirmation** for asset retrieval
- **Status checking** before asset assignment
- **Detailed information access** for planning and decision-making

### Technical Implementation
The system validates and displays:
- Asset group identification and classification
- Complete three-level location hierarchy
- Real-time quantity and status information
- Current placement and availability data 