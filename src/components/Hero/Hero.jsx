import React from 'react'
import styles from './Hero.module.css'
import foto from './Foto.jpg'


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Greetings, i'm Augusto</h1>
            <p className={styles.description}>Desarrollador autodidacta en constante búsqueda de oportunidades emocionantes. Mi motivación radica en la curiosidad y la resolución de problemas. Aunque no tengo experiencia profesional, estoy ansioso por demostrar mi habilidad para aprender rápidamente y contribuir de manera significativa.</p>
            <a href="mailto:augustozelayabaum@gmail.com" className={styles.contactButton}>Contact me</a>
        </div>
        <div>
            <div className={styles.fotoContainer}>
                <img src={foto} alt="foto de perfil" className={styles.foto}/>
            </div>
        </div>
    </section>
  )
}
