---
sidebar_position: 4
---

# Database Overview

## Introduction

This document provides a comprehensive overview of the Cognityv database schema, detailing all core tables, their relationships, and field specifications. The database is designed to support enterprise-level operations across all business functions including partner management, inventory control, financial operations, and asset tracking.

---

## Core Tables Overview

The database consists of eight primary tables that form the foundation of the Cognityv system:

- **partners**: Companies and business entities
- **contacts**: Individual contacts associated with partners
- **partners_to_products**: Partner-specific product pricing relationships
- **transfer_accounts**: Bank account information for partners
- **asset_categories**: Product categorization hierarchy
- **asset_groups**: Product group definitions
- **assets**: Individual product and inventory records
- **place_groups**: Building and location hierarchy
- **places**: Specific storage locations

---

## Table Specifications

### partners

**Purpose**: Stores partner companies and their comprehensive business data including basic information, billing details, and shipping information.

#### Core Data Fields

| Field Name | Type | Description |
|------------|------|-------------|
| `name` | STRING | Partner company name |
| `is_customer` | BOOLEAN | Customer designation (TRUE if customer) |
| `is_reseller` | BOOLEAN | Reseller designation (TRUE if reseller) |
| `is_supplier` | BOOLEAN | Supplier designation (TRUE if supplier) |
| `is_competitor` | BOOLEAN | Competitor designation (TRUE if competitor) |
| `notes` | STRING | Free-text notes about the partner |
| `email` | STRING | Primary company email (independent of contacts) |
| `website` | STRING | Company website |
| `phone` | STRING | Primary company phone (independent of contacts) |

#### Address Information

| Field Name | Type | Description |
|------------|------|-------------|
| `country_code` | STRING | Primary country code |
| `postal_code` | STRING | Primary postal code |
| `city` | STRING | Primary city |
| `additional_address_detail` | STRING | Primary street address and house number |

#### Billing Information

| Field Name | Type | Description |
|------------|------|-------------|
| `entity` | STRING | Entity type: domestic/individual/other |
| `registry_number` | STRING | Company registration number |
| `local_tax_number` | STRING | Local tax identification number |
| `eu_tax_number` | STRING | EU tax identification number |
| `target_currency` | STRING | Preferred invoice currency |
| `target_exchange_rate` | NUMERIC | Static exchange rate between base and target currency |
| `days_until_payment_due` | NUMERIC | Payment terms in days from delivery |
| `billing_email` | STRING | Billing-specific email (if different from primary) |
| `billing_phone` | STRING | Billing-specific phone (if different from primary) |
| `separate_billing_address` | BOOLEAN | TRUE if billing address differs from primary |
| `billing_country_code` | STRING | Billing address country |
| `billing_postal_code` | STRING | Billing address postal code |
| `billing_city` | STRING | Billing address city |
| `billing_additional_address_detail` | STRING | Billing address street and house number |

#### Document Generation Settings

| Field Name | Type | Description |
|------------|------|-------------|
| `quote_duration` | NUMERIC | Quote validity period in days from generation |
| `pay_method` | STRING | Payment method: bank transfer or cash |
| `language` | STRING | Document language preference |
| `show_imperial_units` | BOOLEAN | Use imperial units on invoices |

#### Shipping Information

| Field Name | Type | Description |
|------------|------|-------------|
| `delivery_terms` | STRING | Delivery terms (selectable options) |
| `delivery_notes` | STRING | Template shipping instructions for delivery notes |
| `separate_shipping_address` | BOOLEAN | TRUE if shipping address differs from primary |
| `shipping_country_code` | STRING | Shipping address country |
| `shipping_postal_code` | STRING | Shipping address postal code |
| `shipping_city` | STRING | Shipping address city |
| `shipping_additional_address_detail` | STRING | Shipping address street and house number |

---

### contacts

**Purpose**: Stores individual employees and contacts associated with partner companies.

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `last_name` | STRING | Contact's last name | |
| `first_name` | STRING | Contact's first name | |
| `partner_id` | UUID | Associated partner company | **FOREIGN KEY** → partners.id |
| `asset_group_id` | UUID | Associated product group | **FOREIGN KEY** → asset_groups.id |
| `phone` | STRING | Contact's phone number | |
| `email` | STRING | Contact's email address | |

---

### partners_to_products

