const express=require('express');
const novelcovid=require('novelcovid');
const expresshandlebar=require('express-handlebars');


const app=express();
app.engine('handlebars',expresshandlebar({defaultLayout:'main'}));
app.set('view engine','handlebars')

novelcovid.countries().then((response) => {
    console.log(response);
    });
    

app.get("/", function (req, res) {
    novelcovid.countries().then((response) => {
    res.render("home", { info: response });
    });
    });

app.listen('3535',()=>{
    console.log('Server started at port 3535');
    
})