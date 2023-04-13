import { useRef, useState } from 'react'
import MapView from './components/Map'


function App() {

  const inputRef = useRef()
  const inputStyle= {
    boxShadow: 'inset 0 0 10px #eee !important',
    border: '2px solid #eee',
    width: '456px',
    height: '40px',
    marginLeft: '16px',
    borderRadius: '20px',
    fontWeight: '300 !important',
    outline: 'none',
    padding: '10px 20px',
    marginBottom: '10px',
  }


  const autoComplete = new window.google.maps.places.Autocomplete(
    inputRef.current,
  )


  autoComplete.addListener('place_changed', () => {
    const place = autoComplete.getPlace()
    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
        alert("this location not available")
    }
    if (place.geometry.viewport || place.geometry.location) {
        // do something
        console.log(place.geometry.location)
    }
  })
  return (
    <div className="App">
        <label >Location</label>
        <input
          placeholder='type your location'
          ref={inputRef}
          style={inputStyle}
        />
      <MapView/>
    </div>
  )
}

export default App
