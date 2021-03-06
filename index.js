const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var request = require("request");

app.use(express.static('views'));

app.use(express.urlencoded({ extended: true }))

app.post('/switch', (req, res) => {
    if(req.query.urls){
        var urls = req.query.urls;
        urls = urls.split(',');

        urls.forEach(url => {
            var options = {
                method: 'POST',
                url: url,
                headers: {
                    'content-type': req.headers['content-type']
                },
                form: req.body
            };
        
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
            });
        });
    }

    res.send('ok');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
