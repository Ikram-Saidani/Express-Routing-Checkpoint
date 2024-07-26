const express=require('express')
const PORT=5000
const {join}=require('path')
const bodyParser = require('body-parser')

const app=express()

app.set('view engine', 'ejs');
app.set('views','public')
app.use(express.static(join(__dirname,'css')))
app.use(bodyParser.urlencoded({ extended: true }))


app.use((req, res, next) => {
    var date = new Date()
    var day = date.getDay()
    var hour = date.getHours()

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next()
    }
    else{res.render('error')}
})



app.get('/',(req,res)=>{
    res.render('home')
})


app.get('/services',(req,res)=>{
    res.render('services')
})


app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.post('/contact', (req, res) => {
    console.log(req.body)
    res.redirect('/contact')
})



app.listen(PORT,()=>console.log(`server running on PORT ${5000}`))