
let accountName = ""

btnSubmit.onclick=function(){
  accountName = inptAccount.value
  let pass = inptPassword.value
  if ((accountName == "Smith") && (pass == "123Dogs#")) 
    ChangeForm(ABMadLibs)
    //I made this change to madlibs to make it easier to reference the name of the user
    //if you  want to go to membership form, do this instead: ChangeForm(membership)
  else    
    NSB.MsgBox("That login is not recognised. Please try again.")
    inptAccount.value = ""
    inptPassword.value = ""
}

