const api_url = "https://jsonplaceholder.typicode.com/todos";
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    let completed = []
    let pending = []
            
    for (let i = 0; i < data.length; i++) {
        if (data[i]['completed'] === true) {
            completed.push(data[i]);
        } else {
            pending.push(data[i]);
        }
    }
            
    let container1 = document.getElementById("container1")
    let container2=document.getElementById("container2")

            

    for (let i = 0; i < completed.length; i++) {


        let newElemnt = document.createElement('div')
        newElemnt.innerHTML = `<div class="row" id="row">
    <div class="column a"><h2>${completed[i].id}</h2></div>
    <div class="column b"><h2>${completed[i].userId}</h2></div>
    <div class="column c"><h2>${completed[i].title}</h2></div>
    <div class="column d"><h2>${completed[i].completed}</h2></div>
    </div>`
        container1.appendChild(newElemnt)
    }
    for (let i = 0; i < completed.length; i++) {

        let newElemnt1 = document.createElement('div')
        newElemnt1.innerHTML = `<div class="row" id="row">
            <div class="column a"><h2>${pending[i].id}</h2></div>
            <div class="column b"><h2>${pending[i].userId}</h2></div>
            <div class="column c"><h2>${pending[i].title}</h2></div>
            <div class="column d"><h2>${pending[i].completed}</h2></div>
            </div>`
        container2.appendChild(newElemnt1)
    }
}
getapi(api_url)
let btn1 = document.getElementById("btn1")
let f = 1;
btn1.addEventListener('click', function () {
    if (f == 1) {
        document.getElementById("container1").style.display = "block";
        document.getElementById("h1").textContent = "All Complted Items"
        f = 0
    } else {
        document.getElementById("container2").style.display = "none"
        document.getElementById("container1").style.display = "block"
        document.getElementById("h1").textContent = "All Complted Items"
    }

})
let btn2 = document.getElementById("btn2")
btn2.addEventListener('click', function () {
    if (f == 1) {
        document.getElementById("container2").style.display = "block";
        document.getElementById("h1").textContent = "All Pending Items"
                f = 0
    } else {
        document.getElementById("container1").style.display = "none"
        document.getElementById("container2").style.display = "block"
        document.getElementById("h1").textContent = "All Pending Items"
    }
})