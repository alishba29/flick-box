const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get;

app.listen(5000, console.log('server started on port 5000'));
