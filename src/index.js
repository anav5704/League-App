if ("serviceWorker" in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register("./src/serviceWorker.js").then(registration => {
            console.log("Service Worker Registered ✅", registration )}
        ).catch(err => {
            console.log("Service Worker Registration Failed ❌", err )
        })
    })
}