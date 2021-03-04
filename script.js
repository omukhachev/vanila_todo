const btn = document.getElementsByClassName("add_btn");
let r_color;
btn.onclick = addToDo;

function addToDo() {     
    let c_pul = ["blue", "#ffa400", "green", "red", "#00d669", "#530cff"];           
    r_color = document.querySelector('.radio:checked') !== null ? r_color = document.querySelector('.radio:checked').value : r_color = c_pul[Math.floor(Math.random()*c_pul.length)];
    addItem();
}

function addItem () {
    const div_label = document.querySelector('.label'); 
    const list_item = document.createElement('div');
    const toDo = document.createElement('div');
    const toCheck = document.createElement('div');
    const checker = document.createElement('input');
    checker.type = 'checkbox';
    list_item.className = 'point';    
    toDo.className = 'item_text';
    toCheck.className = 'checker';
    toCheck.color = r_color;
    toCheck.addEventListener('change', changeColor);
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

function changeColor (){
    let color;
    let textDecor;
    (this.style.backgroundColor === "rgb(204, 204, 204)") ? color = this.color : color = '#ccc';
    (this.style.backgroundColor === "rgb(204, 204, 204)") ? textDecor = 'none' : textDecor = 'line-through';   
    this.parentNode.querySelector(".item_text").style.backgroundColor = color;
    this.parentNode.querySelector(".item_text").style.textDecoration = textDecor;
    this.parentNode.querySelector(".checker").style.backgroundColor = color;
    
}