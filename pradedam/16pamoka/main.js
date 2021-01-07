"use strict"




window.addEventListener('load', function() {
    const list = [];
for (let i = 0; i < 3; i += 1) {
    const card = document.createElement('div');
    list.push(card);
    card.className = 'card';
    card.addEventListener('click', function () {
        for (let k = 0; k < list.length; k += 1){
            list[k].style.backgroundColor = 'blue';
        }
        card.style.backgroundColor = 'green';
    });
    document.body.appendChild(card);
    }
});