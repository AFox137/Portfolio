import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <div className={styles.interactive}>
          <div className={styles.inside}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, minima!</p>
          </div>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="" alt="cursor" className={styles.image}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veritatis corporis. Nesciunt natus distinctio magni expedita pariatur, optio unde vitae?
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="" alt="cursor" className={styles.image}/>
            <div className={styles.aboutItemText}>
              <h3>title2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veritatis corporis. Nesciunt natus distinctio magni expedita pariatur, optio unde vitae?
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="" alt="cursor" className={styles.image}/>
            <div className={styles.aboutItemText}>
              <h3>title3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veritatis corporis. Nesciunt natus distinctio magni expedita pariatur, optio unde vitae?
              </p>
            </div>
          </li>
        </ul> 
      </div>

    </section>
  )
}
