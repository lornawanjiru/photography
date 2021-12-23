import styles from '../styles/Home.module.css'

function Header(){
    return(
        <main className={styles.main}>
        <h1 className={styles.title}>
          My Portfolio
        </h1>
        <hr className={styles.hr}/>
        <p className={styles.description}>
          Hello there,
          <br/>
          Am Chris Brian <br/>
          This is my simple portfolio
        </p>
        <p className={styles.description}>
          Hello there,
          <br/>
          Am Chris Brian <br/>
          This is my simple portfolio
        </p>
        </main>
     )
    }
    export default Header