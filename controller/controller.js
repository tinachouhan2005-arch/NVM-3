const post = require('../data/data')

//Read 
function fetchPost(req,res){
    try{
        res.status(200).json({
            success:true,
            msg:'Post data fetch Successfully',
            data:post
        })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:'Network Error',
            err:err.message
        })
    }
}

//Single data

function singlePost(req,res){
    try{
        let postId = Number(req.params.id)
        let singlePost = post.find(t => t.id === postId)

        if(!singlePost){
            return res.status(404).json({
                success:false,
                msg:`Post id ${postId} is not found`
            })
        }
        res.status(200).json({
            success:true,
            msg:`Post id ${postId} is found successfully`,
            data:singlePost
        })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:'Network error',
            err:err.message
        })
    }
}

//Create
function createPost(req,res){
    try{
        let postObj={
            title:req.body.title,
            userId:req.body.userId,
            body:req.body.body,
            id:Date.now().toString()
        }
        post.unshift(postObj)
        res.status(201).json({
            success:true,
            msg:'Post data created successfully',
            data:postObj
        })
    }catch(err){
        res.status(500).json({
            success:false,
            
        })
    }
}

module.exports={
    fetchPost,
    singlePost
}