let availble_keywords = [
    "Kanpur Shatabdi Express",
    "Vande Bharat Express",
    "Kolkata Rajdhani Express",
    "Patna Rajdhani Express",
    "Sealdah Rajdhani Express",
    "Bhubaneswar Rajdhani Express",
    "Hatia Rajdhani Express",
    "Poorva Express",
    "Gorakhpur–Secunderabad Express",
    "Rapti Sagar Express",
    "Puspak Express",
    "Chitrakoot Intercity Express",
    "Kaifiyaat Express",
    "Uttar Pradesh Sampark Kranti"
]  
let result_box = document.querySelector(".result-box");
let input_box = document.getElementById("input-box")

input_box.onkeyup = function(){
    let result = [];
    let input = input_box.value;
    if(input.length){
        result = availble_keywords.filter((keyword)=>{
             return keyword.toLowerCase().includes(input.toLowerCase());
        })
        console.log(result)
    }
    display(result)
    if (!result.length){
        result_box.innerHTML='';
    }
}

function display(result){
    let content = result.map((list)=>{
        return "<li onclick = selectInput(this)>" + list + "</li>"
    })

    result_box.innerHTML = "<ul>" + content.join(" ") + "</ul>"
;}

function selectInput(list){
    input_box.value = list.innerHTML
    result_box.innerHTML= "";
}