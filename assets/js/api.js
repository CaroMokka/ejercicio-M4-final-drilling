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
// const HTMLResponse = document.querySelector("#app");

// fetch(`${URL_BASE}/people`)
// .then((response)=> response.json()) 
// .then((charactres)=> console.log(charactres.results))
// .catch((err)=>{ console.log(err)})

//ecmascript6 +
// const fetchingData = async () => {
//     const res = await fetch(`${URL_BASE}/people`)
//     const data = await res.json()
//     console.log(data.results)

// }
//fetchingData()


export async function fetchingData(){
    const res = await fetch(`${URL_BASE}/people`)
    const data = await res.json()
    console.log("next", data.next)
    return data.results
}

export async function fetchingData2() { 
    const res = await fetch(`${URL_BASE}/people/?page=2`)
    const data = await res.json()
    console.log("Data 2", data)
    return data.results
 }

 

// export default async function fetchingDataNext(){
//     const res = await fetch(`${URL_BASE}/people`)
//     const data = await res.json()
//     return data.results
// }