
let memberName = ""
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

submitnames.onclick=function(){
  memberName = inptFirstName.value
  if ((memberName == members[0]) || (memberName == members[1]) || (memberName == members[2]) || (memberName == members[3]) || (memberName == members[4]) || (memberName == members[5]) || (memberName == members[6]) || (memberName == members[7]) || (memberName == members[8]) || (memberName == members[9]) || (memberName == members[10]))
    NSB.MsgBox("Congrats! You are a member!")
  else    
    NSB.MsgBox("That login is not recognised. Please try again.")
    inptFirstName.value = ""
}


