import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FiCalendar, FiClock, FiMapPin, FiUser, FiSettings, FiLogOut, FiStar } from 'react-icons/fi';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/100x100?text=JD',
    accountType: 'user'
  });

  // Mock data for bookings
  const [bookings, setBookings] = useState([
    {
      id: 1,
      spaceName: 'Innovation Hub',
      spaceImage: 'https://via.placeholder.com/300x200?text=Innovation+Hub',
      date: '2024-01-25',
      startTime: '09:00',
      endTime: '17:00',
      status: 'upcoming',
      price: 2000,
      bookingId: 'BK123456789'
    },
    {
      id: 2,
      spaceName: 'Creative Studio',
      spaceImage: 'https://via.placeholder.com/300x200?text=Creative+Studio',
      date: '2024-01-20',
      startTime: '10:00',
      endTime: '14:00',
      status: 'completed',
      price: 1200,
      bookingId: 'BK987654321'
    },
    {
      id: 3,
      spaceName: 'Business Center',
      spaceImage: 'https://via.placeholder.com/300x200?text=Business+Center',
      date: '2024-01-15',
      startTime: '13:00',
      endTime: '18:00',
      status: 'completed',
      price: 2500,
      bookingId: 'BK456789123'
    }
  ]);

  const [spaces, setSpaces] = useState([
    {
      id: 1,
      name: 'My Coworking Space',
      image: 'https://via.placeholder.com/300x200?text=My+Space',
      status: 'active',
      bookings: 12,
      earnings: 15000
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
                <p className="text-gray-600">{user.email}</p>
                <div className="flex items-center mt-1">
                  <FiUser className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500 capitalize">{user.accountType}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="/settings" className="btn-secondary">
                <FiSettings className="w-4 h-4 mr-2" />
                Settings
              </Link>
              <button className="btn-secondary text-red-600 hover:text-red-700">
                <FiLogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FiCalendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <FiClock className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'upcoming').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <FiStar className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'completed').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FiMapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">My Spaces</p>
                <p className="text-2xl font-bold text-gray-900">{spaces.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'bookings'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Bookings
              </button>
              {user.accountType === 'host' && (
                <button
                  onClick={() => setActiveTab('spaces')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'spaces'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  My Spaces
                </button>
              )}
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Profile
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'bookings' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">My Bookings</h2>
                  <Link to="/listings" className="btn-primary">
                    Book New Space
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={booking.spaceImage}
                          alt={booking.spaceName}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{booking.spaceName}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                <div className="flex items-center">
                                  <FiCalendar className="w-4 h-4 mr-1" />
                                  {formatDate(booking.date)}
                                </div>
                                <div className="flex items-center">
                                  <FiClock className="w-4 h-4 mr-1" />
                                  {booking.startTime} - {booking.endTime}
                                </div>
                              </div>
                              <div className="flex items-center mt-2">
                                <span className="text-sm text-gray-600">Booking ID: {booking.bookingId}</span>
                                <span className={`ml-4 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                                  {booking.status}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-gray-900">₹{booking.price}</div>
                              {booking.status === 'upcoming' && (
                                <button className="text-sm text-red-600 hover:text-red-700 mt-1">
                                  Cancel Booking
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'spaces' && user.accountType === 'host' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">My Spaces</h2>
                  <Link to="/host" className="btn-primary">
                    List New Space
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {spaces.map((space) => (
                    <div key={space.id} className="border border-gray-200 rounded-lg p-6">
                      <img
                        src={space.image}
                        alt={space.name}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{space.name}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Status:</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            space.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {space.status}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Bookings:</span>
                          <span>{space.bookings}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Earnings:</span>
                          <span>₹{space.earnings}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="btn-secondary text-sm flex-1">Edit</button>
                        <button className="btn-secondary text-sm flex-1">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
                
                <div className="max-w-2xl space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                      <button className="text-sm text-primary-600 hover:text-primary-700 mt-1">
                        Change Photo
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="input-field" defaultValue="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="input-field" defaultValue="Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" className="input-field" defaultValue={user.email} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" className="input-field" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      rows="4"
                      className="input-field"
                      placeholder="Tell us about yourself..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button className="btn-primary">Save Changes</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 