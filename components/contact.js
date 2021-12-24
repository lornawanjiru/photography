import styles from "../styles/Home.module.css"
import Image from "next/image"

function Contact(){
    return(
        <section className={styles.contact}>
          <div className={styles.whitesection}>
            <div className={styles.flexbox}>
            <h1 className={styles.title}>
               Get In Touch
            </h1>
            <hr className={styles.hr}/>
            <p className={styles.description}>
            Can contact me from here  
            </p> 
            <form className={styles.form}>
              <label htmlFor="fname">First Name</label>
              <input type="text" className={styles.formtext} id="fname" name="firstname" placeholder="Your name.."/>
              <label htmlFor="lname">Last Name</label>
              <input type="text" className={styles.formtext} id="lname" name="lastname" placeholder="Your last name.."/>
              <label htmlFor="email">Email</label>
              <input type="text" className={styles.formtext} id="email" name="email" placeholder="Your email.."/>
              <label htmlFor="message">Text your message here</label>
              <textarea className={styles.textarea}>Some text...</textarea>
              <div className={styles.formbutton}>
              <input type="submit" className={styles.submit} value="Submit"/>
              </div>  
            </form>
            <div className={styles.socialicons}>
              <div className={styles.icon}>
                <a href="#"><Image src="/instagram.png" height={30} width={30}/></a> 
              </div>
              <div className={styles.icon}>
                <a href="#"><Image src="/linkedin.png" height={30} width={30}/></a> 
              </div>
              <div className={styles.icon}>
                <a href="#"><Image src="/fb.png" height={30} width={30}/></a> 
              </div>
            </div>
            </div>
          </div>
        </section>
     )
    }
    export default Contact

