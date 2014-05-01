var express = require('express'),
	app = express(),
	fs = require("fs");
	
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.post('/saveScreen', function(req, res){	
	var fileName = __dirname + '/uploads/' + req.body.fileName + '.jpg',
		base64Data = req.body.imgBase64.replace(/^data:image\/png;base64,/,"");

	fs.writeFile(fileName, new Buffer(base64Data, "base64"), function(err) {
		err ? res.send('Oops! something bad happened. :(')  : res.send("Woow! screen saved successfully. :)");		
	});
});

app.listen(3000);
console.info('Node server is running on port : 3000');