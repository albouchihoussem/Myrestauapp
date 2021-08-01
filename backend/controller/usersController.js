const User = require('../model/usersModel') // import users model

module.exports = {

/*POST********************************************/
  addUser:async(req,res)=>{     //asynchronne: promesse vers base de donnée
                                  //req body
   const nom = req.body.nom
   const image = req.body.image
   const email = req.body.email
   const telephone = req.body.telephone
   const adresse = req.body.adresse
   const mot_de_passe = req.body.mot_de_passe
  try{
      user= new User({              //constructor    (rq:'user'dans model)et (model=classe) (*)
        nom,
        image,
        email,
        telephone,   
        adresse,
        mot_de_passe                   //le model qui attend response va etre rempli avec le body de la requete en cours de traitement
      })                                //remplissage
  
      await user.save()                   //save (*)
      res.json(user)                   //response : convertir la requete en json pour etre traiter par la base de donnée (*)
  
    } catch(error){ 
    console.error(error.message)
}
},   
/*GET********************************************/
getUser:async(req,res)=>{
  try{
    const user = await User.find();
    res.json(user)
  }catch(error){
    console.error(error.message)
  }
},                    
/*DELETE********************************************/
deleteUser:async(req,res)=>{
  try{
    const user = await User.findByIdAndDelete(req.params.id)
    res.json(user)
  }catch(error){
    console.error(error.message)
  }
},
/*Update********************************************/
updateUser:async(req,res)=>{
  try{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(user)
  }catch(error){
    console.error(error.message)
  }
}
}














