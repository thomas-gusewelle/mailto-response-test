import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get('/mailto', (req, res) => {
  res.redirect("mailto:tgusewelle@phpc.org")
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
