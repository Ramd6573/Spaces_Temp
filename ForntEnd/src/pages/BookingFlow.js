import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { FiCalendar, FiClock, FiUser, FiCreditCard, FiCheck } from 'react-icons/fi';

const BookingFlow = () => {
  const { spaceId } = useParams();
  const [searchParams] = useSearchParams();
  const [space, setSpace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState({
    date: searchParams.get('date') || '',
    startTime: searchParams.get('time') || '',
    endTime: '',
    duration: '1',
    guests: 1,
    totalPrice: 0
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock space data
  const mockSpace = {
    id: spaceId,
    name: 'Innovation Hub',
    location: 'Hyderabad, Telangana',
    price: 250,
    image: 'https://via.placeholder.com/400x250?text=Innovation+Hub',
    host: {
      name: 'Sarah Johnson',
      avatar: 'https://via.placeholder.com/50x50?text=SJ'
    }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSpace(mockSpace);
      setLoading(false);
    }, 1000);
  }, [spaceId]);

  useEffect(() => {
    // Calculate total price
    const duration = parseInt(bookingData.duration);
    const totalPrice = duration * (space?.price || 0);
    setBookingData(prev => ({
      ...prev,
      totalPrice
    }));
  }, [bookingData.duration, space]);

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateEndTime = (startTime, duration) => {
    if (!startTime) return '';
    
    const [hours, minutes] = startTime.split(':').map(Number);
    const endHours = hours + parseInt(duration);
    return `${endHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const handleDurationChange = (duration) => {
    setBookingData(prev => ({
      ...prev,
      duration,
      endTime: calculateEndTime(prev.startTime, duration)
    }));
  };

  const handleStartTimeChange = (startTime) => {
    setBookingData(prev => ({
      ...prev,
      startTime,
      endTime: calculateEndTime(startTime, prev.duration)
    }));
  };

  const handleBooking = () => {
    if (!isLoggedIn) {
      // Redirect to login
      window.location.href = '/login?redirect=/booking/' + spaceId;
      return;
    }
    
    // Proceed with booking
    setCurrentStep(2);
  };

  const handleConfirmBooking = () => {
    // Simulate booking confirmation
    setCurrentStep(3);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center ${currentStep >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                currentStep >= 1 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'
              }`}>
                1
              </div>
              <span className="ml-2 text-sm font-medium">Booking Details</span>
            </div>
            <div className="w-8 h-1 bg-gray-300"></div>
            <div className={`flex items-center ${currentStep >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                currentStep >= 2 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'
              }`}>
                2
              </div>
              <span className="ml-2 text-sm font-medium">Confirmation</span>
            </div>
            <div className="w-8 h-1 bg-gray-300"></div>
            <div className={`flex items-center ${currentStep >= 3 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                currentStep >= 3 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'
              }`}>
                3
              </div>
              <span className="ml-2 text-sm font-medium">Complete</span>
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
              
              <div className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiCalendar className="w-4 h-4 inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="input-field"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FiClock className="w-4 h-4 inline mr-2" />
                      Start Time
                    </label>
                    <select
                      value={bookingData.startTime}
                      onChange={(e) => handleStartTimeChange(e.target.value)}
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
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration
                    </label>
                    <select
                      value={bookingData.duration}
                      onChange={(e) => handleDurationChange(e.target.value)}
                      className="input-field"
                    >
                      <option value="1">1 Hour</option>
                      <option value="2">2 Hours</option>
                      <option value="4">4 Hours</option>
                      <option value="8">8 Hours</option>
                    </select>
                  </div>
                </div>

                {/* End Time Display */}
                {bookingData.endTime && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">End Time: {bookingData.endTime}</div>
                  </div>
                )}

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiUser className="w-4 h-4 inline mr-2" />
                    Number of Guests
                  </label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) => handleInputChange('guests', e.target.value)}
                    className="input-field"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                {/* Login/Register */}
                {!isLoggedIn && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <FiUser className="w-5 h-5 text-yellow-600 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-yellow-800">Login Required</div>
                        <div className="text-sm text-yellow-700">Please login or register to complete your booking</div>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <Link to="/login" className="btn-secondary text-sm">
                        Login
                      </Link>
                      <Link to="/register" className="btn-primary text-sm">
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking Summary</h3>
              
              {/* Space Info */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{space.name}</h4>
                  <p className="text-sm text-gray-600">{space.location}</p>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{bookingData.date || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Time:</span>
                  <span className="font-medium">{bookingData.startTime || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">End Time:</span>
                  <span className="font-medium">{bookingData.endTime || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-medium">{bookingData.guests}</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Price:</span>
                  <span>₹{bookingData.totalPrice}</span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                disabled={!bookingData.date || !bookingData.startTime}
                className="w-full btn-primary mt-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoggedIn ? 'Continue to Payment' : 'Login to Continue'}
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="mb-6">
              <FiCreditCard className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Details</h2>
              <p className="text-gray-600">Complete your booking by providing payment information</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="input-field"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="input-field"
                />
              </div>
              <input
                type="text"
                placeholder="Cardholder Name"
                className="input-field"
              />
            </div>

            <button
              onClick={handleConfirmBooking}
              className="btn-primary mt-8 px-8 py-3"
            >
              Confirm & Book
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600">Your booking has been successfully confirmed</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Booking Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-medium">#BK{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Space:</span>
                  <span className="font-medium">{space.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{bookingData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{bookingData.startTime} - {bookingData.endTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-medium">₹{bookingData.totalPrice}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link to="/dashboard" className="btn-primary block">
                View My Bookings
              </Link>
              <Link to="/listings" className="btn-secondary block">
                Browse More Spaces
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingFlow; 