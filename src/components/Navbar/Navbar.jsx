import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Skills</a>
                    </li>
                    <li>
                        <a href="/">Proyects</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
