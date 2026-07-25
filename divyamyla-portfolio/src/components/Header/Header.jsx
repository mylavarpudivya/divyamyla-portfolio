import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        divya@portfolio:~$
      </div>

      <nav>

        <a href="#about">cd about</a>

        <a href="#skills">cd skills</a>

        <a href="#projects">cd projects</a>

        <a href="#experience">cd experience</a>

        <a href="#contact">ssh contact</a>

      </nav>

    </header>
  );
}

export default Header;