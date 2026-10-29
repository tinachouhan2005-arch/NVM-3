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
            id:Date.now()
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
            msg:'Network Error',
            err:err.message
        })
    }
}

//Update
function updatePost(req,res){
    try{
        let updateId = Number(req.pramas.id)
        let getIndex = post.findIndex(t => t.id === updateId)

        if(getIndex === -1){
            return res.status(404).json({
                success:false,
                msg:'The post is not found'
            })
        }

        let obj = post.find(t => t.id === updateId)

        let updateObj={
            ...obj,
            ...req.body,
            id:obj.id
        }
        post[getIndex]=updateObj
        res.status(200).json({
            success:true,
            msg:'The post is updated successfully',
            data:updateObj
        })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:'Network Error',
            err:err.message
        })
    }
}

//Delete

function deletePost(req,res){
    try{
        let deleteId = Number(req.pramas.id)
        let getIndex = post.findIndex(t => t.id === deleteId)

        if(getIndex === -1){
            res.status(404).json({
                success:false,
                msg:`The post with id ${deleteId} is not found`
            })
        }
        let deletePost = post.splice(getIndex, 1)

        res.status(200).json({
            success:true,
            msg:`The post with id ${deleteId} is deleted successfully`,
            data:deletePost
        })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:'Network Error',
            err:err.message
        })
    }
}

module.exports={
    fetchPost,
    singlePost,
    createPost,
    deletePost,
    updatePost,
}