import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiMapPin, FiUsers, FiWifi, FiCoffee } from 'react-icons/fi';
import styles from './SpaceCard.module.css';

const SpaceCard = ({ space }) => {
  const {
    id,
    name,
    location,
    price,
    rating,
    image,
    amenities = [],
    capacity,
    type
  } = space;

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <FiWifi className="w-4 h-4" />;
      case 'coffee':
        return <FiCoffee className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.spaceCard}>
      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          src={image || 'https://via.placeholder.com/400x250?text=Space+Image'}
          alt={name}
          className={styles.image}
        />
        <div className={styles.badge}>
          {type}
        </div>
        <div className={styles.rating}>
          <FiStar className="w-4 h-4" style={{ color: '#fbbf24', fill: 'currentColor' }} />
          <span>{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Title */}
        <h3 className={styles.title}>{name}</h3>

        {/* Location */}
        <div className={styles.location}>
          <FiMapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        {/* Price */}
        <div className={styles.price}>
          ₹{price}
          <span className={styles.priceUnit}>/hour</span>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className={styles.amenities}>
            {amenities.slice(0, 3).map((amenity, index) => (
              <div key={index} className={styles.amenity}>
                {getAmenityIcon(amenity)}
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        )}

        {/* Capacity */}
        <div className={styles.capacity}>
          <FiUsers className="w-4 h-4" />
          <span>Up to {capacity} people</span>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Link
            to={`/space/${id}`}
            className={styles.viewButton}
          >
            View Details
          </Link>
          <Link
            to={`/booking/${id}`}
            className={styles.bookButton}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard; 