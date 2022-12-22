 // have the users location
 if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
    }, (error) => {
        console.log(error);
    })
//take the users location every 1 minute 
    const watcher = navigator.geolocation.watchPosition((position) => {
        console.log(position);
    }, (error) => {
        console.log("dont possible user location  update");
    }, {enableHighAccuracy: true, maximumAge: 100000, timeout: 100000})
}
else {
    console.log("location dont found");
}