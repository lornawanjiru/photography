import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Contact from '../components/contact';
import Link from 'next/link'



export default function Home() {
  return (
    <div className={styles.container}>
      
      
      <Head>
        <title>Chris Brian</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>
            My Portfolio
          </h1>
          <hr className={styles.hr}/>
          <p className={styles.description}>
            Hello there,
            <br/>
           Just showcasing my skills
          </p>
        </header>
        <div className={styles.whitesection}>
          <section className={styles.whoiam}>
           <div className={styles.grid}>
            <div className={styles.secimg}>
               <Image src="/back.jpeg" height={500} width={400}/>
            </div>
            <div className={styles.details}>
            <h1 className={styles.title}>
               WHO AM I
            </h1>
            <hr className={styles.hr}/>
            <p className={styles.description}>
                          Experienced and passionate Cinematographer with
              extensive industry experience, training, and proven
              success in cinematography. Adept in overseeing all
              aspects of film production, including camera lens
              choices, camera manipulation, lighting choices, set
              design, and various technological matters that affect the
              overall visual outcome in the film. Bringing forth the
              ability to collaborative effectively with others, and
              prioritize the goals of the film efficiently. Enthusiastic
              and committed to creating thought and emotion
              provoking cinema.
            </p>
            <div className={styles.buttonsec}>
            <div className={styles.downsec}>
              <Link href="/cv.pdf" target="_blank" download>
            <button className={styles.downbutton}>
              Download cv
            </button>
             </Link>
            </div>
            <div className={styles.hiresec}>
               <Link href='#contact' smooth={true} >
               <button className={styles.hirebutton}>
                  Hire me
               </button>   
               </Link>
              </div> 
            </div>
            </div>
            </div>
          </section>
          
        </div>
        <section className={styles.portfolio}>
          <div className={styles.whitesection}>
            <span className={styles.secimg}>
               <Image src="/2.jpg" height={250} width={350}/>
            </span>
            <h1 className={styles.title}>
               STUFF I DO
            </h1>
            <hr className={styles.hr}/>
            <p className={styles.description}>
                          Demonstrate flexibility and integrity, and bring
              outstanding dedication to the organization’s tasks while
              gaining experience in various cinematography sub
              sections by working within a team of highly competent
              professionals.
            </p> 
           <div className={styles.grid}>
             <div className={styles.cards}>
             <Link href='/gallery/events'> 
             <span className={styles.secimg}>
               <Image src="/3.jpg" height={250} width={400}/>
             </span>
             </Link>
                <h2> Events photography</h2>
             </div>
             <div className={styles.cards}>
             <Link href='/gallery/drone'> 
             <span className={styles.secimg}>
               <Image src="/4.jpg" height={250} width={400}/>
            </span>
            </Link>
            <h2> Drone Shoots </h2>
             </div>
            </div>
            <div className={styles.grid}>
             <div className={styles.cards}>
             <Link href='/gallery/advert'> 
             <span className={styles.secimg}>
               <Image src="/5.jpg" height={250} width={400}/>
            </span>
            </Link>
                <h2> Advertisement</h2>
             </div>
             <div className={styles.cards}>
             <Link href='/gallery/wallpaper'> 
             <span className={styles.secimg}>
               <Image src="/6.jpg" height={250} width={400}/>
            </span>
            </Link>
            <h2> Wallpapers </h2>
             </div>
            </div>
            <div className={styles.grid}>
             <div className={styles.cards}>
             <Link href='/gallery/portraits'> 
             <span className={styles.secimg}>
               <Image src="/3.jpg" height={250} width={400}/>
            </span>
            </Link>
                <h2> Portraits </h2>
             </div>
             <div className={styles.cards}>
             {/* <Link href='/gallery/wallpaper'> 
             <span className={styles.secimg}>
               <Image src="/6.jpg" height={250} width={400}/>
            </span>
            </Link>
            <h2> Wallpapers </h2> */}
             </div>
            </div>
          </div>
        </section>  
        <section className={styles.resume}>
          <div className={styles.whitesection}>
            <span className={styles.secimg}>
               <Image src="/7.jpg" height={250} width={400}/>
            </span>
            <h1 className={styles.title}>
               RESUME
            </h1>
            <hr className={styles.hr}/>
            <p className={styles.description}>
            Going through my resume will help you understand much about me. It will prove my experience and ablity to 
            do the task at hand. 
            </p> 
            <Link href='/resume'> 
            <button className={styles.button}>
              Resume
            </button>
            </Link>
          </div>
        </section> 
        <Contact/>
        </main>
        
    </div>
  )
}
