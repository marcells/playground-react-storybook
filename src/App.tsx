import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faMicrosoft, faApple, faGoogle, faApplePay } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import { MyAwesomeComponent } from './MyAwesomeComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><FontAwesomeIcon icon={faAddressCard} /></li>
          <li><FontAwesomeIcon icon={faGoogle} /></li>
          <li><FontAwesomeIcon icon={faMicrosoft} /></li>
          <li><FontAwesomeIcon icon={faApplePay} /></ li>
          <li><FontAwesomeIcon icon={faApple} /></li>
        </ul>
        
        <MyAwesomeComponent onClick={d => alert('test: ' + d.toTimeString())} title="Yeah!" />
      </header>
    </div>
  );
}

export default App;
