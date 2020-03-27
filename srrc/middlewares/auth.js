var admin = require('firebase-admin');
const auth = function(req,res,next){
  const idToken = req.headers.authorization;
  
  console.log(idToken)

    admin.auth().verifyIdToken(idToken)
  .then(function(decodedToken) {
    let uid = decodedToken.uid;
    console.log("ok....")
    next();

  }).catch(function(error) {
    // Handle error
    console.log("baddddddddddddddddddddddd")
    res.send("you can't do that")
  });
} 


module.exports=auth