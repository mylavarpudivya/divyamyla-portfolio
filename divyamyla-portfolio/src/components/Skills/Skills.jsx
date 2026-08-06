import styles from "./Skills.module.css";

function Skills(){

    return(
        <section id="skills" className={styles.skills}>
            <p className={styles.command}>divya@portfolio:~$ tree skills</p>

            <div className={styles.tree}>
                <ul>
                    <li>Programming
                        <ul>
                            <li>C</li>
                            <li>C++</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Rust</li>
                            <li>Bash</li>
                        </ul>
                    </li>

                    <li>Cyber Security
                        <ul>
                            <li>OWASP Top 10</li>
                            <li>Burp Suite</li>
                            <li>Linux</li>
                            <li>JWT</li>
                            <li>Network Security</li>
                        </ul>
                    </li>

                    <li>Tools
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>VS Code</li>
                            <li>IntelliJ</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>

)

    }

export default Skills;