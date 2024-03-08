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
            <img src="https://dochub.com/dlbwiset/5lae27DR5Y9PbErRmqjZv1/image-1-png" alt="" />
            <p>Project Responsive web design</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://dochub.com/dlbwiset/pqb0g5YRqvLp88DKJ2nx67/image-png" alt="" />
            <p>Project แอปเที่ยวพะเยา</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://dochub.com/dlbwiset/8YZWO9NV8x9paWZVzEAy30/423766262-926161035714963-8716615377597505250-n-jpg" alt="" />
            <p>Project Poerfolio</p>
        </div>
        </Tilt>
        
      </div>
      
    </div>
  )
}

export default Portfolio