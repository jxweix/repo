import React, { useState , useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../css/home.css'

function Home() {
  const [color, setColor] = useState('black');

  useEffect(() => {
    let timer;
    if (color === 'white') {
      timer = setTimeout(() => {
        setColor('red');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [color]);

  function changColor() {
    setColor('green');
    setTimeout(() => {
      setColor('red');
    }, 3000);
  }

  return (
    <div className='body'>
      <p>Home page</p>

      <div className='row'>
        <div className='col 1'>
          <p>test col </p>
          <button style={{color}} onClick={changColor}>ChangeColor</button>
          <iframe src="https://open.spotify.com/embed/playlist/3Iq4k4rd7Aspf3IkrXwChH?utm_source=generator" 
            width="100%" height="352" frameBorder="0" allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
          </iframe>
        </div>

        <div className='col 2'>
          <p>test</p>
          <button style={{color}} onClick={changColor}>Test 2</button>
          <iframe src="https://open.spotify.com/embed/playlist/3Iq4k4rd7Aspf3IkrXwChH?utm_source=generator" 
            width="100%" height="352" frameBorder="0" allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
          </iframe>
        </div>
      </div>

    </div>
  )
}

export default Home