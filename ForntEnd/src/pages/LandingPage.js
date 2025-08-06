import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SpaceCard from '../components/SpaceCard';
import CategoryCard from '../components/CategoryCard';
import { FiUsers, FiHome, FiCalendar, FiStar, FiArrowRight } from 'react-icons/fi';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  // Mock data for categories
  const categories = [
    {
      name: 'Coworking Spaces',
      description: 'Shared workspaces for professionals',
      icon: <FiUsers className="w-6 h-6" />,
      color: '#3B82F6',
      count: 45
    },
    {
      name: 'Creative Spaces',
      description: 'Studios and creative environments',
      icon: <FiHome className="w-6 h-6" />,
      color: '#10B981',
      count: 23
    },
    {
      name: 'Event Spaces',
      description: 'Venues for meetings and events',
      icon: <FiCalendar className="w-6 h-6" />,
      color: '#F59E0B',
      count: 18
    }
  ];

  // Mock data for featured spaces
  const featuredSpaces = [
    {
      id: 1,
      name: 'Innovation Hub',
      location: 'Hyderabad, Telangana',
      price: 250,
      rating: 4.8,
      image: 'https://via.placeholder.com/400x250?text=Innovation+Hub',
      amenities: ['WiFi', 'Coffee', 'Parking'],
      capacity: 20,
      type: 'Coworking'
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
      type: 'Creative'
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
      type: 'Event'
    }
  ];

  return (
    <div className={styles.landingPage}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Find Your Perfect Workspace
          </h1>
          <p className={styles.heroSubtitle}>
            Discover and book coworking spaces, creative studios, and event venues
          </p>
          
          {/* Search Bar */}
          <SearchBar />
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesContainer}>
          <h2 className={styles.sectionTitle}>
            Popular Categories
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Find the perfect space for your needs
          </p>
          
          <div className={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Spaces Section */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredContainer}>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className={styles.sectionTitle}>
                Featured Spaces
              </h2>
              <p className="text-lg text-gray-600">
                Top-rated spaces in your area
              </p>
            </div>
            <Link 
              to="/listings" 
              className={styles.viewAllLink}
            >
              View All
              <FiArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className={styles.spacesGrid}>
            {featuredSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Host Your Space?
          </h2>
          <p className={styles.ctaDescription}>
            Join thousands of hosts who are earning by sharing their spaces
          </p>
          <Link to="/host" className={styles.ctaButton}>
            Become a Host
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <div className={styles.logoContainer}>
              <div className={styles.logoIcon}>
                <span>I</span>
              </div>
              <span className={styles.logoText}>InfySpaces</span>
            </div>
            <p className="text-gray-400">
              Find and book the perfect workspace for your needs.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>For Guests</h3>
            <div className={styles.footerLinks}>
              <Link to="/listings" className={styles.footerLink}>Browse Spaces</Link>
              <Link to="/how-it-works" className={styles.footerLink}>How it Works</Link>
              <Link to="/support" className={styles.footerLink}>Support</Link>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>For Hosts</h3>
            <div className={styles.footerLinks}>
              <Link to="/host" className={styles.footerLink}>List Your Space</Link>
              <Link to="/hosting-guide" className={styles.footerLink}>Hosting Guide</Link>
              <Link to="/host-support" className={styles.footerLink}>Host Support</Link>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Company</h3>
            <div className={styles.footerLinks}>
              <Link to="/about" className={styles.footerLink}>About Us</Link>
              <Link to="/careers" className={styles.footerLink}>Careers</Link>
              <Link to="/contact" className={styles.footerLink}>Contact</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 InfySpaces. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 