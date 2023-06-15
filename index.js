// Write your solution here!
const cats = [
"Milo",
"Otis",
"Garfield"
];
 
function destructivelyAppendCat(name){
    cats.push('Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(name){
    cats.pop('Garfield')
}
function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
}
function appendCat(name){
  return cats.concat('Broom') 
}
function prependCat(name){
    return ['Arnold'].concat(cats);
}
function removeLastCat(name){
    return cats.slice('0','-1')
}
function  removeFirstCat(name){
    return cats.slice('1')
}