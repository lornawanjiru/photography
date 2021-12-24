import styles from "../styles/Home.module.css"
import { useState } from "react";
import Link from 'next/link'

function Nav(){
    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return(
        
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <Link href='/'>
             <a className={styles.navlogo}>My World</a>
            </Link>
        <ul className={isOpen === false ? 
                styles.navmenu : styles.navmenu +' '+ styles.active}>
            <li className={styles.navitem}>
               <Link href='/'>
                 <a className={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Home</a>
                </Link>
            </li>
            <li className={styles.navitem}>
                <Link href='/resume'>
                  <a className={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Resume</a>
                </Link>
            </li>
            <li className={styles.navitem}>
                <Link href='/gallery'>
                 <a className={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Gallery</a>
                </Link>
            </li>
        </ul>
        <button className={isOpen === false ? 
                            styles.hamburger : styles.hamburger+' '+styles.active}
                            onClick={openMenu}
                            >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
        </nav>
    </header>
     )
    }
    export default Nav