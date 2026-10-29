let postContainer = require('../controller/controller')

let express = require('express')

let router = express.Router()

router.get('/',postContainer.fetchPost)
router.get('/:id',postContainer.singlePost)
// router.post('/',postContainer.createPost)
// router.delete('/:id',postContainer.deletePost)
// router.patch('/:id',postContainer.updatePost)

module.exports = router

