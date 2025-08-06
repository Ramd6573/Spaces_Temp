import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { FiStar, FiMapPin, FiUsers, FiWifi, FiCoffee, FiTruck, FiCalendar, FiClock, FiHeart } from 'react-icons/fi';

const SpaceDetailPage = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock data for space details
  const mockSpace = {
    id: id,
    name: 'Innovation Hub',
    location: 'Hyderabad, Telangana',
    rating: 4.8,
    reviews: 45,
    category: 'Coworking Space',
    description: 'A modern coworking space designed for entrepreneurs, freelancers, and remote workers. Features high-speed internet, meeting rooms, and a collaborative environment.',
    images: [
      'https://via.placeholder.com/800x400?text=Innovation+Hub+1',
      'https://via.placeholder.com/800x400?text=Innovation+Hub+2',
      'https://via.placeholder.com/800x400?text=Innovation+Hub+3'
    ],
    amenities: [
      { name: 'WiFi', icon: <FiWifi className="w-5 h-5" />, available: true },
      { name: 'Coffee', icon: <FiCoffee className="w-5 h-5" />, available: true },
      { name: 'Parking', icon: <FiTruck className="w-5 h-5" />, available: true },
      { name: 'Meeting Rooms', icon: <FiUsers className="w-5 h-5" />, available: true },
      { name: '24/7 Access', icon: <FiClock className="w-5 h-5" />, available: false },
      { name: 'Printing', icon: <FiUsers className="w-5 h-5" />, available: true }
    ],
    pricing: {
      hourly: 250,
      daily: 1500,
      monthly: 15000
    },
    capacity: 20,
    host: {
      name: 'Sarah Johnson',
      avatar: 'https://via.placeholder.com/50x50?text=SJ',
      rating: 4.9,
      responseTime: '1 hour'
    },
    reviews: [
      {
        id: 1,
        user: 'Alex Chen',
        rating: 5,
        comment: 'Great workspace with excellent facilities. Highly recommended!',
        date: '2024-01-15'
      },
      {
        id: 2,
        user: 'Maria Garcia',
        rating: 4,
        comment: 'Good location and friendly staff. WiFi could be faster.',
        date: '2024-01-10'
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSpace(mockSpace);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select date and time');
      return;
    }
    // Navigate to booking flow
    window.location.href = `/booking/${id}?date=${selectedDate}&time=${selectedTime}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!space) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Space not found</h1>
          <Link to="/listings" className="btn-primary">Back to Listings</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link to="/listings" className="hover:text-gray-700">Spaces</Link></li>
            <li>/</li>
            <li className="text-gray-900">{space.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Images */}
            <div className="mb-8">
              <img
                src={space.images[0]}
                alt={space.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Space Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{space.name}</h1>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <FiMapPin className="w-4 h-4 mr-1" />
                      <span>{space.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FiStar className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span>{space.rating} ({space.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-500">
                  <FiHeart className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Category</h3>
                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                  {space.category}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{space.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {space.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-5 h-5 ${amenity.available ? 'text-green-500' : 'text-gray-400'}`}>
                        {amenity.icon}
                      </div>
                      <span className={`text-sm ${amenity.available ? 'text-gray-700' : 'text-gray-400'}`}>
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">₹{space.pricing.hourly}</div>
                    <div className="text-sm text-gray-600">Per Hour</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">₹{space.pricing.daily}</div>
                    <div className="text-sm text-gray-600">Per Day</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">₹{space.pricing.monthly}</div>
                    <div className="text-sm text-gray-600">Per Month</div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-center text-gray-600">
                    <FiCalendar className="w-8 h-8 mx-auto mb-2" />
                    <p>Select your preferred date and time to check availability</p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Reviews ({space.reviews.length})</h3>
                <div className="space-y-4">
                  {space.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-medium text-gray-900">{review.user}</div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book This Space</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full btn-primary py-3 text-lg"
              >
                Book Now
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Host Information</h4>
                <div className="flex items-center space-x-3">
                  <img
                    src={space.host.avatar}
                    alt={space.host.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{space.host.name}</div>
                    <div className="text-sm text-gray-600">
                      Response time: {space.host.responseTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailPage; 