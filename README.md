# Widdle??

I hate fun so I wrote a script that ruins wordle. 

This script can be used to find a Widdle, a set of five words that cover nearly all letters of the alphabet, so if you use these 5 words in your first 5 wordle guesses you'll have a pretty easy time figuring out the answer due to process of elimination. Throw an anagram solver in there and you basically don't have to use your brain at all!

There is likely more than one set of 5 words that cover nearly all 26 letters of the alphabet. Possibly even a holy grail that gets all 25 with no repeats. I wouldn't know because I exceeded maximum call stack size before getting there. Below are a few sets, hidden behind a spoiler wall. Don't blame me if this ruins Wordle for you.

<details>
  <summary>Spoiler warning</summary>

Tolerance 2, leaving Q and X undetermined:  

    abets  
    flick  
    grown  
    jumpy  
    vozhd

Tolerance 2, leaving Z and X undetermined:  

    abmho  
    clunk  
    jived  
    grypt  
    waqfs  
</details>
&nbsp  

This recursive algorithm won't capture all possible Widdles, and if you want to search form more there's a manual search aspect. I don't think it would be too hard to expand this algorithm to do a far more efficient search, but I'm not going to do that anytime soon. 

# Usage

If you just want some cheat words then use the ones above. If you want to mess around with the algorithm and find more Widdles, be my guest! You'll need Node installed. 


### Quick start

    $ node findWiddle.js

Running the script will get the first Widdle shown above. You'll have to manually edit `startIndex` in `findWiddle.js` to find other combos. Raise the `tolerance` if you get a maximum stack error. Could I have done literally anything to handle this failure case? Absolutely. Did I? No. It's yours to enjoy. 

### To develop

    $ yarn install 

Best of luck.




