const jwt=require('jsonwebtoken')

const authentication=(req,res,next)=>{
    const token=req.headers.authorization
    try{
        jwt.verify(token,"BabyCoder")
        const decoded=jwt.verify(token,"BabyCoder")
        if(decoded){
             req.body.userId=decoded.userId
             next()
        }else{
            res.send('Please login')
        }
    }catch(Err){
        res.send("you are not authorize")
    }
}

module.exports={authentication}