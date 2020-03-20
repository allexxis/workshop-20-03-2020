const jsonwebtoken = require('jsonwebtoken');
const {AuthenticationError,ApolloError} =require('apollo-server')
const  {User}  = require('../../db');
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
        throw new ApolloError('Uknown error')
    })
    if(!user){
        throw new AuthenticationError('User doesnt exist' ) 
    }
    const valid = password === user.dataValues.password;
    if(!valid){
        throw new AuthenticationError('Email or password incorrect' ) 
    }
    return {
        User:{
            email:user.dataValues.email,
            id:user.dataValues.id,
            name:user.dataValues.name
        }
    }
}
module.exports={
    Query:{
        test
    },
    Mutation:{
        login
    }
}