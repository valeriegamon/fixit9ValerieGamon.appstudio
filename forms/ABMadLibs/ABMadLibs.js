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
        //let noun1 = ['cat', 'potato', 'pumpkin', 'waterbottle', 'skyscraper']
        //let verb1 = ['cry', 'cackle', 'invest', 'leap', 'vacation']
        //let adjective1 = ['explicit', 'psychotic', 'green', 'ideal', 'colossal']
let firstNoun = ""
let firstVerb = ""
let firstAdjective = ""
let secondNoun = ""
let secondVerb = ""
let secondAdjective = ""
let thirdNoun = ""
let thirdVerb = ""
let thirdAdjective = ""
let fourthNoun = ""
let fourthVerb = ""
let fourthAdjective = ""
let fifthNoun = ""
let fifthVerb = ""
let fifthAdjective = ""

//GUI DETAILS AND INTERRACTIONS
//NOUNS
noun1.onclick=function(){
  alert("Enter one of the following: cat, potato, pumpkin, waterbottle, skyscraper")
}
noun2.onclick=function(){
  alert("Enter one of the following: cat, potato, pumpkin, waterbottle, skyscraper")
}
noun3.onclick=function(){
  alert("Enter one of the following: cat, potato, pumpkin, waterbottle, skyscraper")
}
noun4.onclick=function(){
  alert("Enter one of the following: cat, potato, pumpkin, waterbottle, skyscraper")
}
noun5.onclick=function(){
  alert("Enter one of the following: cat, potato, pumpkin, waterbottle, skyscraper")
}

//VERBS
verb1.onclick=function(){
  alert("Enter one of the following: cry, cackle, invest, leap, vacation")
}
verb2.onclick=function(){
  alert("Enter one of the following: cry, cackle, invest, leap, vacation")
}
verb3.onclick=function(){
  alert("Enter one of the following: cry, cackle, invest, leap, vacation")
}
verb4.onclick=function(){
  alert("Enter one of the following: cry, cackle, invest, leap, vacation")
}
verb5.onclick=function(){
  alert("Enter one of the following: cry, cackle, invest, leap, vacation")
}

//ADJECTIVES
adjective1.onclick=function(){
  alert("Enter one of the following: explicit, psychotic, green, ideal, colossal")
}
adjective2.onclick=function(){
  alert("Enter one of the following: explicit, psychotic, green, ideal, colossal")
}
adjective3.onclick=function(){
  alert("Enter one of the following: explicit, psychotic, green, ideal, colossal")
}
adjective4.onclick=function(){
  alert("Enter one of the following: explicit, psychotic, green, ideal, colossal")
}
adjective5.onclick=function(){
  alert("Enter one of the following: explicit, psychotic, green, ideal, colossal")
}

//ONCE YOU SUBMIT
submit.onclick=function(){
  firstNoun = noun1.value
  secondNoun = noun2.value
  thirdNoun = noun3.value
  fourthNoun = noun4.value
  fifthNoun = noun5.value
  
  
  firstVerb = verb1.value
  firstAdjective = adjective1.value
  
  alert(`A ${firstNoun} in Nebraska was arrested this morning after ${firstVerb + 'ing '} in front of a ${firstAdjective} ${secondNoun}. The perpetrator had a history of ${secondVerb + 'ing '}, but no one - not even her ${thirdNoun} - ever imagined she would ${fifthVerb} with a ${firstNoun}. Even her ${fifthNoun} was surprised, and said "I always thought she was ${secondAdjective}, but I never thought she'd do something like this." Either way, we imagine that after witnessing her ${thirdVerb+ 'ing'} with a ${thirdAdjective} ${secondNoun}, there are probably a whole lot of ${fifthAdjective + 's'} that are going to need therapy.`)
}



/*

btnSubmit.onclick=function(){
  if ((accountName == "Smith") && (pass == "123Dogs#"))
    ChangeForm(welcome)
  else    
    NSB.MsgBox("That login is not recognised. Please try again.")
    inptAccount.value = ""
    inptPassword.value = ""
}
*/