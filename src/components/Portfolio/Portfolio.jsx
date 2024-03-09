import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from "react-parallax-tilt";
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>P o r t f o l i o </h3>    
      <div className={styles.port_list}>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.fcnx2-1.fna.fbcdn.net/v/t1.15752-9/423599895_1316464552364875_4505183071849162917_n.png?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGLhjrQf5gtVZl9ws5rD-ZUkOfigCoGD_KQ5-KAKgYP8uvtTQ2-Xjeph_-I3Wcc926oxG2RIucztiGHCqE3fUr9&_nc_ohc=NclbteL0cVAAX_Ad5LA&_nc_ht=scontent.fcnx2-1.fna&oh=03_AdQfCEsYhZH9ZkIFWbt17daUYwcfVlxUKKW74ejcZ2YxZA&oe=66135064" alt="" />
            <p>Project Responsive web design</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.fcnx2-1.fna.fbcdn.net/v/t1.15752-9/423568249_8307232482637816_8924882843596497539_n.png?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEkaMO8Zy9y7PoZ192cqrdFqFzdF6aHuz6oXN0Xpoe7Pnptia2uJXosAfW9Nyp7CAwQJmcYeObMqKKEVsZ3McUh&_nc_ohc=hdXYkL-JB6AAX_TaYgj&_nc_ht=scontent.fcnx2-1.fna&oh=03_AdTuS3XS0JNT0TFXJ5ObiITIoqVHUbq0BPekMex6TS8RZw&oe=66134DA8" alt="" />
            <p>Project แอปเที่ยวพะเยา</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.fcnx2-1.fna.fbcdn.net/v/t1.15752-9/423766262_926161035714963_8716615377597505250_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFVoAqPIO6whV3ZeQgCVKNRWlpeGUY0DW5aWl4ZRjQNbkXhfEG3Q5EuFba4bKnKe23zh0RGh-JXEg0deosEiksi&_nc_ohc=XXiE4jUxtL8AX_OqgIx&_nc_ht=scontent.fcnx2-1.fna&oh=03_AdQyK_YQG2O-PUiYO0yGvqd6lynw7fRHGNSPc81kox3PSw&oe=6613354F" alt="" />
            <p>Project Poerfolio</p>
        </div>
        </Tilt>
        
      </div>
      
    </div>
  )
}

export default Portfolio