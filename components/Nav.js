import styles from "../styles/Home.module.css"
import Image from "next/image"

function nav(){
    return(
        <div className={styles.hambuger}>
           <Image src="/hambuger.svg" height={30} width={30}/>
        </div>
     )
    }
    export default nav