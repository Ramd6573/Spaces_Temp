# InfySpaces Frontend

A modern React.js application for booking coworking and creative spaces, built with Tailwind CSS and featuring a role-based architecture.

## 🚀 Features

### For Users (Clients)
- **Browse Spaces**: View available coworking spaces, creative studios, and event venues
- **Search & Filter**: Search by location, date, and amenities
- **Space Details**: View detailed information, amenities, pricing, and reviews
- **Booking System**: Book spaces with date/time selection and payment integration
- **Dashboard**: Manage bookings, view history, and update profile

### For Hosts (Property Owners)
- **List Spaces**: Multi-step form to list new spaces with photos and details
- **Manage Listings**: Edit space information, pricing, and availability
- **Earnings Dashboard**: Track bookings and earnings
- **Host Dashboard**: Manage multiple spaces and bookings

### For Admins
- **Full Control**: Manage users, listings, and bookings
- **Analytics**: View platform statistics and performance metrics
- **Content Management**: Approve/reject listings and manage categories

## 🛠 Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons (Feather Icons)
- **State Management**: React Hooks
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Date Handling**: Date-fns

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── SearchBar.js    # Search functionality
│   ├── SpaceCard.js    # Space listing cards
│   └── CategoryCard.js # Category display cards
├── pages/              # Main application pages
│   ├── LandingPage.js  # Homepage with hero and categories
│   ├── ListingsPage.js # Space listings with filters
│   ├── SpaceDetailPage.js # Individual space details
│   ├── BookingFlow.js  # Multi-step booking process
│   ├── HostFlow.js     # Host space listing form
│   ├── LoginPage.js    # User authentication
│   ├── RegisterPage.js # User registration
│   └── Dashboard.js    # User dashboard and profile
├── App.js              # Main app component with routing
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd infyspaces-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9) - Main brand color
- **Secondary**: Gray (#64748b) - Supporting text and borders
- **Success**: Green (#10b981) - Positive actions
- **Warning**: Yellow (#f59e0b) - Caution states
- **Error**: Red (#ef4444) - Error states

### Components
- **Buttons**: Primary (filled), Secondary (outlined)
- **Cards**: Consistent spacing and shadows
- **Forms**: Input fields with focus states
- **Navigation**: Responsive header with mobile menu

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebars and detailed views
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Streamlined interfaces with mobile-first design

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Inter font family
- Responsive breakpoints
- Custom component classes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🔗 API Integration

The frontend is designed to work with a Node.js/Express backend. Key API endpoints:

- `GET /api/spaces` - Fetch space listings
- `POST /api/spaces` - Create new space listing
- `GET /api/spaces/:id` - Get space details
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**InfySpaces** - Find Your Perfect Workspace



ram
codsk .
hi
