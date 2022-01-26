const fiveLetterWords = require('sowpods-five');
const fs = require('fs')

let wordArr;
let hasRepeats;

const trimmed = fiveLetterWords.filter((word) => {
    wordArr = word.split('');
    hasRepeats = wordArr.some((letter) => { return wordArr.indexOf(letter) != wordArr.lastIndexOf(letter); })
    return !hasRepeats;
})

fs.writeFile('/Users/tessm/projects/widdle/filteredWords.json', JSON.stringify(trimmed), err => {
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
})

