# Cityscape Backend Integration

This document outlines the integration of the Cityscape React frontend with the 360ghar API backend.

## Technology Stack

- **State Management**: Zustand
- **API Client**: Axios
- **Form Handling**: Formik & Yup

## Architecture

### Services

All API calls are organized into service modules:

- `api.js`: Base Axios configuration with authentication interceptors
- `authService.js`: Authentication endpoints (login, register, profile management)
- `propertyService.js`: Property management endpoints
- `mediaService.js`: Media upload and management endpoints
- `userService.js`: User management endpoints

### State Management with Zustand

The application uses Zustand for state management, divided into the following stores:

- `authStore.js`: User authentication state and actions
- `propertyStore.js`: Property listing, filtering, and management
- `adminStore.js`: Admin-specific functionality

## API Endpoints

### Authentication

- `POST /api/v1/auth/token`: Login (get access token)
- `POST /api/v1/auth/register`: Register new user

### Users

- `GET /api/v1/users/me`: Get current user profile
- `PUT /api/v1/users/me`: Update current user profile
- `GET /api/v1/users/:id`: Get user by ID (admin or own profile)
- `GET /api/v1/users`: Get all users (admin only)
- `POST /api/v1/users`: Create user (admin only)
- `PUT /api/v1/users/:id`: Update user (admin only)

### Properties

- `GET /api/v1/properties`: Get all public properties with filters
- `GET /api/v1/properties/all`: Get all properties including unverified (admin only)
- `POST /api/v1/properties`: Create new property
- `GET /api/v1/properties/me`: Get properties owned by current user
- `GET /api/v1/properties/:id`: Get property by ID
- `PUT /api/v1/properties/:id`: Update property
- `DELETE /api/v1/properties/:id`: Delete property
- `PUT /api/v1/properties/:id/verify`: Verify property (admin only)

### Media

- `GET /api/v1/media/property/:id`: Get media for a property
- `POST /api/v1/media/upload`: Upload media file
- `POST /api/v1/media`: Create media with existing URL
- `PUT /api/v1/media/:id`: Update media
- `DELETE /api/v1/media/:id`: Delete media

## Implementation

### Authentication Flow

1. User logs in or registers
2. On successful authentication, the access token is stored in localStorage
3. The token is automatically added to all API requests via Axios interceptors
4. On token expiry (401 Unauthorized), the user is redirected to the login page

### Component Integration

- All components connect to the stores using the hooks exported from the store modules
- Forms use Formik with Yup validation
- Private routes are protected using the authentication state

## Getting Started

1. Install the required dependencies:
   ```
   npm install zustand axios
   ```

2. Ensure the backend API is running at `http://localhost:8000` (or update the base URL in `api.js`)

3. Use the provided components and stores to interact with the backend API:
   - `LoginForm`: User authentication
   - `RegisterForm`: User registration
   - `PropertyList`: Display property listings
   - `PropertyFilter`: Filter properties
   - `PropertyDetails`: View property details
   - `UserProfile`: Manage user profile
   - `PrivateRoute`: Protect authenticated routes 