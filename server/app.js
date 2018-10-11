const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://admin123:admin123@ds227853.mlab.com:27853/gql-zore', { useNewUrlParser: true });

mongoose.connection.once('open', ()=>{
    console.log('Connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Server started on port 4000');
});