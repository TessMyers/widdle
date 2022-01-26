const { indexOf, find } = require('./filteredWords.js');

const words = require('./filteredWords.js');

/* Given a set of all acceptable 5 letter English words, pick the first word. 
Find a second word that does not contain any of the letters in the first word
Find a third word that does not contain any letters in the first and second words\
If you can’t find a 4th, delete entry three and pick another 3rd entry


How to handle repeats? I don’t want to pick the same 4 word combo
Keep a numbered object, each entry has an array of rejected words for that level

Recursively:
If counter = 5, return
If counter does not equal 5, 
Search for a word with no repeated letters. If cannot find, delete previous level and pick the next one. */

const widdle = [];
const usedLetters = [];
let counter = 0;
const tolerance = 2;

function addToWiddle(word, idx) {
    widdle.push([word, idx])
    word.split('').forEach(letter => { usedLetters.push(letter); });
}

function findNextWord(index){
    return words.slice(index).find(word => {
        const hasForbiddenLetters = word.split('').some( letter => usedLetters.includes(letter));
        return !hasForbiddenLetters;
    })
}

function recurse(widdle, index) {

    if (widdle.length === 5 ) {
        return;
    } else {
        //find the eligible next word, starting at last entry's idx
        let candidate;
        if (widdle.length === 4) {
            // special case allowing tolerance for the final word
            candidate = words.slice(index).find(word => {
                let count = 0;
                const hasForbiddenLetters = word.split('').some( letter => {
                    if (usedLetters.includes(letter)) {
                        count++;
                        if (count >= tolerance) { return true; }
                    }
                    return false;

                });
                return !hasForbiddenLetters;
            })
            //end special case
        } else {
            candidate = findNextWord(index);
        };
        if (candidate === undefined) {
            // remove previous entry and find another one, starting at the next index
            idx = widdle[widdle.length-1][1]+1;
            widdle.pop();
            usedLetters.splice(usedLetters.length-5, 5);

            if (widdle.length === 0) {
                counter++;
                addToWiddle(words[counter], counter);
            }
        } else {
            idx = words.indexOf(candidate);
            addToWiddle(candidate, idx);
        }
        if (counter < 10 ){
            recurse(widdle, idx);
        } else {
            console.log('Limit reached');
        }
    }

}

addToWiddle(words[0],0);
recurse(widdle, 0);

console.log(widdle);

return widdle;