'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
  console.log(`${items[i]} ${i}`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const items_list = [];
  for (const i in items){
    if (i % 2 === 0) {
      items_list.push(items[i]);
  }}
  console.log(items_list);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  const reversed = items.reverse();
  console.log(reversed.slice(0,n));
}
// prints a list with amt of numbers less than 'n' in the sorted order needed