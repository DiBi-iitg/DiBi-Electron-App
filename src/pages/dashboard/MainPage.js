import React from 'react'
import SideBar from './components/SideBar'
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={styles.body}>
        <div className={styles.header}>
            <SideBar/>
        </div>
    </div>
  )
}

export default MainPage