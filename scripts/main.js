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