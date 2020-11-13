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


 function makeMixedArray(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if (typeof arr[i] === 'number' && typeof arr[i + 1] ==='string') {
                let tempt = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tempt;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}