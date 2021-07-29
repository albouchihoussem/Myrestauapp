const Order = require('../model/ordersModel') 

module.exports = {

/*POST********************************************/
  addOrder:async(req,res)=>{     

   const reference = req.body.reference
   const nom = req.body.nom
   const prix = req.body.prix
   const statut = req.body.statut
   
  try{
      order= new Order({             
        reference,
        nom,
        prix,
        statut 
                     
        })                                
  
      await order.save()                 
      res.json(order)                  
  
    } catch(error){ 
    console.error(error.message)
}
},   
/*GET********************************************/
getOrder:async(req,res)=>{
  try{
    const order = await Order.find();
    res.json(order)
  }catch(error){
    console.error(error.message)
  }
},                    
/*DELETE********************************************/
deleteOrder:async(req,res)=>{
  try{
    const order = await Order.findByIdAndDelete(req.params.id)
    res.json(order)
  }catch(error){
    console.error(error.message)
  }
},
/*Update********************************************/
updateOrder:async(req,res)=>{
  try{
    const order = await Order.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(order)
  }catch(error){
    console.error(error.message)
  }
}
}
