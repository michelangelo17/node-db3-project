const { PORT } = require('./env')
const server = require('./server.js')

server.listen(PORT || 5000, () => {
  console.log(`Listening on port ${PORT}...`)
})
