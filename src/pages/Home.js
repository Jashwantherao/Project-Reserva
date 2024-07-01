// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FaRegCalendarAlt, FaShoppingBasket, FaComment, FaLuggageCart, FaMoneyCheckAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>Project Reserva</h1>
          <nav className={styles.navLinks}>
            <Link to="/cancel-booking" className={styles.navLink}>Cancel Booking</Link>
            <Link to="/shops" className={styles.navLink}>Nearby Shops</Link>
            <Link to="/chat" className={styles.navLink}>Chat with Us</Link>
            <Link to="/report-missing-bag" className={styles.navLink}>Report Missing Bag</Link>
            <Link to="/dynamic-pricing" className={styles.navLink}>Dynamic Pricing</Link>
          </nav>
          <div className={styles.authLinks}>
            <Link to="/login" className={styles.authButton}>Login</Link>
            <span className={styles.separator}>|</span>
            <Link to="/register" className={styles.authButton}>Register</Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.featureSection}>
          <FaRegCalendarAlt className={styles.featureIcon} />
          <div className={styles.featureContent}>
            <h2>Cancel Booking</h2>
            <p>Cancel your bus booking up to a specified time before departure.</p>
            <Link to="/cancel-booking" className={styles.featureLink}>Cancel Booking</Link>
          </div>
        </section>

        <section className={styles.featureSection}>
          <FaShoppingBasket className={styles.featureIcon} />
          <div className={styles.featureContent}>
            <h2>Nearby Shops</h2>
            <p>Discover shops and amenities near bus stops or stations.</p>
            <Link to="/shops" className={styles.featureLink}>Explore Nearby Shops</Link>
          </div>
        </section>

        <section className={styles.featureSection}>
          <FaComment className={styles.featureIcon} />
          <div className={styles.featureContent}>
            <h2>Chat with Us</h2>
            <p>Get in touch with customer support or other users.</p>
            <Link to="/chat" className={styles.featureLink}>Start Chatting</Link>
          </div>
        </section>

        <section className={styles.featureSection}>
          <FaLuggageCart className={styles.featureIcon} />
          <div className={styles.featureContent}>
            <h2>Report Missing Bag</h2>
            <p>Report missing bags or items during your journey.</p>
            <Link to="/report-missing-bag" className={styles.featureLink}>Report Missing Bag</Link>
          </div>
        </section>

        <section className={styles.featureSection}>
          <FaMoneyCheckAlt className={styles.featureIcon} />
          <div className={styles.featureContent}>
            <h2>Dynamic Pricing</h2>
            <p>View real-time pricing based on demand and availability.</p>
            <Link to="/dynamic-pricing" className={styles.featureLink}>View Dynamic Pricing</Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Project Reserva. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
