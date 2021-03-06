const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5000,
    path = require('path')

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})