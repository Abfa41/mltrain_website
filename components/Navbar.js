import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { FaBars, FaCross } from 'react-icons/fa'
import gsap from 'gsap'
import { IoCloseCircleSharp } from "react-icons/io5";
import SideBar2 from './SideBar2'



function Navbar() {
  const {theme,toggleTheme} = useTheme()
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0, // Animate in from off-screen
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.to(menuRef.current, {
        x: '-100%', // Animate out to the left
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);


  return (
    <>
    <ul className={styles.navbar}>
      <Link href={'/'}><img src={'/favicon.ico'} className={styles.nav_img} style={{paddingLeft: 10}}/></Link>

      <Link href={'/'}><li className={`${styles.nav_li} ${styles.underline_animation}`}>Home</li></Link>
      <Link href={'/docs/introduction'}><li className={`${styles.nav_li} ${styles.underline_animation}`}>Docs</li></Link>
      <Link href={'/about'}><li className={`${styles.nav_li} ${styles.underline_animation}`}>About</li></Link>

      

    </ul>

    <ul className={styles.navbar2}>

      <li className={`${styles.nav_li2}`} onClick={toggleMenu} style={{margin: 'auto',}}><FaBars/></li>

      <Link href={'/'}><img src={'/favicon.ico'} className={styles.nav_img2} style={{paddingLeft: 10}}/></Link>


    </ul>
    <div
      ref={menuRef}
      className={`${styles.sideMenu}`}
      style={{backgroundImage: ' linear-gradient(to left bottom, #f4f4d4, #f2f4c0, #eff4ab, #ecf496, #e7f481);',transform: 'translateX(-100%)', }}
    >


      <div ><IoCloseCircleSharp onClick={toggleMenu} size={40} style={{position: 'absolute',right: '10px',top: '10px'}}/></div>
      <div style={{fontSize: '4vh',fontWeight: 'bolder'}}>
      <Link onClick={()=>{setIsOpen(false)}} href={'/'}><li style={{color: 'black'}} className={`${styles.nav_li} ${styles.underline_animation}`}>Home</li></Link>
      <Link onClick={()=>{setIsOpen(false)}} href={'/docs/introduction'}><li style={{color: 'black'}} className={`${styles.nav_li} ${styles.underline_animation}`}>Docs</li></Link>
      <Link onClick={()=>{setIsOpen(false)}} href={'/about'}><li style={{color: 'black'}} className={`${styles.nav_li} ${styles.underline_animation}`}>About</li></Link>
      </div><hr/><hr/><hr/><hr/><hr/><hr/>
      <SideBar2 setIsOpen={setIsOpen}/>

      
      
        
      
    </div>



    
    </>
  )
}

export default Navbar