import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import SpaceCard from '../components/SpaceCard';
import { FiFilter, FiMapPin, FiStar, FiUsers } from 'react-icons/fi';

const ListingsPage = () => {
  const [searchParams] = useSearchParams();
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    location: searchParams.get('location') || '',
    priceRange: '',
    amenities: []
  });
  const [sortBy, setSortBy] = useState('recommended');

  // Mock data for spaces
  const mockSpaces = [
    {
      id: 1,
      name: 'Innovation Hub',
      location: 'Hyderabad, Telangana',
      price: 250,
      rating: 4.8,
      image: 'https://via.placeholder.com/400x250?text=Innovation+Hub',
      amenities: ['WiFi', 'Coffee', 'Parking'],
      capacity: 20,
      type: 'Coworking',
      available: true
    },
    {
      id: 2,
      name: 'Creative Studio',
      location: 'Hyderabad, Telangana',
      price: 300,
      rating: 4.6,
      image: 'https://via.placeholder.com/400x250?text=Creative+Studio',
      amenities: ['WiFi', 'Coffee', 'Equipment'],
      capacity: 8,
      type: 'Creative',
      available: true
    },
    {
      id: 3,
      name: 'Business Center',
      location: 'Hyderabad, Telangana',
      price: 400,
      rating: 4.9,
      image: 'https://via.placeholder.com/400x250?text=Business+Center',
      amenities: ['WiFi', 'Coffee', 'Meeting Rooms'],
      capacity: 15,
      type: 'Event',
      available: false
    },
    {
      id: 4,
      name: 'Tech Workspace',
      location: 'Hyderabad, Telangana',
      price: 200,
      rating: 4.7,
      image: 'https://via.placeholder.com/400x250?text=Tech+Workspace',
      amenities: ['WiFi', 'Coffee', '24/7 Access'],
      capacity: 12,
      type: 'Coworking',
      available: true
    },
    {
      id: 5,
      name: 'Design Studio',
      location: 'Hyderabad, Telangana',
      price: 350,
      rating: 4.5,
      image: 'https://via.placeholder.com/400x250?text=Design+Studio',
      amenities: ['WiFi', 'Coffee', 'Design Tools'],
      capacity: 6,
      type: 'Creative',
      available: true
    },
    {
      id: 6,
      name: 'Conference Hall',
      location: 'Hyderabad, Telangana',
      price: 500,
      rating: 4.8,
      image: 'https://via.placeholder.com/400x250?text=Conference+Hall',
      amenities: ['WiFi', 'Coffee', 'AV Equipment'],
      capacity: 50,
      type: 'Event',
      available: true
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSpaces(mockSpaces);
      setLoading(false);
    }, 1000);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const getCategoryTitle = () => {
    if (filters.category) {
      return filters.category.charAt(0).toUpperCase() + filters.category.slice(1) + ' Spaces';
    }
    return 'All Spaces';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg p-6">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {getCategoryTitle()}
            </h1>
            <p className="text-gray-600">
              {spaces.length} spaces available
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <FiFilter className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter location"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="input-field"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="input-field"
              >
                <option value="">Any Price</option>
                <option value="0-200">₹0 - ₹200</option>
                <option value="200-400">₹200 - ₹400</option>
                <option value="400-600">₹400 - ₹600</option>
                <option value="600+">₹600+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Space Type
              </label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="input-field"
              >
                <option value="">All Types</option>
                <option value="coworking">Coworking</option>
                <option value="creative">Creative</option>
                <option value="event">Event</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select className="input-field">
                <option value="">Any Time</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="this-week">This Week</option>
              </select>
            </div>
          </div>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>

        {/* Load More */}
        {spaces.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Spaces
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingsPage; 