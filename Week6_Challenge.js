/*A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:*/


function detectWord(crowd) {
  let word = '';

  for (let i = 0; i < crowd.length; i++) {
    const letter = crowd[i];

    if (letter === letter.toLowerCase()) {
      word += letter;
    }
  }

  return word;
}

