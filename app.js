let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let state = document.querySelector("input").value;
    console.log(state);
    let colArr = await getCollages(state);
    showcollages(colArr);
});

function showcollages(colArr){
    let list = document.querySelector("#list");
    list.innerText = ""; // Clear previous results
    for(clg of colArr){
        console.log(clg.name);
        let li = document.createElement("li");
        li.innerText = clg.name;
        list.appendChild(li);
    }
}
async function getCollages(state){
    try{
        let res= await axios.get(url+state);
        return res.data;
    } catch(e){
        console.log("error-", e);
        return [];
    }
}