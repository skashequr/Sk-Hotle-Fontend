import { Map, Marker,ZoomControl } from "pigeon-maps"
import { useState } from "react"
import { FiMapPin } from "react-icons/fi";
export function MyMap() {
    const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`
  return (
    <Map height={500}
     defaultCenter={[23.9226290, 90.4013202]} defaultZoom={11}>
         <ZoomControl />
         <Marker 
        width={100}
        anchor={[23.9226290, 90.4013202]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
      <Marker 
        width={100}
        anchor={[23.9226290, 90.4013202]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      >
        <FiMapPin></FiMapPin>
      </Marker>
      <Marker width={100} anchor={[23.9226290, 90.4013202]} />
    </Map>
  )
}