import styles from './Contact.module.css';

// Placeholder images
import linkedinIcon from '../../assets/hero.png';
import githubIcon from '../../assets/hero.png';
import gmailIcon from '../../assets/hero.png';

function Contact() {
    return (
        <section id="contact" className={styles.contact}>

            <p className={styles.command}>
                divya@portfolio:~$ ssh divya@contact
            </p>

            <div className={styles.headingRow}>

                <div className={styles.iconGroup}>
                    <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                    <img src={githubIcon} alt="GitHub" className={styles.icon} />
                    <img src={gmailIcon} alt="Gmail" className={styles.icon} />
                </div>

                <h2 className={styles.letsconnect}>
                    Let's Connect
                </h2>

            </div>

        </section>
    );
}

export default Contact;