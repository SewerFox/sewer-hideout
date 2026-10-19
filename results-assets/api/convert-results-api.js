export async function convertResultsToTable(table) {
  try {
    let convertedTable = []
    for (let i = 0; i < table.length; i++) {
      let sumOfPoints

      const playerResultsInfo = {
        player: null,
        stkEnterprise: null,
        cornfieldCrossing: null,
        lostChasm: null,
        imminentColdEffects: null,
        nothernResort: null,
        supertuxSpeedway: null,
        hacienda: null,
        shiftingSands: null,
        tuxTollway: null,
        greenValley: null,
        abyss: null,
        subsea: null,
        punishmentPoints: null,
        totalPoints: null
      }

      Object.values(table).slice(1).forEach((raceFinishedPosition) => {
        let result
        let pointsEarned
        switch (raceFinishedPosition) {
          case null: // Incoming race
            result = "---"
            pointsEarned = 0
            break
          case -1: // Player absent
            result = "Absent"
            pointsEarned = 0
            break
          case 0: // Player left
            result = "Forfeit 🥸"
            pointsEarned = 0
            break
          case 1: // Player finished in 1st
            result = "1st (+10)"
            pointsEarned = 10
            break
          case 2: // Player finished in 2nd
            result = "2nd (+8)"
            pointsEarned = 8
            break
          case 3: // Player finished in 3rd
            result = "3rd (+6)"
            pointsEarned = 6
            break
          case 4: // Player finished in 4th
            result = "4th (+5)"
            pointsEarned = 5
            break
          case 5: // Player finished in 5th
            result = "5th (+4)"
            pointsEarned = 4
            break
          case 6: // Player finished in 6th
            result = "6th (+3)"
            pointsEarned = 3
            break
          case 7: // Player finished in 7th
            result = "7th (+2)"
            pointsEarned = 2
            break
          case 8: // Player finished in 8th
            result = "8th (+1)"
            pointsEarned = 1
            break
          default: // Player finished in 9th or less
            result = `${raceFinishedPosition}th (+0)`
            pointsEarned = 0
            break
        }
        playerResultsInfo.raceFinishedPosition = result
        sumOfPoints += pointsEarned
      });
      playerResultsInfo.player = table.player
      playerResultsInfo.punishmentPoints = table.punishment-points
      playerResultsInfo.totalPoints = sumOfPoints - table.punishment-points

      convertedTable += playerResultsInfo
    }
    console.log(convertedTable)
  } catch (error) {
    console.error(`Error creating the ranking: ${error}`)
  }
}