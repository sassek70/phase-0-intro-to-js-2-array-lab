// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(cat) {
    cats.push(cat);
};

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
};

function destructivelyRemoveLastCat(cat) {
    cats.pop(cat);
};

function destructivelyRemoveFirstCat(cat) {
    cats.shift(cat);
};

function appendCat(cat) {
    const newCat = [...cats, cat]
    return newCat;
   };


function prependCat(cat) {
    return [cat, ...cats]
};

function removeLastCat(cat) {
    cat = [...cats]
    cat.pop()
    return cat;
   };

function removeFirstCat(cat) {
    cat = [...cats]
    cat.shift()
    return cat;
};

