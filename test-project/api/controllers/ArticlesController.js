/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    list:function(req, res){
        Articles.find({}).exec(function(err, articles){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('pages/list', {articles:articles});
            
        });
    },
    add: function(req, res){
        res.view('pages/add');
    },
    create:function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.create({title:title, body:body}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });
    },

    delete: function(req, res){
        var id = req.param('id');
        console.log('inside delete function', id)
        Articles.destroyOne({id:id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });

        
    },
    edit: function(req, res){
        Articles.findOne({id:req.params.id}).exec(function(err, article){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.view('pages/edit', {article:article});
        });
    },
    update: function(req, res){
        var title = req.body.title;
        var body = req.body.body;
        var id = req.param('id');

        console.log('inside update function', id)
      
            Articles.updateOne({id:id} ,{title:title, body:body}).exec(function(err){
            if(err){
                console.log(err);
            }
    

            res.redirect('/articles/list');
        });

        
    }
    
  

};

