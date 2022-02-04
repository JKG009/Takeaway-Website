import React from "react";
import {
    Map,
    GoogleApiWrapper
} from "google-maps-react"
import { useDeviceWidthContext } from "../../contexts/DeviceWidthContext";


function MapContainer({google}) {

    const {isLargeDevice} = useDeviceWidthContext()

    return (
                <Map 
                    google = {google}
                    style = {{width: "100%", height: "100%", maxWidth:"800px", borderLeft: "1px solid #E99C20", borderRight: "solid 1px #E99C20", boxSizing: "border-box"}}
                    containerStyle = {{
                        height: "70vh",
                        width: `${isLargeDevice ? "70vw" : "100%"}`
                    }}
                        
                    zoom = {18}
                    initialCenter= {
                        {
                            lat: 51.395435,
                            lng: 0.496003
                        }
                    }
                    gestureHandling = "cooperative"
                    fullscreenControl = {false}
                />
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBqJFJQ_NB8_MdsTT6wjOBUQOeSSW-KAxs"
})(MapContainer)