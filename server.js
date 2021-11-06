const express = require('express');
const apiRoutes = require('./public/routing/apiRoutes');
const htmlRoutes = require('./public/routing/htmlRoutes');
const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => 
console.log(`Listening on PORT number: ${PORT}`));
