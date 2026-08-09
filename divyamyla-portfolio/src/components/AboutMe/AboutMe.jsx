import styles from "./AboutMe.module.css";
import profilePic from "../../assets/headshot.jpg";
import cv from '../../assets/DivyaMylavarpuCV.pdf';

function AboutMe(){

    return(

        <section
            id="about"
            className={styles.about}
        >

            <div className={styles.content}>

                <div className={styles.text}>

                    <p className={styles.command}>
                        divya@portfolio:~$ cat about.txt
                    </p>

                    <h2>About Me</h2>

                    <p>
                        I'm a third-year Cyber Security Engineering student
                        at Victoria University of Wellington with a passion
                        for secure software development, Linux systems,
                        vulnerability assessment and ethical hacking.
                    </p>
                     <a
                         href={cv}
                         target="_blank"
                         rel="noopener noreferrer"
                         className={styles.cvButton}
                     >
                         View CV
                     </a>

                </div>


                <div className={styles.imageContainer}>
                    <img
                        src={profilePic}
                        alt="Divya"
                        className={styles.profile}
                    />
                </div>


            </div>

        </section>

    )

}

export default AboutMe;