**Purpose**: Relational table defining partner-specific product pricing and terms (one row per partner-product relationship).

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `partner_id` | UUID | Partner reference | **FOREIGN KEY** → partners.id |
| `asset_group_id` | UUID | Product group reference | **FOREIGN KEY** → asset_groups.id |
| `unit_price_below_min_order` | NUMERIC | Price below minimum order quantity | |
| `minimum_order_quantity` | NUMERIC | Minimum order quantity requirement | |
| `unit_price` | NUMERIC | Standard unit price | |
| `vat_type` | STRING | VAT classification | |
| `due_date` | DATE | Price validity end date | |

---

### transfer_accounts

**Purpose**: Stores bank account information for partners. Multiple accounts per partner are supported for different currencies.

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `partner_id` | UUID | Associated partner | **FOREIGN KEY** → partners.id |
| `account_holder_name` | STRING | Account holder name | |
| `currency` | STRING | Account currency | |
| `account_number` | STRING | Bank account number | |
| `account_type` | STRING | Account type: business/personal | |
| `bank_name` | STRING | Bank name | |
| `bank_address` | STRING | Bank address | |
| `address_post_code` | STRING | Bank postal code | |
| `address_country_code` | STRING | Bank country code | |
| `swift` | STRING | SWIFT/BIC code | |

---

### asset_categories

**Purpose**: Defines hierarchical categories for organizing asset groups. Used when expanding product structure upward from asset groups.

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `name` | STRING | Category name identifier | |
| `asset_category_id` | UUID | Parent category (for hierarchy) | **FOREIGN KEY** → asset_categories.id |

---

### asset_groups

**Purpose**: Defines the core product catalog. These are template/descriptive rows defining product parameters that inventory management instantiates.

#### Basic Information

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `asset_category_id` | UUID | Associated category | **FOREIGN KEY** → asset_categories.id |
| `name` | STRING | Product name | |
| `article_number` | STRING | Article number for visualization | |
| `description` | STRING | Product description (for future webshop use) | |

#### Product Classification

| Field Name | Type | Description |
|------------|------|-------------|
| `is_trade_ready` | BOOLEAN | TRUE if product is for sale |
| `is_production_ready` | BOOLEAN | TRUE if product is manufactured |
| `is_packaging_material` | BOOLEAN | TRUE if product is packaging material |
| `unit` | STRING | Unit of measure |
| `unit_price` | NUMERIC | Sales unit price |
| `cost_price` | NUMERIC | Cost unit price |
| `currency` | STRING | Inventory valuation currency |
| `active` | BOOLEAN | Product active status |
| `type` | STRING | Product type: physical/fixed asset/intangible |

#### Inventory Management

| Field Name | Type | Description |
|------------|------|-------------|
| `asset_handling_type` | STRING | Inventory handling method:<br/>- Single-code bulk inventory (e.g., box of screws)<br/>- Multi-code bulk inventory (e.g., epoxy resin in multiple barrels)<br/>- Unique items (e.g., computers) |
| `net_weight` | NUMERIC | Net weight |

#### Invoicing Specifications

| Field Name | Type | Description |
|------------|------|-------------|
| `kf_code` | JSON | Classification code |
| `csk_code` | JSON | Packaging code |
| `kt_code` | JSON | Additional classification |
| `rev_account_number` | STRING | Revenue account number |
| `cost_account_number` | STRING | Cost account number |
| `customs_tariff_number` | STRING | Customs tariff classification |
| `billing_scheme` | STRING | Billing scheme identifier |
| `adr_info` | JSON | ADR (dangerous goods) information |
| `hazard_statements` | TEXT[] | Hazard statement codes |
| `precautionary_statements` | TEXT[] | Precautionary statement codes |

#### Stock Management

| Field Name | Type | Description |
|------------|------|-------------|
| `minimum_order_quantity` | NUMERIC | Minimum order quantity |
| `minimum_in_stock_quantity` | NUMERIC | Minimum stock level |
| `maximum_in_stock_quantity` | NUMERIC | Maximum stock level |

---

### assets

**Purpose**: Individual asset/product inventory records. Not recommended for import - better to set up inventory through the interface after importing the product catalog.

#### Basic Information

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `name` | STRING | Asset name | |
| `parent_asset_id` | UUID | Parent asset reference | **FOREIGN KEY** → assets.id |
| `type` | STRING | Asset type | |
| `category` | STRING | Asset category | |
| `asset_handling_type` | STRING | Handling type | |
| `barcode` | STRING | Barcode identifier | |
| `batch_number` | STRING | Batch/lot number | |
| `account_number` | STRING | Account reference | |
| `accounting_id` | STRING | Accounting system ID | |
| `customs_tariff_number` | STRING | Customs classification | |

#### Inventory Details

