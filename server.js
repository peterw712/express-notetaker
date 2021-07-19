const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`now listening on http://localhost:${PORT}`)
});