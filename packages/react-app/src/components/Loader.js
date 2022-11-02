import React from 'react'
import styles from '../styles';
import { ethereumLogo } from '../assets';


const Loader = ({title}) => {
  return (
    <div className={styles.loader}>
    <img 
    src={ethereumLogo}
    alt="ethereum logo"
    className={styles.loaderImg}
    />
    </div>
  )
}

export default Loader