let color = document.getElementById('color');
let createBtn = document.getElementById('createBtn');
let list = document.getElementById('list');
let msg_type = document.getElementById('msg_type');

createBtn.onclick = () => {
    let newNote = document.createElement('div');
    let get_msg = msg_type.value;
    newNote.classList.add('note');
    newNote.innerHTML = `
    <span class="close">x</span>
     <span>${get_msg}</span>
    <textarea
    placeholder="Write Content..."
    rows="10" cols="30"></textarea>`;
    newNote.style.borderColor = color.value;
    list.appendChild(newNote)
}
document.addEventListener('click', (event) => {
    if(event.target.classList.contains('close')){
        event.target.parentNode.remove();
    }
})

let cursor = {
    x: null,
    y: null
}
let note = {
    dom: null,
    x: null,
    y: null
}
document.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('note')){
        cursor = {
            x: event.clientX,
            y: event.clientY
        }
        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
        }
    }
})

document.addEventListener('mousemove', (event) => {
    if(note.dom == null) return;
    let currentCursor = {
        x: event.clientX,
        y: event.clientY
    }
    let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }
    note.dom.style.left = (note.x + distance.x) + 'px';
    note.dom.style.top = (note.y + distance.y) + 'px';
    note.dom.style.cursor = 'grab';
})
document.addEventListener('mouseup', () => {
    if( note.dom == null) return;
    note.dom.style.cursor = 'auto';
    note.dom = null;  
})




