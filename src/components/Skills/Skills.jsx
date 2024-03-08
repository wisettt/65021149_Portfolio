import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaCss3 , FaHtml5, FaPython} from 'react-icons/fa6'

function Skills() {
  return (
    <div className={styles.skills_container}>
        <h3 className={styles.skills_title}>My Skills Set</h3>
        <ul className={styles.skills_list}>
            <li><FaSquareJs/></li>
            <li><FaReact/></li>
            <li><FaCss3 /></li>
            <li><FaHtml5/></li>
            <li><FaPython/></li>
            
        </ul>
      
    </div>
  )
}

export default Skills