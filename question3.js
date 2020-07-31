const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Proceed? : ", function (ages) {
    main(ages)
    rl.close();
});

function main(ages) {
    let arr = [[1, 1, 1, 1], [0, 0, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1]]
    let count = 0

    console.log("THE ARRAY IS ,")

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 1) {
                count += dfs(arr, i, j)
            }
        }
    }

    function dfs(arr, i, j) {
        if (i < 0 || i >= arr.length || j < 0 || j >= arr[i].length || arr[i][j] === 0)
            return 0

        arr[i][j] = 0
        dfs(arr, i + 1, j)
        dfs(arr, i - 1, j)
        dfs(arr, i, j + 1)
        dfs(arr, i, j - 1)
        return 1
    }

    console.log("The no. of connected 1's : ", count)
}



