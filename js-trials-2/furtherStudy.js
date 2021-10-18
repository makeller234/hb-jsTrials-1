'use strict';

function wordsInCommon(words1, words2) {
  const words1_set = new Set(words1);
  const words2_set = new Set(words2);
  const result = new Set();

  for (const word of words1_set){
    if (words2_set.has(word)){ // Check if something is in the set set.has
      result.add(word);

    }

  }

return Array.from(result) //to change set to array
}

function kidsGame(names) {
  const output = [names.shift()]; //removes and returns the first item in an array
  const first_letter = {};

  for (const name of names){
    if (!first_letter.hasOwnProperty(name[0])){
      first_letter[name[0]] = [name];
    }
    else{
      first_letter[name[0]].push(name);
    }
  }
  while (true) {
    let start_word = output[output.length-1];
    let start_letter = start_word[start_word.length-1];
    if (! first_letter.hasOwnProperty(start_letter)){
      break;
    }
    let word = first_letter[start_letter].pop(0);
    output.push(word); 
  }
  return output;
}
