import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin, FiCalendar } from 'react-icons/fi';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    date: '',
    guests: '1'
  });
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      location: searchData.location,
      date: searchData.date,
      guests: searchData.guests
    });
    navigate(`/listings?${queryParams.toString()}`);
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        {/* Location */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Location</label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Where are you looking?"
              value={searchData.location}
              onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
              className={`${styles.input} pl-10`}
            />
          </div>
        </div>

        {/* Date */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Date</label>
          <div className="relative">
            <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={searchData.date}
              onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
              className={`${styles.input} pl-10`}
            />
          </div>
        </div>

        {/* Guests */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Guests</label>
          <select
            value={searchData.guests}
            onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
            className={styles.select}
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5+">5+ Guests</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className={styles.searchButton}
        >
          <FiSearch className={styles.searchIcon} />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar; 