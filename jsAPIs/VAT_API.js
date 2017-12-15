
const fetch = require('node_fetch')

const result = 
    fetch('https://vatapi.com/v1/country-code-check?code=DE', {
        headers: {
            'apikey': process.env.VAT_API_KEY // this is doesn't work without your own API Key.
        }
    })
    .then(response => response.json())
    .then(data => data.rates.standard.value)
    
result     
