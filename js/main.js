const doc = document;
const box = doc.querySelector('.box');
const btnAdd = doc.querySelector('.add');
const btnDel = doc.querySelector('.del');
const btnBefore = doc.querySelector('.before');
const btnAfter = doc.querySelector('.after');
const addC = '-c';
let count = 1;

// createElement
// append, prepend, before, after, remove
// replaceWith

btnDel.onclick = function() {
  
  doc.querySelector('.active').remove();

}

btnAdd.onclick = function() {
  const item = doc.createElement('div');
  item.className = 'item';
  item.innerHTML = count;

  item.onclick = function() {
    unActiveAll();
    this.classList.toggle('active');
    showCurrentEl(this);

  }

  count ++;

  box.append(item);
}

btnBefore.onclick = function() {

  const item = doc.createElement('div');
  item.className = 'item';
  const itemActiv = doc.querySelector('.active');
  item.innerHTML = itemActiv.textContent + addC;

  item.onclick = function() {
    unActiveAll();
    this.classList.toggle('active');
    showCurrentEl(this);

  }

  itemActiv.before(item);
}

btnAfter.onclick = function() {

  const item = doc.createElement('div');
  item.className = 'item';
  const itemActiv = doc.querySelector('.active');
  item.innerHTML = itemActiv.textContent + addC;

  item.onclick = function() {
    unActiveAll();
    this.classList.toggle('active');
    showCurrentEl(this);

  }

  itemActiv.after(item);
}

function unActiveAll() {
  const items = doc.querySelectorAll('.item');
  items.forEach(function(item) {
    item.classList.remove('active');
  });
}

function showCurrentEl(currentEl) {
  const showEl = doc.querySelector('.selected span:last-child');
  showEl.innerHTML = currentEl.innerHTML
}

