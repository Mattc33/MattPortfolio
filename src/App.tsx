import * as React from 'react';
import styles from './App.module.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <h1 className={styles.title}>Welcome to React</h1>
      </div>
    );
  }
}

export default App;
