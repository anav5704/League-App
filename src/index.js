if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js").then(registration => {
        console.log("Service Worker Registered ✅", registration )}
    ).catch(err => {
        console.log("Service Worker Registratio Failed ❌", err )
    })
} 
