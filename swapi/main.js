const alderon = document.querySelector("button")

function buttonWorked() {
    console.log("button clicked")


axios.get("swapi.dev/api/planets/2")
.then(res => {
    for(let i = 0; i < res.data.residents.length; i++){
        console.log(res.data.residents)
        let arr = res.data.residents
        console.log(arr[i])
    } 
    console.log(arr)
})
}

document.addEventListener('click', buttonWorked) 
