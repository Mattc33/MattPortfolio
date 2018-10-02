import * as React from 'react'
import styles from './ViewPortfolioBtn.module.scss'

const ViewPortfolioBtn = (props: any) =>
    <button
        className={styles.viewPortfolioBtn}
        onClick={props.scrollToPortfolio}
    >
        hi
    </button>

export default ViewPortfolioBtn