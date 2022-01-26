const words = require('./filteredWords.js');

/* A Widdle is a set of 5 words that cover nearly all letters of the alphabet with minimal repeats. 
Using these five words in a Wordle will rule out most letters, making the final guess easy. */

const tolerance = 2; // Number between 0 - 5. Tolerance allows for the final word to have this number of repeated letters. If you get a maximum stack error then raise this number.
const startIndex = 6; // Number between 0 - 8013. Change this to get a different starting word. Higher numbers will eventually produce worse results because I didn't bother to 
const widdleLength = 5; // Number between 1 - 5. Not to be over 5, something might explode. 

const widdle = [];
const usedLetters = [];

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
    if (widdle.length === widdleLength ) {
        return;
    } else {
        let candidate;

        if (widdle.length === widdleLength - 1) {  // Special case allowing tolerance for the final word
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
        } else {
            candidate = findNextWord(index);
        };

        if (candidate === undefined) {
            idx = widdle[widdle.length-1][1]+1;
            widdle.pop();
            usedLetters.splice(usedLetters.length-5, 5);

            if (widdle.length === 0) {
                // This is intended to restart the widdle search using a new starting word, but in reality it's too much recursion :(
                addToWiddle(words[counter], counter);
            }
        } else {
            idx = words.indexOf(candidate);
            addToWiddle(candidate, idx);
        }
        recurse(widdle, idx);
    }
}

addToWiddle(words[startIndex],startIndex);
recurse(widdle, startIndex);

console.log(widdle);
return widdle;