| Field Name | Type | Description |
|------------|------|-------------|
| `quantity` | NUMERIC | Current quantity |
| `unit` | STRING | Unit of measure |
| `unified_net_total` | NUMERIC | Total net value |
| `unified_unit_price` | NUMERIC | Unit price |
| `locked` | BOOLEAN | Lock status |
| `details` | JSON | Additional details |
| `notes` | STRING | Notes |
| `active` | BOOLEAN | Active status |
| `role` | STRING | Asset role |

#### Maintenance and Lifecycle

| Field Name | Type | Description |
|------------|------|-------------|
| `warranty_date` | DATE | Warranty expiration |
| `last_maintenance_date` | DATE | Last maintenance performed |
| `maintenance_schedule_days` | NUMERIC | Maintenance interval in days |
| `acquisition_date` | DATE | Date acquired |
| `lifespan_years` | NUMERIC | Expected lifespan |
| `residual_value_percentage` | NUMERIC | Residual value percentage |

#### System References

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `contact_id` | UUID | Associated contact | **FOREIGN KEY** → contacts.id |
| `origin_partner_id` | UUID | Origin partner | **FOREIGN KEY** → partners.id |
| `local_id` | STRING | Local identifier | |
| `global_user_id` | UUID | Global user reference | |
| `place_group_id` | UUID | Location group | **FOREIGN KEY** → place_groups.id |
| `access_policies` | JSON | Access control policies | |
| `src` | JSON | Source information | |
| `ws_id` | UUID | Workspace identifier | |
| `manager_id` | UUID | Manager reference | |
| `department_id` | UUID | Department reference | |
| `team_id` | UUID | Team reference | |

---

### place_groups

**Purpose**: Defines building and location hierarchy. Descriptive parameters for buildings.

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `name` | STRING | Building/location group name | |
| `high_level_id` | UUID | Parent location group | **FOREIGN KEY** → place_groups.id |

**Note**: This structure can be extended in any dimension as needed.

---

### places

**Purpose**: Defines specific storage locations within buildings, marked with QR codes for identification.

| Field Name | Type | Description | Relationship |
|------------|------|-------------|--------------|
| `mid_level` | STRING | Row/column identifier | |
| `low_level` | STRING | Shelf identifier | |
| `place_group_id` | UUID | Associated building/location group | **FOREIGN KEY** → place_groups.id |
| `manager_id` | UUID | Location manager | |
| `department_id` | UUID | Responsible department | |
| `team_id` | UUID | Responsible team | |
| `notes` | STRING | Location notes | |
| `type` | STRING | Location type | |

**Note**: This structure supports multi-dimensional organization and can be extended as needed.

---

## Entity Relationships

### Primary Relationships

- **contacts.partner_id** → **partners.id** (Many contacts per partner)
- **contacts.asset_group_id** → **asset_groups.id** (Contact specialization)
- **partners_to_products.partner_id** → **partners.id** (Partner pricing)
- **partners_to_products.asset_group_id** → **asset_groups.id** (Product pricing)
- **transfer_accounts.partner_id** → **partners.id** (Partner bank accounts)
- **asset_groups.asset_category_id** → **asset_categories.id** (Product categorization)
- **assets.parent_asset_id** → **assets.id** (Asset hierarchy)
- **assets.contact_id** → **contacts.id** (Asset assignment)
- **assets.origin_partner_id** → **partners.id** (Asset source)
- **assets.place_group_id** → **place_groups.id** (Asset location)
- **place_groups.high_level_id** → **place_groups.id** (Location hierarchy)
- **places.place_group_id** → **place_groups.id** (Specific locations)

### Data Flow

1. **Partners** serve as the central hub for business relationships
2. **Contacts** provide individual touchpoints within partner organizations
3. **Asset groups** define the product catalog structure
4. **Assets** represent actual inventory instances
5. **Places** provide physical location tracking
6. **Transfer accounts** enable financial transactions

---

## Implementation Notes

### Data Import Recommendations

1. **Start with basic entities**: Import partners, contacts, and asset_groups first
2. **Establish relationships**: Set up partners_to_products pricing after core data
3. **Configure locations**: Set up place_groups and places structure
4. **Avoid asset import**: Create individual assets through the interface after establishing the product catalog
5. **Validate relationships**: Ensure all foreign key relationships are properly established

### Data Quality Requirements

- All relational fields require exact name matches with referenced entities
- Currency fields should use consistent currency codes
- Date fields must follow standard ISO format
- Boolean fields use TRUE/FALSE values consistently
- JSON fields must contain valid JSON structures

### Performance Considerations

- Index frequently queried relationship fields
- Consider partitioning large asset tables by location or category
- Implement appropriate caching for product catalog queries
- Monitor performance on complex relationship queries 