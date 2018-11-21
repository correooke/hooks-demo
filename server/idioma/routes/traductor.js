var express = require('express');
var router = express.Router();

router.get('/:word', function(req, res) {
    const word = req.params.word;
    const url = `https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}/regions=us`;
    const fetchConf = {
        method: 'GET',
        headers: {
            app_id: 'ccbf2c99',
            app_key: '1f2ffcf66ade4fa7dfee89070a53ffae'
        }
    }
    
    fetch(url, fetchConf).then(data => data.json()).then(data => {
        console.log(data);
        res.send(data);
    });
});

module.exports = router;