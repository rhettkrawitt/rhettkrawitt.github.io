//Task 1
console.log("Task 1");
    for (let i = 0; i < 11; i++) {
        let square = i * i;
        console.log(square );
    }

//Task 2
console.log("Task 2");
    for (let i = 5; i > 0; i--) {
        let countdown = i;
        console.log(countdown);
    }
    console.log("Blast Off!")

//Task 3
console.log("Task 3");
    for (let i = 0; i <= 25; i++) {
        let evenNums = i * 2;
        console.log(evenNums)
    }

//Task 4
console.log("Task 4")
    let addedNums = 0
    for (let i = 0; i <= 100; i++) {
        addedNums = addedNums + i;
    }
    console.log(addedNums)

//Task 5
console.log("Task 5")
    for (let i = 1; i <= 10; i++) {
        let jMultiplied = 1
        for (let j = 1; j < i; j++) {
        jMultiplied = jMultiplied * j;
        }
        let factorial = jMultiplied * i;
        console.log(factorial)
    }

//Task 6
console.log("Task 6")
    let arr = [3, 1, 4, 1, 5];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

//Task 7
console.log("Task 7")
    for (let i = 1; i <= arr.length; i++) {
        let backward = arr.at(-i);
        console.log(backward)
    }

//Task 8
console.log("Task 8")
    let arr8 = [];
    for (let i = 1; i <= 10; i++) {
        let cubes = i * i * i;
        arr8.push(cubes);
    }
    console.log(arr8);

//Task 9
console.log("Task 9")
    let arr9 = [];
    arr9.push(1); 
    arr9.push(1);
    for (let i = 1; i <= 8; i++) {
        sum = arr9[i] + arr9[i-1];
        arr9.push(sum)
    }
    console.log(arr9)
    

//Task 10
console.log("Task 10");
    let arr10 = []
    for (let i = 1; i <= arr.length; i++) {
        let arrBack = arr.at(-i);
        arr10.push(arrBack);
    }
    console.log(arr10)

