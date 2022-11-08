const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    const user = req.query.user || {}
    user.username = user.username || ''
    user.password = user.password || ''
    const authenticated = user.username === 'Coffee' && user.password === 'iheartny'
    
    const twitter = req.query.twitter || {}
    twitter.handle = twitter.handle || ''
    twitter.hashtag = twitter.hashtag || ''
    
    const instagram = req.query.instagram || {}
    instagram.handle = instagram.handle || ''
    instagram.hashtag = instagram.hashtag || ''
    
    res.render('pages/index', {
      authenticated,
      user,
      twitter,
      instagram
    })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
