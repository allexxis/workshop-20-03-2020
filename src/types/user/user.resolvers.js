const jsonwebtoken = require('jsonwebtoken');

const test =(_,args,ctx)=>{
    console.log(ctx)
    return true
}
const login =async(_,{email,password},ctx)=>{
    return {
        id:'1',
        email:'avalenciano@bananacode.co',
        name:'Alexis Valenciano'
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