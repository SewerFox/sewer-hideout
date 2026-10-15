import { resultsTable } from "../api/get-results-api.js"
import { convertResultsToPoints } from "../api/convert-results-to-points-api.js"

const topFour = document.querySelector("#top-four")
const allTheRest = document.querySelector("#all-the-rest")

const importedTable = resultsTable("https://raw.githubusercontent.com/SewerFox/sewer-hideout/refs/heads/sewer-site/results-table_scripts/enduro/results/enduro-1st-edition.json")

console.log(importedTable.size())

topFour.innerHTML = `<p id="st">1 - Someone - 89</p>
                     <p id="nd">2 - Some0ne - 87</p>
                     <p id="rd">3 - Some1 - 78</p>
                     <p id="th">4 - S0me0ne - 65</p>`