import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={styles.logo}>
        <FontAwesomeIcon
          className={styles.logo__icon}
          icon={faYoutube}
          size='2x'
        />
        <span className={styles.logo__text}>Youtube</span>
        <span className={styles.logo__countryCode}>KR</span>
      </div>
      <div className={styles.search}>
        <form className={styles.search__form}>
          <input
            type='text'
            placeholder='Search'
            className={styles.search__text}
          />
          <button type='submit'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.search__button}
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
