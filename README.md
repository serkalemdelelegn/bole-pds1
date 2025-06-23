# Bole PDS - Commodity Distribution System

A role-based admin dashboard for commodity distribution management.

## Project Structure

- `frontend/` - Next.js React frontend application
- `backend/` - Node.js Express backend API

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

### Environment Configuration

#### Frontend API Configuration

Create a `.env.local` file in the `frontend/` directory with one of the following options:

**Option 1: Localhost (Development)**
```bash
NEXT_PUBLIC_USE_LOCALHOST=true
NODE_ENV=development
```

**Option 2: Remote Server (Production)**
```bash
NEXT_PUBLIC_USE_REMOTE=true
NODE_ENV=production
```

**Option 3: Custom API Base URL**
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
# or
NEXT_PUBLIC_API_BASE_URL=http://49.12.106.102/api
```

**Quick Setup:**
1. Copy the content from `frontend/environment-variables.txt`
2. Create `frontend/.env.local`
3. Paste and uncomment your desired option
4. Restart the development server

### Development Setup

#### Option 1: Run Both Frontend and Backend Together
```bash
npm run dev
```
This will start:
- Backend on `http://localhost:3000`
- Frontend on `http://localhost:4000`

#### Option 2: Run Separately

**Backend:**
```bash
npm run dev:backend
# or
cd backend && npm start
```

**Frontend:**
```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```

### Environment Configuration

#### Backend (.env file in backend/config.env)
```
NODE_ENV=development
PORT=3000
DATABASE=your_mongodb_connection_string
# ... other configurations
```

#### Frontend API Configuration
The frontend automatically detects the environment and uses:
- **Development**: `http://localhost:3000/api`
- **Production**: `http://49.12.106.102/api`

You can override this by setting environment variables in `.env.local`:
- `NEXT_PUBLIC_USE_LOCALHOST=true` - Force localhost
- `NEXT_PUBLIC_USE_REMOTE=true` - Force remote server
- `NEXT_PUBLIC_API_BASE_URL=your_url` - Custom URL

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:backend` - Start only the backend
- `npm run dev:frontend` - Start only the frontend
- `npm run build` - Build the frontend for production
- `npm start` - Start the frontend in production mode

## API Endpoints

The backend provides the following API endpoints:
- `/api/users` - User management
- `/api/commodities` - Commodity management
- `/api/customers` - Customer management
- `/api/distributions` - Distribution management
- `/api/transactions` - Transaction management
- `/api/reports` - Report generation
- And more...

## Features

- Role-based access control
- Real-time data management
- Report generation
- File upload capabilities
- Multi-language support (English/Amharic)
- Responsive design