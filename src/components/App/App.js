import React from 'react';
import './App.css';
import Intro from '../Intro';

const state = {
  series: []
};

// componentDidMount() {
//   fetch('http://api.tvmaze.com/search/shows?q=NCIS')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Welcome to my favorite TV Series!</h1>
        </p>
      </header>
      <Intro />
    </div>
  );
}

export default App;
