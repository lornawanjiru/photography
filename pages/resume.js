import styles from '../styles/Home.module.css';
import Head from 'next/head';

export const config = {
  unstable_runtimeJS:false
}

function Resume(){
         
 return(
    <div className={styles.container}>
      <Head>
        <title>Chris Brian</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <header>
          <h1 className={styles.title}>
            My Resume
          </h1>
          <hr className={styles.hr}/>
          <p className={styles.description}>
          Here to get to know more about me?
            <br/>
            Be my guest.
          </p>
        </header>
      <section className={styles.timelinesection}>
        <div className={styles.timelineitems}>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>Sept 2019 - Jan 2020</div>
            <div className={styles.timelinecontent}>
              <h3>Photographer and videographer intern at Alternative Agency, Nairobi</h3>
              <p>
              • Conducted live shoots in a variety of interior and exterior
                environments.<br/>
              • Applied innovative techniques to resolve filming issues as needed.<br/>
              • Performed editing and other changes in collaboration with technical
                and editing teams.<br/>
              • Set up equipment in field locations.<br/>
              • Operates still cameras as required .<br/>
              • Oversaw final cut editing.<br/>
                </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>June 2017 - Till Date</div>
            <div className={styles.timelinecontent}>
              <h3>Photogragher (FreeLancing)</h3>
              <p>
                • Managed editing high-quality product.<br/>
                • Carried out live shoots.<br/>
                • Innovated film techniques to solve problems.<br/>
                • Suggested new approaches and revisions with the help of my
                team.
              </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}> June 2017 - Till Date</div>
            <div className={styles.timelinecontent}>
              <h3>Videography (Freelancing)</h3>
              <p> 
                  • Worked with Rook designs as a cameraman and gaffer boy<br/>
                  • Carried out live shoots.<br/>
              </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2021 Jan</div>
            <div className={styles.timelinecontent}>
              <h3>Advertisement Videos</h3>
              <p>Worked with Rook designs as a cameraman and gaffer boy </p>
            </div>
          </div>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>Nov 2021</div>
            <div className={styles.timelinecontent}>
              <h3>Drone Shoots</h3>
              <p> • Set up equipment in field locations.<br/>
              • Operates still cameras as required .<br/>
              • Oversaw final cut editing.<br/>
               </p>
            </div>
          </div>
         
          {/* <div className={styles.timelineitem}>
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
          </div> */}
        </div>
      </section>
    </div>
 )
}
export default Resume