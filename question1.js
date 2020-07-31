const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Ages Spilt with comma : ", function (ages) {
    main(ages)
    rl.close();
});

function main(ages) {
    let agesArr = []
    let ageMap = new Map()

    for (let i = 1; i <= 10; i++) {
        ageMap.set(i, 0)
    }

    agesArr = ages.split(",")

    agesArr.map(obj => {
        let num = parseInt(obj)
        if (num >= 1 && num <= 10) {
            if (ageMap.get(1) === undefined)
                ageMap.set(1, 1)
            else
                ageMap.set(1, ageMap.get(1) + 1)
        }
        else if (num >= 11 && num <= 20) {
            if (ageMap.get(2) === undefined)
                ageMap.set(2, 1)
            else
                ageMap.set(2, ageMap.get(2) + 1)
        }
        else if (num >= 21 && num <= 30) {
            if (ageMap.get(3) === undefined)
                ageMap.set(3, 1)
            else
                ageMap.set(3, ageMap.get(3) + 1)
        }
        else if (num >= 31 && num <= 40) {
            if (ageMap.get(4) === undefined)
                ageMap.set(4, 1)
            else
                ageMap.set(4, ageMap.get(4) + 1)
        }
        else if (num >= 41 && num <= 50) {
            if (ageMap.get(5) === undefined)
                ageMap.set(5, 1)
            else
                ageMap.set(5, ageMap.get(5) + 1)
        }
        else if (num >= 51 && num <= 60) {
            if (ageMap.get(6) === undefined)
                ageMap.set(6, 1)
            else
                ageMap.set(6, ageMap.get(6) + 1)
        }
        else if (num >= 61 && num <= 70) {
            if (ageMap.get(7) === undefined)
                ageMap.set(7, 1)
            else
                ageMap.set(7, ageMap.get(7) + 1)
        }
        else if (num >= 71 && num <= 80) {
            if (ageMap.get(8) === undefined)
                ageMap.set(8, 1)
            else
                ageMap.set(8, ageMap.get(8) + 1)
        }
        else if (num >= 81 && num <= 90) {
            if (ageMap.get(9) === undefined)
                ageMap.set(9, 1)
            else
                ageMap.set(9, ageMap.get(9) + 1)
        }
        else if (num >= 91 && num <= 100) {
            if (ageMap.get(10) === undefined)
                ageMap.set(10, 1)
            else
                ageMap.set(10, ageMap.get(10) + 1)
        }
        else {
            console.log("INVALID INPUT DETECTED")
        }
    })
    console.log(`AGE GROUP\tNo. of People\n\n1-10\t\t${ageMap.get(1)}\n11-20\t\t${ageMap.get(2)}\n21-30\t\t${ageMap.get(3)}\n31-40\t\t${ageMap.get(4)}\n41-50\t\t${ageMap.get(5)}\n51-60\t\t${ageMap.get(6)}\n61-70\t\t${ageMap.get(7)}\n71-80\t\t${ageMap.get(8)}\n81-90\t\t${ageMap.get(9)}\n91-100\t\t${ageMap.get(10)}`)
}



