import styles from './Projects.module.css';

function Projects(){

    return(
        <section id="projects">

            <p className={styles.command}>
                divya@portfolio:~/projects$ ls
                </p>
            <div className={styles.projectGrid}>
                    <div className={styles.card}>

                        <h3>Automated Emergency Braking System (AEBS)</h3>

                        <p>
                            Developed an Automated Emergency Braking System by implementing authentication and access control components,
                            contributing to software design, testing, requirements analysis, and documentation while following
                            ISO 26262 functional safety standards.
                        </p>

                    </div>

                    <div className={styles.card}>

                        <h3>Autonomous Vehicle Challenge (AVC) Robot</h3>

                        <p>
                            Developed an autonomous robot by implementing navigation and obstacle avoidance algorithms,
                            integrating real-time sensor data with hardware controls, and
                            optimising performance through testing and debugging.
                        </p>

                    </div>

                    <div className={styles.card}>

                        <h3>Security Labs</h3>

                        <p>
                            Performed security assessments of web applications by identifying vulnerabilities including SQL Injection,
                             XSS, CSRF, authentication flaws, and access control weaknesses using Burp Suite and secure coding principles.
                        </p>

                    </div>

                    <div className={styles.card}>

                        <h3>Network Security & Authentication Systems</h3>

                        <p>
                            Analysed network security architectures, firewall design, Zero Trust principles, authentication mechanisms,
                             session management, MFA, and JSON Web Tokens (JWTs) to evaluate common attack vectors and security controls.
                        </p>

                    </div>
                    <div className={styles.card}>

                        <h3>Applications of Cryptography</h3>

                        <p>
                            Implemented AES encryption and decryption across multiple modes, performed a CBC padding oracle attack,
                            detected ECB encryption through repeated ciphertext blocks, recovered weak four-digit PINs via brute-force,
                            and exploited CTR nonce reuse to recover and forge ciphertexts.
                        </p>

                    </div>
                    <div className={styles.card}>

                        <h3>Interactive Simulations & Games</h3>

                        <p>
                            Created interactive simulations and games by implementing physics systems, collision detection, animation,
                            user interaction, and platformer mechanics using Processing (Java).
                        </p>

                    </div>
                    <div className={styles.card}>

                        <h3>Cybersecurity Portfolio Website</h3>

                        <p>
                            Built a cybersecurity portfolio website using React and Vite with a Linux terminal-inspired interface.
                            Implemented responsive components, interactive elements, and Git-based version control.

                        </p>

                    </div>

            </div>

        </section>

    )

}

export default Projects;