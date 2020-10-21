import React from 'react';
import './App.css';
import Fun from './Fun';

function App() {


  return (
    <div className="App">
      {/* firebase setup */}  
      <body>
        <Fun />
        <script src="/__/firebase/7.24.0/firebase-app.js"></script>
        <script src="/__/firebase/7.24.0/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
      </body>
    </div>
  );
}

export default App;
