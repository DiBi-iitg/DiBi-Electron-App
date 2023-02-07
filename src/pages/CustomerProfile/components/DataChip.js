import React from 'react'
import Card from '../../../components/Card'
import styles from './DataChip.module.css'
import IncreaseCard from '../../../components/increase'



const DataChip = (props) => {
  return (

      <div className={styles.chip}>
        <div className={styles.data}>
          <div className={styles['front-row']}>
          <span className={styles["main-data"]}>{props.title}</span>

          <IncreaseCard />
          </div>
          <span className={styles["sub-data"]}>{props.stat}</span>
        </div>
      </div>

  );
}

export default DataChip