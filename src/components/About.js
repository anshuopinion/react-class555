import React from "react";
import style from "./About.module.css";
function About() {
  return (
    <section className={style.aboutSection}>
      <div className={style.left}>
        <p className={style.aboutUs}>ABOUT US</p>
        <h2>We work with top brands and startups</h2>
        <ul>
          <li>
            <p>ICON</p>
            <p>TOP NOTCH</p>
          </li>
          <li>
            <p>ICON</p>
            <p>TOP NOTCH</p>
          </li>
          <li>
            <p>ICON</p>
            <p>TOP NOTCH</p>
          </li>
          <li>
            <p>ICON</p>
            <p>TOP NOTCH</p>
          </li>
        </ul>
        <button>Learn More</button>
      </div>
      <div className={style.right}>
        <p>
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin
          eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et,
          porttitor at sem. Donec rutrum congue leo eget malesuada. Quisque
          velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu
          erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet
          quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla
          porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.
          Sed porttitor lectus nibh. Proin eget tortor risus. Donec rutrum
          congue leo eget malesuada. Curabitur aliquet quam id dui posuere
          blandit. Praesent sapien massa, convallis a pellentesque nec, egestas
          non nisi. Sed porttitor lectus nibh. Cras ultricies ligula sed magna
          dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id
          enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada.
          Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur
        </p>
      </div>
    </section>
  );
}

export default About;
