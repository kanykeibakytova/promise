// setTimeout(()=>{
//     console.log("hello")
// }, 3000)
//
// setInterval(()=>{
//     console.log("start..")
// }, 2000)


//PROMISE

//PENDING
//RESOLVE
//REJECT

// const promise=new Promise((resolve,reject)=>{
//     console.log('start..')
//     setTimeout(()=>{
//         // console.log('fulfilled')
//         // resolve({status:200})
//         reject('Error')
//     },3000)
// })
// promise.then((data)=>{
//     console.log(data)
// })

// const div =document.querySelector(".row")
//

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(data =>data.json())
//     .then(res =>{
//         console.log(res)
//         res.map(el=> (
//             div.innerHTML+=`<div>
// <h1>${el.name}</h1>
// <p>${el.email}</p>
// <h4>${el.address.city}</h4>
// </div>`
//         ))
//     })



// const div =document.querySelector(".row")

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data =>data.json())
//     .then(res =>{
//         console.log(res)
//             res.map(el=>(
//                 div.innerHTML+=`<div>
// <h3>${el.id}</h3>
// <h1>${el.title}</h1>
// <p>${el.body}</p>
// </div>`
//             ))
//     })



// const div =document.querySelector(".row")

// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(data =>data.json())
//     .then(res =>{
//         console.log(res.slice(0,10))
//         res.slice(0,10).map(el=>(
//             div.innerHTML+=`<div>
// <h1>${el.id}</h1>
// <h3>${el.title}</h3>
// <img width="150px" src="${el.url}" alt="">
// </div>`
//         ))
//     })




const container=document.querySelector(".row")
const input=document.querySelector(".form-control")
const btn =document.querySelector(".btn")

fetch('https://restcountries.com/v3.1/all')
    .then(data =>data.json())
    .then(res =>{
        console.log(res)
        res.sort((a,b)=>b.population-a.population).map((el,idx)=>(
            div.innerHTML+=`<div>
<h1>${idx+1}</h1>
<h1>capital:${el.capital}</h1>
<img src="${el.flags.png}" alt="">
<h1>area:${el.area}км²</h1>
<h3>population:${el.population}</h3>
</div>`
        ))
    })

input.addEventListener("keydown", (e)=>{
    if(e.key ==="Enter"){
        searchCountries()
    }
})


btn.addEventListener("click", ()=>{
    searchCountries()
})



function searchCountries(){
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
        .then(data =>data.json())
        .then(res =>{
            console.log(res)
            res.map(el=>(
                container.innerHTML=`<div>
<h1>capital:${el.capital}</h1>
<img src="${el.flags.png}" alt="">
<h1>area:${el.area}км²</h1>
<h3>population:${el.population}</h3>
</div>`
            ))
        })
}