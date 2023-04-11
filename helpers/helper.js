export function filterPokemon(list, searchName, searchType, searchWeakness, limit) {
  let filteredList = list.filter((pokemon) => {
    let compareScore = compareMatch(pokemon.name, searchName);
    if (
      (compareScore > 0 || searchName == "") &&
      (pokemon.type.includes(searchType) || searchType == "") &&
      (pokemon.weaknesses.includes(searchWeakness) || searchWeakness == "")
    ) {
      pokemon.match = compareScore;
      return true;
    } else {
      return false;
    }
  });
}

function compareMatch(referenceName, searchName) {
  let response = 0;
  let tempRefName = referenceName.toLowerCase();
  for (let char of searchName) {
    if (tempRefName.toLowerCase().includes(char)) {
      response +=
        tempRefName.indexOf(char) == searchName.indexOf(char) ? 1 : 0.5;
      tempRefName = tempRefName.replace(char, " ");
    }
  }
  return response;
}
