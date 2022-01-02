import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';




function Wallpapers(){
    return(
      <div className={styles.container}>
         <Head>
        <title>Chris Brian</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <header>
          <h1 className={styles.title}>
            My Gallery
          </h1>
          <hr className={styles.hr}/>
          <p className={styles.description}>
           Capturing the moment
            <br/>
           Chris Brian.
          </p>
      </header>
      <div className={styles.whitesection}>
        <h1 className={styles.title}>
            Wallpapers
        </h1>  
            <div className={styles.grid}>
                  <div className={styles.cards}>
                  <span className={styles.secimg}>
                    <Image src="/3.jpg" height={250} width={400}/>
                  </span>
                      <h2> Events photography</h2>
                  </div>
                  <div className={styles.cards}>
                  <span className={styles.secimg}>
                    <Image src="/4.jpg" height={250} width={400}/>
                  </span>
                  <h2> Drone Shoots </h2>
                  </div>
            </div>
            <div className={styles.grid}>
             <div className={styles.cards}>
             <span className={styles.secimg}>
               <Image src="/5.jpg" height={250} width={400}/>
            </span>
                <h2> Advertisement</h2>
             </div>
             <div className={styles.cards}>
             <span className={styles.secimg}>
               <Image src="/6.jpg" height={250} width={400}/>
            </span>
            <h2> Wallpapers </h2>
             </div>
            </div>
            <div className={styles.grid}>
             <div className={styles.cards}>
             <span className={styles.secimg}>
               <Image src="/3.jpg" height={250} width={400}/>
            </span>
                <h2> Events photography</h2>
             </div>
             <div className={styles.cards}>
             <span className={styles.secimg}>
               <Image src="/4.jpg" height={250} width={400}/>
            </span>
            <h2> Drone Shoots </h2>
             </div>
            </div>
            <div className={styles.grid}>
             <div className={styles.cards}>
             <span className={styles.secimg}>
               <Image src="/5.jpg" height={250} width={400}/>
            </span>
                <h2> Advertisement</h2>
             </div>
             <div className={styles.cards}>
             <span className={styles.secimg}>
               <Image src="/6.jpg" height={250} width={400}/>
            </span>
            <h2> Wallpapers </h2>
             </div>
            </div>
      </div>
    </div>
    )
   }
   export default Wallpapers