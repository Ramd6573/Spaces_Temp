import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category }) => {
  const { name, description, icon, color, count } = category;

  return (
    <Link to={`/listings?category=${name.toLowerCase()}`} className={styles.categoryCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardLeft}>
          <div 
            className={styles.iconContainer}
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.count}>{count} spaces available</p>
          </div>
        </div>
        <FiArrowRight className={styles.arrow} />
      </div>
    </Link>
  );
};

export default CategoryCard; 