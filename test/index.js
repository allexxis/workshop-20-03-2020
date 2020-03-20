const {User} = require('../src/db');
const test = async()=>{
    const user = await User.findOne({
        // where:{
        //     id:2
        // }
    }).catch(err=>{
        console.err(err)
        process.exit(1)
    })
    if(user){
        console.log(user.dataValues) 
    }else{
        console.log('User not found')
    }
    process.exit(0)
}
test()
module.exports={test}