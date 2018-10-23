const Controller = require('egg').Controller


class NewsController extends Controller {
    async list(){
        // const dataList = {
        //     list : [
        //         { id: 1,title:'this is news1',url:'/news/1'},
        //         { id: 2,title:'this is news2',url:'/news/2'}
        //     ]
        // }
        let list = await this.ctx.service.users.list()
        // list = JSON.stringify(list)
        console.log(list,'data')
        await this.ctx.render('news/list.tpl',{list:list})
    }
}

module.exports = NewsController