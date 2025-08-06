import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <span>I</span>
          </div>
          <span>InfySpaces</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navigation}>
          <Link to="/listings" className={styles.navLink}>
            Browse Spaces
          </Link>
          <Link to="/host" className={styles.navLink}>
            Become a Host
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <Link to="/login" className={styles.loginButton}>
            <FiUser className="w-4 h-4 mr-2" />
            Login
          </Link>
          <Link to="/register" className={styles.signupButton}>
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.active : ''}`}
        >
          {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNav}>
          <Link
            to="/listings"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Spaces
          </Link>
          <Link
            to="/host"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Become a Host
          </Link>
          <Link
            to="/about"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
        <div className={styles.mobileActions}>
          <Link
            to="/login"
            className={styles.mobileLoginButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={styles.mobileSignupButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 