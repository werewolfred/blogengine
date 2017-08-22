var express = require('express')
// var cors = require('cors');
var router = express.Router()
var mongoose = require('mongoose')
var server = express();


// server.use(cors());
//  TODO
var blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true}
})

var Blogs = mongoose.model('Blog', blogSchema)

router.get('/', function(req, res, next) {
    Blogs.find({})
    .then((blogs)=>{
      res.send(blogs)
    })
    .catch(next)
})

router.post('/', function(req, res, next) {
    Blogs.create(req.body)
    .then((blog)=>{
        res.send(blog)
    })
    .catch(next)
})

router.get('/:blogId', function(req, res, next){
  let blogId = req.params.blogId
  Blogs.findById(blogId)
  .then(blog =>{
    if(blog){
    res.send(blog)
    }else{
      next({message: 'You suck!'})
    }
  })
  .catch(next)
})

router.delete('/:blogId', (req, res, next) => {
  var blogId = req.params.blogId
  Blogs.findByIdAndRemove(blogId)
  .then(blog =>{
    res.send({message: 'Successfully deleted.'})
  })
  .catch(next)
})

router.put('/:blogId', (req, res, next) =>{
  var blogId = req.params.blogId
  var updatedBlogObj = req.body
  Blogs.findByIdAndUpdate(blogId, updatedBlogObj)
  .then(blog => {
    res.send({message: 'Successfully Updated Blog'})
  })
  .catch(next)
})


router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next){
  if (req.xhr){
    res.json({success: false, error: err})
  }else{
    res.json({success: false, error: err.message})
  }
}

module.exports = router