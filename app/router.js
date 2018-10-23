'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.new.list);
  router.get('/error', controller.error.error);


  //  api
  router.post('/api/users/create', controller.users.create)
  router.post('/api/users/delete', controller.users.delete)
  router.post('/api/users/list', controller.users.list)
};

