/*
AB Scenario: MadLibs Game. 
Your program will show the user a list of five nouns, five verbs, five adjectives. 
The user can pick the one they want to use, as prompted by the program. 
Then the completed Mad Lib story will be displayed. 
The user can clear the choices and play again if desired (note: there is only one story for simplicity).

Here is the story:

A [noun] in Nebraska was arrested this morning after [verb]+ing in front of a [adjective][noun]. The perpetrator had a history of [verb]+ing, but no one - not even her [noun] - ever imagined she'd [verb] with a [noun].

Even her [noun] was surprised. "I always thought she was [adjective], but I never thought she'd do something like this."

Either way, we imagine that after witnessing her [verb]+ing with a [adjective] [noun], there are probably a whole lot of [noun ]+ s that are going to need therapy.

Requirements:

The user must be able to clear the choices and play as many times as they like (with the same base story for simplicity).
Uses at least one button, one label, and one input control.
Uses control properties to specify how the control should look.
There must be four possible choices each for nouns, verbs, adverbs, and adjectives.
The onlick event must be used. Other events can also be used, as desired.
All input must be prefaced with the users' name.
All output must be done using a label or other control.
The program may not use any alerts or console.log for output.

*/


//DEFINE VARIABLES 
let noun1 = ['cat', 'potato', 'pumpkin', 'waterbottle', 'skyscraper']
let verb1 = ['cry', 'cackle', 'invest', 'leap', 'vacation']
let adjective1 = ['explicit', 'psychotic', 'green', 'ideal', 'colossal']

//GUI DETAILS AND INTERRACTIONS
//Clicking on the noun
Dropdown1noun.onclick=function(){
  Dropdown1noun.value = noun1[]
}









//OUTPUT 

//console.log(`A ${noun1} in Nebraska was arrested this morning after ${verb1 + 'ing '} in front of a ${adjective1} ${noun1}.`) 



/*
The perpetrator had a history of ${verb1 + 'ing '}, but no one - not even her [noun] - ever imagined she'd [verb] with a [noun].

Even her [noun] was surprised. "I always thought she was [adjective], but I never thought she'd do something like this."

Either way, we imagine that after witnessing her [verb]+ing with a [adjective] [noun], there are probably a whole lot of [noun ]+ s that are going to need therapy.
*/
