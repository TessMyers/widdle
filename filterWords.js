const fiveLetterWords = require('sowpods-five');
const fs = require('fs')

/* This script takes the list of all 5 letter scrabble-approved words and removes any with repeated letters, producing an
 exported array of strings, with alphabetical sort order preservd.You don't need to run this script unless you want to mess 
 with this file to get a different output. Jumbling the output order, for instance, might produce better results. */

let wordArr;
let hasRepeats;

const repeatsRemoved = fiveLetterWords.filter((word) => {
    wordArr = word.split('');
    hasRepeats = wordArr.some((letter) => { return wordArr.indexOf(letter) != wordArr.lastIndexOf(letter); })
    return !hasRepeats;
})

fs.writeFile('./filteredWords.json', 'module.exports = ' + JSON.stringify(repeatsRemoved), err => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('filteredWords.json has been written');
    }
});

