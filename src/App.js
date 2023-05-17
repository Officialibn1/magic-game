import { useEffect, useState } from 'react';
import './App.css'

const cardImages = [
  {'src': '/img/helmet-1.png', matched: false},
  {'src': '/img/potion-1.png', matched: false},
  {'src': '/img/ring-1.png', matched: false},
  {'src': '/img/shield-1.png', matched: false},
  {'src': '/img/sword-1.png', matched: false},
  {'src': '/img/scroll-1.png', matched: false}
]

function App() {

  return (
    <div className="App">
      <h1>Magic Match</h1>

      <button>New Game</button>

      <p>
        Turns: {0}
      </p>

    </div>
  );
}

export default App;
