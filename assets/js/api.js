const URL_BASE = "https://swapi.dev/api";

//ecmascript5
// const xhr = new XMLHttpRequest()

// function onRequestHandle() {
//     if(this.readyState === 4 && this.status === 200) {
//         const data = JSON.parse(this.response)
//         console.log("data", data)
//     }
// }

// xhr.addEventListener("load", onRequestHandle)
// xhr.open("GET", `${URL_BASE}`)
// xhr.send()

//ecmascript6
const HTMLResponse = document.querySelector("#app");

fetch(`${URL_BASE}/people`)
.then((response)=> response.json()) 
.then((charactres)=> console.log(charactres.results))
.catch((err)=>{ console.log(err)})

//ecmascript6 +
// const fetchingData = async () => {
//     const res = await fetch(`${URL_BASE}/people`)
//     const data = await res.json()
//     console.log(data)

// }
// fetchingData()
