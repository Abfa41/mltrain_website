import React from 'react'
import styles from '@/styles/Loader.module.css'

const Loader = () => {
  return (
    <div style={{height: '100vh'}} className={`${styles.cont}`}>
    <div style={{margin: 'auto'}} className={`${styles.loader}`}>Loading..</div>
    
    </div>
  )
}

export default Loader