const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

express()
  .use(bodyParser.urlencoded({ extended: false }));
  .use(bodyParser.json());
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    if ( req.query ) console.log(req.query)
    res.render('pages/index', {
      query: req.query
    })
  )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
