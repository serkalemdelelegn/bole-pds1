// Environment Configuration
// Copy this file to .env.local and modify as needed

module.exports = {
  // API Configuration
  // Choose one of the following options:

  // Option 1: Use localhost backend (development)
  //NEXT_PUBLIC_USE_LOCALHOST: 'true',
  
  // Option 2: Use remote backend (production)
  NEXT_PUBLIC_USE_REMOTE: 'true',
  
  // Option 3: Custom API base URL
  // NEXT_PUBLIC_API_BASE_URL: 'http://localhost:3000/api',
   NEXT_PUBLIC_API_BASE_URL: 'http://49.12.106.102/api',
  
  // Environment
  NODE_ENV: 'production',
  
  // Available API endpoints:
  // - Localhost: http://localhost:3000/api
  // - Remote: http://49.12.106.102/api
};

// Usage:
// 1. Copy this file to .env.local
// 2. Uncomment the option you want to use
// 3. Comment out other options
// 4. Restart your development server 