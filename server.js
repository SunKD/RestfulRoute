const xp = require('express');
const bp = require('body-parser');
const path = require('path');

const app = xp();
app.use(bp.json());

app.use(xp.static(path.join(__dirname , './HelloAngular/dist/HelloAngular' )));

app.listen(8000, function(){
    console.log("Server is running!");
});