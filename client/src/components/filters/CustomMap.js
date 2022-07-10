import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
function CustomMap({ google, locations = [] }) {
    return (
        <Map
            google={google}
            containerStyle={{
                position: "static",
                width: "100%",
                height: "100%"
            }}
            style={{
                width: "100%",
                height: "100%"
            }}
            center={locations[0]}
            initialCenter={locations[0]}
            zoom={locations.length === 1 ? 18 : 13}
            disableDefaultUI={true}
        >
            {locations.map(
                coords => <Marker position={coords} />
            )}

        </Map>
    )
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyDIpAD06M58EEVl2SlgkcPAz8OUOVutLfc"
})(CustomMap);