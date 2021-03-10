
    const cats = ["Milo", "Otis", "Garfield"];
//1
function destructivelyAppendCat(name) {

    cats.push(name);
}
//2
function destructivelyPrependCat(name) {

    cats.unshift(name);
}
//3
function destructivelyRemoveLastCat(){
    cats.pop();
}
//4
function destructivelyRemoveFirstCat(){
    cats.shift();
}
//5
//// -----------------
function appendCat(name) {
   
    let catsCopy = cats.slice();
    catsCopy.push(name);
    return catsCopy;
     
   // 6
}
function prependCat(name) {
    let catsCopy=cats.slice();
    catsCopy.unshift(name);
    return catsCopy;


}
//7
function removeLastCat(name) {
    let catsCopy=cats.slice();
    catsCopy.pop();
    return catsCopy;
    

}
//8
function removeFirstCat(name) {

let catsCopy=cats.slice();
    catsCopy.shift();
    return catsCopy;
}