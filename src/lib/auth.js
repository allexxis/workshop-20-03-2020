const jsonwebtoken = require('jsonwebtoken');
const {SECRET} = require('../config/auth');
const {User} = require('../db');
const {ApolloError} = require('apollo-server');
const decode = (value) => {
    try {
        return jsonwebtoken.verify(value, SECRET);
    } catch (error) {
        return null;
    }
}

const authenticate = async (req, res) => {
    const token = req.headers['x-token'];
    if (!token) {
        return;
    }

    let tokenContent = decode(token);
    if(!tokenContent) {
        return ;
     }
    let user = await User.findOne({
        where:{
            id:tokenContent.id
        }
    }).catch(err=>{
        throw new ApolloError('Error on database')
    });
    if(!user){
        throw new ApolloError('User doesnt exist')
    }
    
    
    return user.dataValues;
}
module.exports={authenticate}