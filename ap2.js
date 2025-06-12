
let btn=document.querySelector("#btn")
let display=document.querySelector(".display")
let inp=document.querySelector("form input")

let inpmain=inp.value


// const weather=async (res)=>{
//     let URL=`https://wttr.in/${input.value.trim()}?format=j1`
//     console.log("feching data...")
//     console.log(input.value)
//     let response=await fetch(URL)
//     let data=await response.json()
//     // console.log(data.current_condition[0].humidity)
//     // console.log(data.current_condition[0].temp_C)
//     // console.log(data)
//     return data;
// }


async function actualWeather(lati,longi){
    let baseURL=`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longi}&current_weather=true`

    let response=await fetch(baseURL)
    let data=await response.json()
    console.log(data)
    let temp=data.current_weather.temperature
    display.innerText=`Temperature = ${temp}`
}

const weather=async (res)=>{
    console.log("fetching..")
    console.log(inp.value)

    let URL=`https://geocoding-api.open-meteo.com/v1/search?name=${inp.value}`
    
    let response=await fetch(URL)
    let data=await response.json()
    console.log(data)
    let lati=data.results[0].latitude
    let longi=data.results[0].longitude
    //console.log(lati,longi)
    actualWeather(lati,longi)


}
btn.addEventListener("click",async (evt)=>{
    //console.log(inp)
    

    evt.preventDefault();
    weather();

    
})

