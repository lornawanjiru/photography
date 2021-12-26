import styles from '../styles/Home.module.css';

function Resume(){
         
 return(
    <div className={styles.container}>
      <header>
          <h1 className={styles.title}>
            My Resume
          </h1>
          <hr className={styles.hr}/>
          <p className={styles.description}>
            Hello there,
            <br/>
           Just showcasing my skills
          </p>
        </header>
      <section className={styles.timelinesection}>
        <div className={styles.timelineitems}>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2015</div>
            <div className={styles.timelinecontent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2015</div>
            <div className={styles.timelinecontent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2015</div>
            <div className={styles.timelinecontent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2015</div>
            <div className={styles.timelinecontent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2015</div>
            <div className={styles.timelinecontent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2015</div>
            <div className={styles.timelinecontent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2015</div>
            <div className={styles.timelinecontent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </section>
    </div>
 )
}
export default Resume