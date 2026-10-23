const resultsTable = document.getElementById("player-results")

// Small function to convert a CSV table to a JSON object
export const convertCSVtoObj = async (url) => {
    const file = await fetch(url);
    const csvData = await file.text()
    const csv = await Papa.parse(csvData, { header: false })

    return csv
}

// Get CSV table from GitHub
const table = await convertCSVtoObj("https://raw.githubusercontent.com/SewerFox/sewer-hideout/refs/heads/sewer-site/results-assets/enduro/results/enduro-1st.csv")

// Format the table matrix
const scoringSystem = [0, 10, 8, 6, 5, 4, 3, 2, 1]
const tableLength = Object.keys(table.data[1]).length
const resultsLength = Object.keys(table.data).length
let i = 1

while (i <= resultsLength - 1) {
    let sumOfPoints = 0

    for (let j = 1; j <= tableLength; j++) {
        switch (table.data[i][j]) {
            case "1st":
                sumOfPoints += scoringSystem[1]
                break
            case "2nd":
                sumOfPoints += scoringSystem[2]
                break
            case "3rd":
                sumOfPoints += scoringSystem[3]
                break
            case "4th":
                sumOfPoints += scoringSystem[4]
                break
            case "5th":
                sumOfPoints += scoringSystem[5]
                break
            case "6th":
                sumOfPoints += scoringSystem[6]
                break
            case "7th":
                sumOfPoints += scoringSystem[7]
                break
            case "8th":
                sumOfPoints += scoringSystem[8]
                break
            default:
                sumOfPoints += scoringSystem[0]
                break
        }
    }
    table.data[i].push(sumOfPoints)
    i++
}

// Sorting the table
const formatedTable = table.data.sort((a, b) => b[13] - a[13])

console.log(formatedTable)
// Getting all indexes
const indexes = formatedTable.map((x, index) => [index]);

// Create the table
let j = 1
while (j <= resultsLength) {
    resultsTable.innerHTML +=
        `
        <span class="table-data">${indexes[j]}</span>
        <span class="table-data">${formatedTable[j][0]}</span>
        <span class="table-data">${formatedTable[j][13]}</span>
        <span class="table-data">${formatedTable[j][1]}</span>
        <span class="table-data">${formatedTable[j][2]}</span>
        <span class="table-data">${formatedTable[j][3]}</span>
        <span class="table-data">${formatedTable[j][4]}</span>
        <span class="table-data">${formatedTable[j][5]}</span>
        <span class="table-data">${formatedTable[j][6]}</span>
        <span class="table-data">${formatedTable[j][7]}</span>
        <span class="table-data">${formatedTable[j][8]}</span>
        <span class="table-data">${formatedTable[j][9]}</span>
        <span class="table-data">${formatedTable[j][10]}</span>
        <span class="table-data">${formatedTable[j][11]}</span>
        <span class="table-data">${formatedTable[j][12]}</span>`

    const newResultsTable = document.getElementsByClassName("table-data")

    for (let i = 0; i < newResultsTable.length; i++) {
        const text = newResultsTable[i].textContent

        // Position highlighting
        if (text.includes("1st")) {
            newResultsTable[i].classList.add("rank-1st")
        } else if (text.includes("2nd")) {
            newResultsTable[i].classList.add("rank-2nd")
        } else if (text.includes("3rd")) {
            newResultsTable[i].classList.add("rank-3rd")
        } else if (text.includes("---")) {
            newResultsTable[i].classList.add("rank-null")
        } else if (text.includes("absent")) {
            newResultsTable[i].classList.add("rank-absent")
        } else if (text.includes("withdrew")) {
            newResultsTable[i].classList.add("rank-withdrew")
        }
    }
    j++
}
