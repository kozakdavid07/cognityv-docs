---
sidebar_position: 1
---

# Data Grid Editor Overview

The Data Grid Editor is a powerful component for creating interactive database views that allow users to create, update, and delete data directly within the Cognityv platform. Data grids serve as the primary interface between users and the underlying database, providing controlled access to business data with built-in filtering and security features.

---

## Overview

### Core Functionality
Data grids define **views into the database** that enable users to:
- **Create new records** with proper validation and business rules
- **Update existing data** with real-time synchronization
- **Delete records** with appropriate permissions and safeguards
- **View and filter data** based on business requirements and access controls

### Database Integration
Every data grid must be connected to a **specific database table**, establishing a direct relationship between the grid interface and the underlying data structure. This connection enables real-time data operations and ensures data consistency across the platform.

## Table Connection Requirements

### Mandatory Table Assignment
- **Every grid must point to a database table** - No grid can exist without a table connection
- **Single table focus** - Each grid connects to one primary table for data operations
- **Direct data manipulation** - All CRUD operations work directly with the connected table
- **Real-time synchronization** - Changes in the grid immediately reflect in the database

### Supported Table Types
Data grids can connect to any accessible database table, including:
- **Master data tables** (partners, contacts, assets, etc.)
- **Transactional tables** (transactions, transaction records, etc.)
- **Reference tables** (categories, groups, locations, etc.)
- **Custom business tables** created for specific workflows

---

## Type Filter Requirements

Certain tables require **mandatory type filters** to ensure proper data visualization and business logic compliance:

### Mandatory Type Filters

#### Transactions Table
- **Type filter is MANDATORY** when connecting to the transactions table
- Purpose: Different transaction types have different data structures and business rules
- Implementation: Users must specify which transaction type(s) the grid will display
- Examples: Purchase orders, sales transactions, inventory movements, financial transfers

#### Transaction Records Table
- **Type filter is MANDATORY** when connecting to the transaction records table
- Purpose: Transaction records contain diverse data types that require specific handling
- Implementation: Filter must be applied to show only relevant record types
- Examples: Payment records, approval records, status updates, audit entries

### Type Filter Configuration
- **Required during grid setup** - Cannot create grid without specifying type filter
- **Business rule enforcement** - Ensures data consistency and proper workflow handling
- **Performance optimization** - Reduces data load by filtering at database level
- **User experience** - Presents only relevant data to users based on their context

---

## Access Control and Data Filtering

### Team-Based Access Control
When users need to control the displayed data, additional filters should be applied based on organizational structure:

#### Team ID Filtering
- **Purpose**: Restrict data visibility to team-specific records
- **Implementation**: Filter applied to `teamid` field in the database
- **Behavior**: Users see only data belonging to their assigned teams
- **Admin Override**: Administrative users may have broader access across teams

#### Department ID Filtering
- **Purpose**: Organize data access by departmental boundaries
- **Implementation**: Filter applied to `department_id` field in the database
- **Behavior**: Users access data relevant to their department context
- **Hierarchical Access**: Senior roles may access multiple department data

