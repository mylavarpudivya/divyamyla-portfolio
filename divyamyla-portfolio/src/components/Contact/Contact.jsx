import styles from './Contact.module.css';

// Placeholder images
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import gmailIcon from '../../assets/gmail.png';

function Contact() {
    return (
        <section id="contact" className={styles.contact}>

            <p className={styles.command}>
                divya@portfolio:~$ ssh divya@contact
            </p>

            <div className={styles.headingRow}>
                <h2 className={styles.letsconnect}>
                    Let's Connect
                </h2>

                <div className={styles.iconGroup}>
                    <div className={styles.iconBox}>
                        <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                    </div>
                    <div className={styles.iconBox}>
                        <img src={githubIcon} alt="GitHub" className={styles.icon} />
                    </div>
                    <div className={styles.iconBox}>
                        <img src={gmailIcon} alt="Gmail" className={styles.icon} />
                    </div>
                </div>


            </div>

        </section>
    );
}

export default Contact;