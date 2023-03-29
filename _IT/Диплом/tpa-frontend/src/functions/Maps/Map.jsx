import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import React from 'react';

/*
<div style={{ width: '100%', height: 400 }}>
            <Map />
        </div>
        */
const Map = () => {
    const mapKey=process.env.REACT_APP_MAP_KEY;
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [37.6155, 55.7522],
                zoom: 13,
                key: mapKey,
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    const MapWrapper = React.memo(
      () => {
          return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
      },
      () => true,
  );

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );

   
}; 
export default Map;