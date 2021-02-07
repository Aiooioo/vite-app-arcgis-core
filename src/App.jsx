import React, { useState, useRef, useEffect } from 'react'
import EsriMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import logo from './logo.svg'
import './App.css'

function App() {
  const domRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (domRef.current) {
      const map = new EsriMap({
        basemap: 'osm'
      });

      const view = new MapView({
        map,
        container: domRef.current,
      })
    }
  }, []);

  return (
    <div className="App" ref={domRef}>
     
    </div>
  )
}

export default App
