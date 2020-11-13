'use strict';

const numericArray = [20,31,4,13,10,3,40,23];

//1. Maximum 

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}

console.log(biggest);

//2. Minimum    
let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest){
        smallest = numericArray[i];
    }
}

console.log(smallest);

//3. Átlag számítása
function getAvarage(arr) {
    let osszeg = 0;
    let atl = 0;
    for ( let i = 0; i < arr.length; i++) {
        osszeg += arr[i];
    }
    atl = parseInt(osszeg / arr.length);
    console.log('3. ' + atl);
}

getAvarage(numericArray);




//4. Sum
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}

console.log(sum);

//5. Páros számok
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if ( numericArray[i] % 2 ==0 ) {
        db++;
    }
}

console.log(db);

//6. 2. legkisebb elem kiírása egy adott tömbből. 
function SearchTheSecondElement(arr, nth) {
    let swapped;
    let secondElement;
    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if ( arr[i] > arr[i + 1]) {
                let tempt = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tempt;
                swapped = true;
            }
        }
    } while (swapped)
    return arr[nth-1];
}
console.log(SearchTheSecondElement(numericArray, 3));

//8. Bynaris keresés
function bynarySearch(arr, search){
    let start = 0;
    let end = arr.length-1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if (arr[mid] === search){
            return true
        }
        else if (arr[mid] < search) 
        start = mid + 1; 
        else
        end = mid - 1;
    }
    return false;
}

console.log(bynarySearch(numericArray, 23));

//9. 23-as szám van-e 
let number23 = 'nem';
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] == 23){
        number23 = 'igen'
    }
}
console.log(number23);

//10. Hányszor tartalmazza a 23.-ast
number23 = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] == 23){
        number23 ++;
    }
}
console.log(number23);

//11. Bubbble sort növekvő sorrend. 

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if ( arr[i] > arr[i + 1]) {
                let tempt = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tempt;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

const arr = [2.3, 2.5, 1.2, 0.3, 4.5];

bubbleSort(arr);
console.log(arr);

//12 Bubble sort csökkenő. 

function bubbleSortRegressive(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length-1; i++) {
            if (array[i] < array[i+1]) {
                let tempt = array[i];
                array[i] = array[i+1];
                array[i+1] = tempt;
                swapped = true;
            }
        }
    } while (swapped)
    return array;
}

const array = [ 10, 20, 50, 21, 11];
bubbleSortRegressive(array);

//13. USertől bekért szám beszúrása bubbleSort által rendezett tömbbe. 
const userArray = [12,321,42,13,11];


function usePromptElementForUser(arr) {
    const inputNumber = parseInt(prompt('Adjon meg egy számot!'), 10);
    arr.push(inputNumber);
    const sortedArray = bubbleSort(arr);
    return sortedArray;
}
console.log(usePromptElementForUser(userArray));

/*14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben.
 Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!*/
 const mixedArray = [3, 5, 7, 10, 'tíz', 8, 'ötven', 'hatvan', 'kettő','száz'];

 function filterNumbers(arr) {
     let numbers= [];
    for (let i = 0; i < arr.length; i += 1) 
    if (typeof arr[i] === 'nummber') {
        numbers.push(arr[i]);
    }
    return numbers;
 }

 function filterStrings (arr) {
     let strings = [];
    for (let i = 0; i < arr.length; i += 1) 
    if (typeof arr[i] === 'string') {
        strings.push(arr[i]);
    }
    return strings;
 }

function mixArray(arr) {
   for (let i = 0; i< arr.lenght; i++){
       sortedArray.push()
   }
        
}


//15. Egy egészszámoakt tartalmazó tömb elemeit rendezzük két külön tömbbe páros és páratlan számok szerint.
const mainArray = [10, 11, 45, 20, 56, 77];

function makeOddArrayFunction(arr){
    let numericOddArray = [];
    
    for ( let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0 ){
            numericOddArray.push(arr[i]);
        } 
    }
    return numericOddArray;
}

function makeEvenArrayFunction(arr) {
    let numericEvenArray = [];
    for ( let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 ){
            numericEvenArray.push(arr[i]);
        }
    }
    return numericEvenArray;
}

console.log(makeOddArrayFunction(mainArray));
console.log(makeEvenArrayFunction(mainArray));

//16. Unio, descartes szorzat, különbség, metszet



 