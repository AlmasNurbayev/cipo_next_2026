'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>Cipo</Link>
        
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Меню">
          ☰
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.navLink} onClick={toggleMenu}>Главная</Link>
          <Link href="/catalog" className={styles.navLink} onClick={toggleMenu}>Каталог</Link>
          <a href="#advantages" className={styles.navLink} onClick={toggleMenu}>Преимущества</a>
          <a href="#news" className={styles.navLink} onClick={toggleMenu}>Новости</a>
          <a href="#shops" className={styles.navLink} onClick={toggleMenu}>Магазины</a>
        </nav>

        <div className={`${styles.socials} ${isOpen ? styles.open : ''}`}>
          <a href="https://wa.me/77000000000" className={styles.socialLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://instagram.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </header>
  );
}
