let url = "https://catfact.ninja/fact";

//Making API calls using Async ans await

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e){
        console.log("error - " , e);
    }
};
console.log("Sai Balaji");




//Making API call using Promices and Promices chaining
// fetch(url)
//     .then((res) =>{
//         return res.json()
//     })
//     .then((data1) =>{
//         console.log("Data1 = " + data1.fact)
//         return fetch(url);
//     })
//     .then((res2) =>{
//         return res2.json();
//     })
//     .then((data2) =>{
//         console.log("Data2 = " + data2.fact)
//     })
//     .catch((err) =>{
//         console.log(err);
//     });