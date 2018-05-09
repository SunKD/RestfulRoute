const xp = require('express');
const bp = require('body-parser');

const app = xp();
app.use(bp.json());

app.listen(8000, function(){
    console.log("Server is running!");
});