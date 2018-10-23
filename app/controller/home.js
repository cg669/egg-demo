'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // await this.ctx.curl('http://eggjs.com/api/echo', { dataType: 'json' })
    // await this.ctx.service.demo.delete({name:'Hello World'})
    await this.ctx.service.demo.create({name:'Hello World'})
    // this.ctx.status = 500
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
