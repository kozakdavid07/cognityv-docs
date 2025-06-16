---
sidebar_position: 2
---

# Create New Grid

This guide provides a complete walkthrough for creating data grids in the Cognityv platform. Data grids are essential components that provide direct access to database tables, enabling users to view, create, update, and delete records through an intuitive interface.

---

## Prerequisites

### Administrative Access
- You must have **page editing privileges** to add data grid components
- Ensure you have **database access permissions** for the target table
- Verify **team membership** provides appropriate data access rights
- Understand the table structure and relationships before proceeding

### Page Setup
- Create or access an existing page where the grid will be added
- Ensure the page is properly configured with team access controls
- Plan the grid's placement within the overall page layout
- Consider integration with other page components (forms, charts, etc.)

---

## Grid Creation Process

### Step 1: Start Building Your Page

When you create a new page or access an existing page in edit mode, you'll see the page builder interface:

![Page Builder Start Screen](screenshots/grid%201.png)

**Initial Options:**
- **Add first block** - Start building with individual components
- **Start with template** - Use pre-built page templates

For adding a data grid, select **"Add first block"** to access the component library.

### Step 2: Access Component Library

The page builder will display component options organized into categories:

**Marketplace Options:**
- **Marketplace Datagrid** - Import a pre-configured data grid from the marketplace
- **Marketplace Button** - Import button components from the marketplace

**Block Types:**
- **Container** - A wrapper component to group and organize other elements
- **Text** - Basic text display for paragraphs or short content

![Component Selection Interface](screenshots/grid%202.png)

**To add a data grid:**
1. Look for the **"Marketplace Datagrid"** option
2. Click on **"Import a datagrid from the marketplace"**
3. This will open the data grid configuration interface

### Step 3: Configure Data Grid Properties

Once you select the data grid component, you'll enter the **Datagrid Editor** interface:

![Datagrid Editor Interface](screenshots/grid%203.png)

**Key Configuration Elements:**

#### Data Source Selection
- **Data Source field** - Select the database table for your grid
- **Partners** - Example showing connection to the Partners table
- **Edit button (pencil icon)** - Modify the selected data source
- **Add button (+)** - Add additional data sources or relationships

#### View Configuration
- **"Your first view"** - Default view name for the grid
- **Add View button** - Create additional views of the same data
- **Multiple views** allow different perspectives on the same table data

#### Grid Actions
- **Actions dropdown** - Configure available actions for grid users
- **Standard actions** include Create, Update, Delete operations
- **Custom actions** can be added for specific business processes

### Step 4: Set Up Grid Properties

After selecting your data source, configure the grid properties:

**Property Configuration Options:**
- **Select Properties** - Choose which table columns to display
- **Add Button** - Include buttons for user actions
- **Add Detail View** - Enable detailed record viewing
- **Add Aggregation** - Include summary calculations
- **Upload Data Grid View** - Import pre-configured grid layouts

**Template Option:**
- **Start with template** - Use pre-built grid configurations
- Templates provide quick setup for common business scenarios
- Can be customized after initial template application

---

## Data Source Configuration

### Table Selection Process
1. **Choose target database table** from the available options
2. **Verify table access permissions** for intended users
3. **Review table structure** to understand available fields
4. **Consider data relationships** with other connected tables

### Mandatory Type Filters
For specific tables, type filters are required:

#### Transactions Table
- **Type filter is MANDATORY** when connecting to transactions
- Select specific transaction types to display
- Examples: Purchase orders, sales transactions, inventory movements

#### Transaction Records Table
- **Type filter is MANDATORY** for transaction records
- Filter by record type for focused data views
- Examples: Payment records, approval records, status updates

### Access Control Setup
Configure data access based on organizational structure:

#### Team-Based Filtering
- **Team ID filtering** - Restrict data to team-specific records
- **Automatic inheritance** from user team membership
- **Admin override** - Administrators may access broader datasets

#### Department-Based Filtering
- **Department ID filtering** - Organize access by department
- **Hierarchical access** - Senior roles may access multiple departments
- **Security enforcement** - Prevent unauthorized data access

---

## Grid Customization Options

### Column Configuration
- **Select visible columns** from the connected table
- **Set column order** for optimal user experience
- **Configure column widths** based on data content
- **Enable/disable sorting** for specific columns
- **Set up filtering options** for searchable columns

### Data Operations
- **Create permissions** - Allow users to add new records
- **Update permissions** - Enable in-line editing of existing data
- **Delete permissions** - Control record removal capabilities
- **Bulk operations** - Enable batch updates and actions

### Visual Customization
- **Grid layout options** - Choose between different display styles
- **Pagination settings** - Configure how data is loaded and displayed
- **Filter interface** - Set up search and filtering controls
- **Action buttons** - Customize available user actions

