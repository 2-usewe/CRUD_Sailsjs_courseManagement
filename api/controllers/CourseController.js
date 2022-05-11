
/**
 * CourseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    add:function(req,res){
        res.view();
    },
  create:function(req,res){
      var course={
          name:req.param('name'),
          duration:req.param('duration'),
          fees:req.param('fees')
      };
      Course.create(course,function(err){
          if(err)return res.status(500).json({message:err.message})
          sails.log(course);
          return res.redirect('/course/add');
      })
  },
  find:function(req,res){
      Course.find()
      .exec((err,course)=>{
        if(err)return res.status(500).json({message:err.message})
        if(!course)return res.notFound();

        sails.log("find:",course);
        return res.view('course/index',{course:course});
      })
  },
  edit:function(req,res){
    Course.findOne({id:req.param('id')})
      .exec((err,course)=>{
        if(err)return res.status(500).json({message:err.message})
        if(!course)return res.notFound();

        sails.log("edit:",course);
        return res.view('course/edit',{course,cid:req.param('id')});
      })
  },
  updateFn:function(req,res){
    var course={
        name:req.param('name'),
        duration:req.param('duration'),
        fees:req.param('fees')
    };
      Course.update({id:req.param('id')},course)
      .exec((err,course)=>{
          if(err)return res.status(500).json({message:err.message})
          sails.log("update: ",course);
          return res.redirect('/');
      })
  },
  delete:function(req,res){
    Course.destroy({id:req.param('id')})
    .exec((err,course)=>{
        if(err)return res.status(500).json({message:err.message});
        sails.log("delete",course);
        return res.redirect('/');
    })
  }

};

