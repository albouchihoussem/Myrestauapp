
const Product = require('../model/productsModel') 

module.exports = {

/*POST********************************************/
  addProduct:async(req,res)=>{     
   
   const nom = req.body.nom
   const description = req.body.description
   const prix = req.body.prix
  
  try{
      product= new Product({             
       
        nom,
        description,
        prix
        
                     
        })                                
  
      await product.save()                 
      res.json(product)                  
  
    } catch(error){ 
    console.error(error.message)
}
},   
/*GET********************************************/
getProduct:async(req,res)=>{
  try{
    const order = await Product.find();
    res.json(order)
  }catch(error){
    console.error(error.message)
  }
},                    
/*DELETE********************************************/
deleteProduct:async(req,res)=>{
  try{
    const order = await Product.findByIdAndDelete(req.params.id)
    res.json(order)
  }catch(error){
    console.error(error.message)
  }
},
/*Update********************************************/
updateProduct:async(req,res)=>{
  try{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(product)
  }catch(error){
    console.error(error.message)
  }
}
}
