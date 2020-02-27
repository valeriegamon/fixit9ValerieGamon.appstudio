/*

The user can clear the choices and play again if desired (note: there is only one story for simplicity).

All input must be prefaced with the users' name.
All output must be done using a label or other control.
The program may not use any alerts or console.log for output.
*/

//DEFINE VARIABLES 
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
  secondVerb = verb2.value
  thirdVerb = verb3.value
  fourthVerb = verb4.value
  fifthVerb = verb5.value
  
  firstAdjective = adjective1.value
  secondAdjective = adjective2.value
  thirdAdjective = adjective3.value
  fourthAdjective = adjective4.value
  fifthAdjective = adjective5.value
  
  NSB.MsgBox(`${accountName}, HERE IS YOUR MAD LIB: \n \n \n A ${firstNoun} in Nebraska was arrested this morning after ${firstVerb + 'ing'} in front of a ${firstAdjective} ${secondNoun}. \n \n The perpetrator had a history of ${secondVerb + 'ing'}, but no one - not even her ${thirdNoun} - ever imagined she would ${thirdVerb} with a ${secondAdjective} ${fourthNoun}. Even her ${fifthNoun} was surprised, and said \n \n I always thought she was ${thirdAdjective}, but I never thought she would do something like this. \n \n Either way, we imagine that after witnessing her ${fourthVerb+ 'ing'} with a ${fourthAdjective} ${secondNoun}, there are probably a whole lot of ${fifthAdjective} ${firstNoun + 's'} that are going to need therapy.`)
  
  //SET BACK TO 0
  noun1 = ""
  noun2 = ""
  noun3 = ""
  noun4 = ""
  noun5 = ""
  
  verb1 = ""
  verb2 = ""
  verb3 = ""
  verb4 = ""
  verb5 = ""
  
  adjective1 = ""
  adjective2 = ""
  adjective3 = ""
  adjective4 = ""
  adjective5 = ""
}
