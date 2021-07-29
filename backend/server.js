const express = require('express') //appel express
const app = express()     //création instance de express
//*****/
const cors = require('cors')
const body = require('body-parser')
//*****/

const db = require('./config/db')  //appel base de données
db();


//***********************************************
app.use(express.json());                 //pour lire le code en forme json  
//***********************************************



//USERS******************************************** */
const usersRoute = require('./routes/usersRoute')  //appel route users *************
app.use(cors())                   //appel cors
app.use('/app/users',usersRoute) //middleware
//********************************************* */


//PRODUCTS***********************************************
const productsRoute = require('./routes/productsRoute')  //appel route products *************
app.use('/app/products',productsRoute) //middleware
//***********************************************


//ORDERS***********************************************
const ordersRoute = require('./routes/ordersRoute')  //appel route orders *************
app.use('/app/orders',ordersRoute) //middleware
//***********************************************


//config serveur//***********************************************
const PORT= process.env.PORT || '4000'

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING NOW ${PORT}`)
})