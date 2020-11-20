import React from 'react';
import './App.css';
import Home from './client/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* firebase setup */}  
      <script src="/__/firebase/7.24.0/firebase-app.js"></script>
      <script src="/__/firebase/7.24.0/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
      {/* bootstrap cdn */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
    </div>
  );
}

export default App;
