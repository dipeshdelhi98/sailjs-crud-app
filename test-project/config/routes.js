/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'get /': { view: 'pages/homepage' },
  'get /articles/list':'ArticlesController.list',
  'get /articles/add':'ArticlesController.add',

  'post /articles/create':'ArticlesController.create',

  'get /articles/delete/:id':'ArticlesController.delete',
  'post /articles/delete/:id':'ArticlesController.delete',

  'get /articles/edit/:id':'ArticlesController.edit',

  'get /articles/update/:id':'ArticlesController.update',
  'post /articles/update/:id':'ArticlesController.update',

 

 


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
