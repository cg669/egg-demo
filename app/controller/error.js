const Controller = require('egg').Controller


class ErrorController extends Controller {
    async error(){
        await this.ctx.render('error/error.tpl')
    }
}

module.exports = ErrorController