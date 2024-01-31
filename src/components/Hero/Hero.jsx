import React from 'react'
import styles from './Hero.module.css'
import foto from './Foto.jpg'


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Greetings, i'm Augusto</h1>
            <p className={styles.description}>"Self-taught developer in constant search of exciting opportunities. My motivation lies in curiosity and problem-solving. Although I don't have professional experience, I am eager to demonstrate my ability to learn quickly and contribute meaningfully."</p>
            <a href="mailto:augustozelayabaum@gmail.com" className={styles.contactButton}>Contact me</a>
        </div>
        <div>
            <div className={styles.fotoContainer}>
                <img src={foto} alt="avatar" className={styles.foto}/>
            </div>
        </div>
    </section>
  )
}
