const express = require('express');
const cors = require('cors');
const app = express();
const inventoryRoutes = require('./routes/inventoryRoutes')
const warehouseRoutes = require('./routes/warehouseRoutes')
require('dotenv').config()
const PORT = 8080

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(( req, res, next )=>{
	next() 
})


app.use('/inventory',inventoryRoutes)
app.use('/warehouses',warehouseRoutes)


app.listen(PORT, function () {
	console.log(`server running at http://localhost:${PORT}`);
});
