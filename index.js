const itemEl = document.querySelector('.input-item');
const dateEl = document.querySelector('.input-date');
let itemList = document.querySelector('.grid-items');

let listItems = [];


function renderItems() {
  let textHtml = '';

  listItems.forEach((items, index) => {
    let { item, date } = items;
    let text = `
    <p>${item}</p>
    <p>${date}</p>
    <button class="item-btn" onclick="
      listItems.splice(${index}, 1);
      renderItems();
    ">
      Delete
    </button>`;
    textHtml += text;
  })
  itemList.innerHTML = textHtml;
}

function pushItems() {
  let item = itemEl.value;
  let date = dateEl.value;
  listItems.push({item, date});
  clearInput();
  renderItems();
}

function clearInput() {
  itemEl.value = '';
  dateEl.value = '';
}