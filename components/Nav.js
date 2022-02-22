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
             <a className={styles.navlogo}>Chris Brian.</a>
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
            <div className={styles.dropdown}>
                <div className={styles.dropbtn}>
                    <Link href='#'>
                      <a className={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            >Gallery</a> 
                    </Link>
                </div>
                <div id="myDropdown" className={styles.dropdowncontent}>
                    <Link href='/gallery'>
                        <a className={isOpen === false ? 
                            styles.gallink : styles.gallink+' '+styles.active}
                            onClick={openMenu}> All </a>
                    </Link>
                    <div>
                    <Link href='/gallery/wallpaper'>
                        <a className={isOpen === false ? 
                            styles.gallink : styles.gallink+' '+styles.active}
                            onClick={openMenu}>Wallpapers </a>
                    </Link>
                    </div>
                    <div>
                    <Link href='/gallery/drone'>
                        <a className={isOpen === false ? 
                            styles.gallink : styles.gallink+' '+styles.active}
                            onClick={openMenu}>Drone-shoots </a>
                    </Link>
                    </div>
                    <div>
                    <Link href='/gallery/events'>
                        <a className={isOpen === false ? 
                            styles.gallink : styles.gallink+' '+styles.active}
                            onClick={openMenu}>Events</a>
                    </Link>
                    </div>
                    <div>
                    <Link href='/gallery/advert'> 
                        <a className={isOpen === false ? 
                            styles.gallink : styles.gallink+' '+styles.active}
                            onClick={openMenu}>Advertisement </a>
                    </Link>
                    </div>
                    <div>
                    <Link href='/gallery/portraits'>
                        <a className={isOpen === false ? 
                            styles.gallink : styles.gallink+' '+styles.active}
                            onClick={openMenu}>
                                <div className={styles.smalls}>
                                Portraits
                                </div>
                        </a>
                    </Link>
                    </div>
                </div>
            </div>    
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