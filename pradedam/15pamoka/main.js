"use strict"

// idName elementas kuriame bus ideti elementai su tagName 
function populateCart(idName, tagName, limit) {
    fetch(`https://simutis.dev/api/generate-shopping-cart?${limit ? `limit=${limit}` : ''}`)
      .then((response) => response.json())
      .then((data) => {
        const container = document.getElementById(idName);
        data.forEach((item) => {
  
          //______________________
          const tableRow = document.createElement('tr');
          const tableCellName = document.createElement('td');
          const tableCellPrice = document.createElement('td');
          const tableCellVegan = document.createElement('td');
          tableCellName.innerText = item.name;
          tableCellPrice.innerText = item.price;
          tableCellVegan.innerText = item.vegan
          tableRow.appendChild(tableCellName)
          tableRow.appendChild(tableCellPrice)
          tableRow.appendChild(tableCellVegan)

          container.appendChild(tableRow);
          //______________________
        });
      })
  }
  populateCart('table-body' , 'tr' , 5)
  /**
   * Sukurti lentele  [name price vegan]
   *                  [asdasd, 10.15, taip]
   * Naudojant func populateCart ir joje pakeisti koda tarp komentaru bloku
   */
  
  
  function onLoad() {
    const container = document.getElementById('container');
    const buttonClear = document.getElementById('button-clear');
  
    buttonClear.onclick = function () {
      const childrenList = document.getElementsByClassName('list-item');
      for (let i = 0; i < childrenList.length; i += 1) {
        console.log(childrenList[i]);
        childrenList[i].style.backgroundColor = '';
      }
  
    }
    populateCart('container', 'div', 10);
    // for (let i = 0; i < 10; i += 1) {
    //   const listItem = document.createElement('span');
    //   listItem.innerText = 'Alio';
    //   listItem.className = 'list-item';
  
    //   listItem.onclick = function () {
    //     let prevElm = listItem.previousElementSibling;
    //     let nextElm = listItem.nextElementSibling;
  
    //     listItem.style.backgroundColor = 'green';
  
    //     while (prevElm) {
    //       prevElm.style.backgroundColor = 'red';
    //       prevElm = prevElm.previousElementSibling;
    //     }
  
    //     while (nextElm) {
    //       nextElm.style.backgroundColor = 'blue';
    //       nextElm = nextElm.nextElementSibling;
    //     }
    //   }
    //   container.appendChild(listItem);
    // }
    console.log(container);
  }
  
  window.onload = onLoad;