import * as React from 'react'
import styles from './Intro.module.scss'

class Intro extends React.Component {

    public render() {
        return (
            <div className={styles.introContainer}>
                <div className={styles.stars} />
                <div className={styles.centralContainer}>
                    <h1>Hello, I'm <span className={styles.name}>Matthew Chan</span>.</h1>
                    <h1>Developer</h1>
                    <h1>Designer</h1>
                    <h1>Drinker of ☕</h1>
                    {/* <ViewPortfolioBtn /> */}
                </div>
            </div>
        )
    }
}

export default Intro