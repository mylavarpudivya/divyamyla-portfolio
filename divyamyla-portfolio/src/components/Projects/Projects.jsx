import styles from './Projects.module.css';

function Projects(){

    return(
        <section id="projects">

            <p className={styles.command}>
                divya@portfolio:~/projects$ ls
                </p>

            <div className={styles.card}>

                <h3>AEBS</h3>

                <p>
                    Authentication, access control and software
                    testing using Java and Rust.
                </p>

            </div>

            <div className={styles.card}>

                <h3>Autonomous Vehicle Robot</h3>

                <p>
                    C++ robotics and autonomous navigation.
                </p>

            </div>

            <div className={styles.card}>

                <h3>Security Labs</h3>

                <p>
                    Burp Suite, Linux and OWASP testing.
                </p>

            </div>

        </section>

    )

}

export default Projects;