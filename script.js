const btn = document.getElementsByClassName("add_btn")
let i = 1;
function Add_ToDo() {
    let r_color;
    let c_pul = ["blue", "#ffa400", "green", "red", "#00d669", "#530cff"];    
    r_color = c_pul[Math.floor(Math.random()*c_pul.length)];

    if (document.getElementById('r1').checked) {
        r_color = "blue"
    };
    if (document.getElementById('r2').checked) {
        r_color = "#ffa400"
    };
    if (document.getElementById('r3').checked) {
        r_color = "green"
    };
    if (document.getElementById('r4').checked) {
        r_color = "red"
    };
    if (document.getElementById('r5').checked) {
        r_color = "#00d669"
    };
    if (document.getElementById('r6').checked) {
        r_color = "#530cff"
    };

    let div_label = document.querySelector('.label');
    let list_item = document.createElement('div');
    let toDo = document.createElement('div');
    let toCheck = document.createElement('div');
    let checker = document.createElement('input');

    checker.type = 'checkbox';
    list_item.className = 'point';    
    toDo.className = 'item_text';
    toCheck.className = 'checker';
    toCheck.color = r_color;
    toCheck.addEventListener('change', change_color);
    toDo.style.backgroundColor = r_color;
    toCheck.style.backgroundColor = r_color;
    checker.style.cursor = "pointer";
    toDo.textContent = document.getElementById('input_text').value;

    if (toDo.textContent.replace(/\s+/g, '').length === 0) {
        toDo.textContent = "Empty ToDo String";
    }

    document.getElementById('input_text').value = '';
    div_label.appendChild(list_item);
    list_item.appendChild(toCheck);
    toCheck.appendChild(checker);
    list_item.appendChild(toDo);
    document.getElementById('input_div').style.marginTop = "15px"; 

}

btn.onclick = Add_ToDo;

function change_color (){

    if (this.style.backgroundColor === "rgb(204, 204, 204)") {
        this.parentNode.querySelector(".item_text").style.backgroundColor = this.color;
        this.parentNode.querySelector(".item_text").style.textDecoration = "none";
        this.parentNode.querySelector(".checker").style.backgroundColor = this.color;
    } else {
        this.parentNode.querySelector(".item_text").style.backgroundColor = "#CCC";
        this.parentNode.querySelector(".item_text").style.textDecoration = "line-through";
        this.parentNode.querySelector(".checker").style.backgroundColor = "#CCC";
    }

}