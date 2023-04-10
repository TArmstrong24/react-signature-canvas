import React, { Component, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import SignaturePad from '../../src/index.tsx'

import * as styles from './styles.module.css'

const App = () => {
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);

  let sigPad = {}
  let signed = false;


  
  const clear = () => {
  //  sigPad.clear()
  }

  const trim = () => {
    setTrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL('image/png'));
  }
  const startDraw = ()=>{
   // console.log('start');
   // sigPad.clear();
  }
  return (
    <div className={styles.container}>
      <div className={styles.sigContainer} style={{width: '400px', height:'200px'}}>
        <SignaturePad onBegin={startDraw} canvasProps={{ className: styles.sigPad, width:'400px', height: '200px' }}
          ref={(ref) => { sigPad = ref }} />
      </div>
      <div>
        <button className={styles.buttons} onClick={clear}>
          Clear
        </button>
        <button className={styles.buttons} onClick={trim}>
          Trim
        </button>
      </div>
      {trimmedDataURL
        ? <img className={styles.sigImage} alt='signature'
          src={trimmedDataURL} />
        : null}
    </div>
  )
}

createRoot(document.getElementById('container')).render(<App />)
