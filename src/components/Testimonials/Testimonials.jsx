import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            "He is talented and outstanding. He can do many things."
          </p>
          <img
            src="https://img.lovepik.com/free-png/20210924/lovepik-cartoon-doctor-png-image_401328360_wh1200.png"
            alt=""
          />
          <h4>Toto</h4>
          <p className={styles.bio}>full-stack</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          "He is excellent at web development and he is also a very friendly person, easy to get along with others."
          </p>
          <img
            src="https://img.lovepik.com/free-png/20220127/lovepik-teacher-png-image_401915365_wh1200.png"
            alt=""
          />
          <h4>mew</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          "He is a full-stack developer and also an expert in web development."
          </p>
          <img
            src="https://e7.pngegg.com/pngimages/694/303/png-clipart-school-uniform-homo-sapiens-mangaka-boy-black-hair-boy-purple-brown.png"
            alt=""
          />
          <h4>poy</h4>
          <p className={styles.bio}>Front-end developer.</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;