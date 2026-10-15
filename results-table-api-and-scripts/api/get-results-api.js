export async function resultsTable(file)
{
  try {
    const resultsFile = await fetch(file)
    const converted = resultsFile.json()
    return converted
  } catch (error) {
    console.error(`Error loading results JSON: ${error}`)
  }
}