import './App.css'
import { useEffect, useRef } from 'react'
import { Map as OlMap, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { defaults } from 'ol/control/defaults';

function App() {
  const mapRef = useRef(null)
  useEffect(() => {
    const tilelayer = new TileLayer({
        source: new OSM({ attributions: '' })
    });
    const view = new View({
        center: fromLonLat([126.9783785, 37.5666612]), // 서울시청 경도와 위도
        zoom: 14
    })
  
    const map = new OlMap({
        controls: defaults({ zoom: false, rotate: false, attribution: false }),
        layers: [
            tilelayer
        ],
        view: view,
    })
    map.setTarget(mapRef.current || '')
    return () => {
        map.setTarget('');
    };
}, []);
  return <div id='map' ref={mapRef} />
}

export default App
