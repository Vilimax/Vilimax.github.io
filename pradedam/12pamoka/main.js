"use strict";

window.onload = function () {
  for (let i = 0; i < catList.length; i++) {
    const cat = catList[i];
    const container = document.getElementById('cat-container');
    if (cat.title.length >= 8){

    }
    const aTag = document.createElement('a');
    
    if (cat.href.includes ('Shorthair')) {
        aTag.style.backgroundColor = 'red';
        
    }
   
   
    aTag.href = cat.href;
    aTag.innerHTML = cat.title;
    container.appendChild(aTag);

      
  }
}

