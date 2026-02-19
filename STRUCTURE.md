# Project Structure Documentation

## Folder Structure Explained

### 📂 src/api/
**Purpose:** API communication layer
- Contains axios client configuration
- Handles API interceptors for request/response
- Manages authentication tokens
- Global error handling

**Files:**
- `apiClient.js` - Configured axios instance

### 📂 src/assets/
**Purpose:** Static files and resources
- `images/` - Store all image files (logos, icons, banners)
- `styles/` - Global CSS files

### 📂 src/components/
**Purpose:** Reusable React components

#### src/components/common/
- Small, reusable UI components
- Examples: Button, Input, Card, Modal, Loader
- Should be generic and reusable across the app

#### src/components/layout/
- Layout components that wrap pages
- Examples: Header, Footer, Sidebar, Navbar
- Provide consistent structure across pages

### 📂 src/config/
**Purpose:** Application configuration
- Environment-based settings
- API URLs
- App constants
- Feature flags

### 📂 src/constants/
**Purpose:** Application-wide constants
- Route paths
- Status codes
- Action types
- Enum values

### 📂 src/features/
**Purpose:** Feature-based components (pages)
- Each feature/page in its own file
- Contains page-specific components
- Examples: Home, About, Services, Contact
- Can have sub-folders for complex features

### 📂 src/hooks/
**Purpose:** Custom React hooks
- Reusable stateful logic
- Examples: useFetch, useAuth, useForm
- Follows React hooks naming convention (use*)

### 📂 src/services/
**Purpose:** Business logic layer
- Data transformation
- Complex business logic
- API call wrappers
- Separates business logic from UI

### 📂 src/utils/
**Purpose:** Utility helper functions
- Pure functions
- No side effects
- Examples: formatters, validators, calculators
- Generic helpers used across the app

## How to Use This Structure

1. **Adding a new page:**
   - Create component in `src/features/`
   - Import in `App.js` or set up routing

2. **Creating reusable component:**
   - Add to `src/components/common/`
   - Create both .jsx and .css files

3. **Adding API endpoints:**
   - Use `apiClient` from `src/api/`
   - Create service functions in `src/services/`

4. **Adding custom hooks:**
   - Create in `src/hooks/`
   - Name must start with 'use'

5. **Adding utilities:**
   - Create in `src/utils/`
   - Keep functions pure and testable

## Best Practices

✅ Keep components small and focused
✅ Use meaningful file and folder names
✅ Separate concerns (UI, logic, data)
✅ Reuse components when possible
✅ Follow consistent naming conventions
✅ Add comments for complex logic
✅ Keep CSS modular with component

## Next Steps

Tell me what features you want to add:
- Additional pages
- Forms and validation
- API integration
- Routing setup
- State management (Context API/Redux)
- Authentication
- And more...
