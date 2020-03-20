const jsonwebtoken = require('jsonwebtoken');
const {AuthenticationError,ApolloError} =require('apollo-server')
const  {User}  = require('../../db');
const {hashCompare} =require('../../lib/hash');
const {SECRET} = require('../../config/auth');
const test =(_,args,ctx)=>{
    console.log(ctx)
    return true
}
const login =async(_,{email,password},ctx)=>{
    const user = await User.findOne({
        where:{
            email
        }
    }).catch(err=>{
        console.err(err)
        throw new ApolloError('Database error')
    })
    if(!user){
        throw new AuthenticationError('User doesnt exist' ) 
    }
    const valid = hashCompare(password,user.dataValues.password)
    if(!valid){
        throw new AuthenticationError('Email or password incorrect' ) 
    }
    const token = jsonwebtoken.sign({ id: user.dataValues.id },SECRET,{ expiresIn: "2h" });

    return {
        User:{
            email:user.dataValues.email,
            id:user.dataValues.id,
            name:user.dataValues.name
        },
        Token:{
            token
        }
    }
}
const me = async(_,args,ctx)=>{
    console.log(ctx)
    if(!ctx.user){
        throw new AuthenticationError('User dont have a token')
    }
    return {
        email:ctx.user.email,
        id:ctx.user.id,
        name:ctx.user.name
    }
}
module.exports={
    Query:{
        test,
        me 
    },
    Mutation:{
        login
    }
}