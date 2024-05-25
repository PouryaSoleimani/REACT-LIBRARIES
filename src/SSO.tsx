//^ SSO PAGE
import React from 'react'

//* TUTORIAL 
// 1 - FIRST , VISIT THE GITHUB PAGE OF {react-0auth}
// 2 - FOLLOW THE STEPS IN IT'S DOCUMENTS
// 3 - THE STEPS ARE :
// ===========================
// 1 - FIRST GET YOUR {clientID} from ((console.cloud.google.com))
// 2 - WRAP THE WHOLE APPLICATION WHITE <GoogleOAuthProvider>
// 3 - JUST IMPORT THE COMPONENTS AND USE IT LIKE THE DOCUMENT
// 4 - READ THE DOCUMENT FOR MORE INFOS ...


//* TUTORIAL 2 : USING GOOGLE , AND NOT AN EXTERNAL PACKAGE
// FOR INITIALIZING THE GOOGLE ACCOUNT : 
//? FIRST INITIALIZING
// google.accounts.id.initialize ( {
// client_id : 'adasdsad23214125fasf' --> OUR CLIENT ID
// callback : ()=>{
// console.log('LOGGED IN )  ==> A FUNCTION THAT FIRES WHEN THE USER CONNECTS
//}
//})
//! ELEMENT SELECTION FOR RENDERING THE GOOGLE BUTTON
// google.accounts.id.renderButton(document.querySelector("#myButton"),{
// ADDITIONAL STYLES
// theme : "outline",
// size : "medium"
//})

const SSO = () => {
  return (
    <div>
      <h1 className='bg-zinc-900 text-white text-center py-1 text-3xl font-bold'>SSO PAGE</h1>
    </div>
  )
}

export default SSO  