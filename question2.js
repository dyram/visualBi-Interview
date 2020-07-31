const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array (split by comma) : ", function (arr) {
    rl.question("Enter no. of steps of rotation ", function (rot) {
        main(arr, rot)
        rl.close();
    });
});

function main(arr, rot) {
    let numArr = arr.split(",")
    let steps = parseInt(rot)

    console.log("BEFORE ROTATION : ", numArr)

    //1st method using unshift() and pop()
    for (let i = 0; i < steps; i++) {
        numArr.unshift(numArr.pop())
    }

    //2nd method using splice() instead of pop()
    /*
    for (let i = 0; i < rot; i++) {
        numArr.unshift(numArr.splice(-1,))
    }
    */

    //3rd method : brute force manual unshifting from k+1 element
    /* 
    let newArr = []
    for (let i = steps + 1; i < numArr.length; i++) {
        newArr.push(numArr[i])
    }
    for (let i = 0; i < steps + 1; i++) {
        newArr.push(numArr[i])
    }
    */

    console.log("AFTER ROTATION : ", numArr)
    // console.log("AFTER ROTATION : ", newArr)
}



