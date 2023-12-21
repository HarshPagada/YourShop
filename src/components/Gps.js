import React, { useState, useEffect } from 'react'

function Gps() {

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [userAddress, setuserAddress] = useState();

    useEffect(() => {
        const getUserCoords = () => {
            window.navigator.geolocation.watchPosition(userCoords, handleError);
        };

        const userCoords = (position) => {
            const userlatitude = position.coords.latitude;
            const userlongitude = position.coords.longitude;
            console.log("latitude", userlatitude)
            console.log("longitude", userlongitude)

            setInterval(() => {
                setLatitude(userlatitude);
                setLongitude(userlongitude);
            }, 1000);

            // a()

        };

        const handleError = (error) => {
            console.error('Error getting user coordinates:', error.message);
        };

        getUserCoords();
    }, []);

    const userAddressApi = async () => {
        try {
            const url = `https://api.opencagedata.com/geocode/v1/json?key=3e82471df0fb45dd80587bbf42722371&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`;
            const loc = await fetch(url);
            const data = await loc.json();

            if (data.results && data.results.length > 0) {
                setuserAddress(data.results[0].formatted);
            } else {
                console.error('No address found for the given coordinates.');
            }
        } catch (error) {
            console.error('Error fetching user address:', error.message);
        }
    };

    const getuseraddress = () => {
        userAddressApi();
    };

    return (
        <div>
            <h1>Current Location</h1>
            <hr/>
            <h3>latitude:-{latitude}</h3>
            <h3>longitude:-{longitude}</h3>
            <h3>User Address:-{userAddress} </h3>
            <hr/>
            <button className='btn btn-primary' onClick={getuseraddress}>Get Address</button>
            <p className='text-center my-3'>first of all on GPS of your mobile and visit this website and accept request then click on Get address button.  </p>
        </div>
    )
}

export default Gps
