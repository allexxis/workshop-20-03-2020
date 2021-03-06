const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
const {loadTypeSchema} = require('../src/lib/schema');

//Import resolvers
const User = require('./types/user/user.resolvers');

//Constants
const PORT = process.env.PORT || 5000;
const types =['user'] 
const {authenticate} = require('./lib/auth');

app.use(bodyParser.json({}));
app.use('/health',(req,res)=>{
    res.send({status:'Server is healthy'})
})
const rootSchema = `
    schema {
        query: Query
        mutation: Mutation
    }`;
const resolvers = {};
_.merge(resolvers,User);


const start =async()=>{
    const schemaTypes = await Promise.all(types.map(loadTypeSchema));
    const server  = new ApolloServer({
        typeDefs: [rootSchema, ...schemaTypes],
        resolvers: resolvers,
        context: async ({ req, res }) => {
            const user = await authenticate(req, res)
            return { user }
        },
    })
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}   
module.exports = {start};