const resultsTableHTML = document.getElementById("player-results")

// Small function to convert a CSV table to a JSON object
export const convertCSVtoObj = async (url) => {
    const file = await fetch(url);
    const csvData = await file.text()
    const csv = await Papa.parse(csvData, { header: false })

    return csv
}

// Getting CSV table from GitHub
const table = await convertCSVtoObj("https://raw.githubusercontent.com/SewerFox/sewer-hideout/refs/heads/sewer-site/results-assets/enduro/results/enduro-1st.csv")

// Formatting the table matrix
const scoringSystem = [0, 10, 8, 6, 5, 4, 3, 2, 1]
const tableLength = Object.keys(table.data[1]).length
const resultsLength = Object.keys(table.data).length - 1

for (let i = 1; i <= resultsLength; i++) {
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
}

// Sorting the table
const formatedTable = table.data.sort((a, b) => b[13] - a[13])

// Putting the table in the HTML
let resultsTable = ``

for (let i = 1; i <= resultsLength; i++) {
    resultsTable +=
        `
        <span class="position-info">${i}</span>
        <span class="position-info">${formatedTable[i][0]}</span>
        <span class="points-info">${formatedTable[i][13]}</span>
        <span class="table-data">${formatedTable[i][1]}</span>
        <span class="table-data">${formatedTable[i][2]}</span>
        <span class="table-data">${formatedTable[i][3]}</span>
        <span class="table-data">${formatedTable[i][4]}</span>
        <span class="table-data">${formatedTable[i][5]}</span>
        <span class="table-data">${formatedTable[i][6]}</span>
        <span class="table-data">${formatedTable[i][7]}</span>
        <span class="table-data">${formatedTable[i][8]}</span>
        <span class="table-data">${formatedTable[i][9]}</span>
        <span class="table-data">${formatedTable[i][10]}</span>
        <span class="table-data">${formatedTable[i][11]}</span>
        <span class="table-data">${formatedTable[i][12]}</span>`
}

resultsTableHTML.innerHTML = resultsTable

// Putting some highlights

const tableData = document.querySelectorAll(".table-data")

for (let i = 0; i < tableData.length; i++) {
    const text = tableData[i].textContent

    if (text.includes("1st")) {
        tableData[i].classList.add("rank-1st")
    } else if (text.includes("2nd")) {
        tableData[i].classList.add("rank-2nd")
    } else if (text.includes("3rd")) {
        tableData[i].classList.add("rank-3rd")
    } else if (text.includes("---")) {
        tableData[i].classList.add("rank-null")
    } else if (text.includes("absent")) {
        tableData[i].classList.add("rank-absent")
    } else if (text.includes("withdrew")) {
        tableData[i].classList.add("rank-withdrew")
    }
}

const positionInfo = document.querySelectorAll(".position-info")
const pointsInfo = document.querySelectorAll(".points-info")

for (let i = 0; i < positionInfo.length; i++) {
    const text = positionInfo[i].textContent

    if (text === "1") {
        positionInfo[i + 0].classList.add("rank-1st")
        positionInfo[i + 1].classList.add("rank-1st")
        pointsInfo[i / 2].classList.add("rank-1st")
    }

    if (text === "2") {
        positionInfo[i + 0].classList.add("rank-2nd")
        positionInfo[i + 1].classList.add("rank-2nd")
        pointsInfo[i / 2].classList.add("rank-2nd")
    }

    if (text === "3") {
        positionInfo[i + 0].classList.add("rank-3rd")
        positionInfo[i + 1].classList.add("rank-3rd")
        pointsInfo[i / 2].classList.add("rank-3rd")
    }
}