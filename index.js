const express = require('express');
const mongoose = require('mongoose').connect('mongoose/localhost/trivia');
const db = 'mongoose://localhost/trivia');
mongoose.connect(db;{usenewurlporser:'true'})
.then(() => {
console.log('conectado');
})
.catch(erv => console.log(erv));

app.set('viewengine', 'pug');
app.set('view', '/.view');
const port = process.env.PORT || 3000;
app.get('/' (req, rec) => {
	res.send('hola');
});
app.listen(port);
res render('index',{
home:'true'
});