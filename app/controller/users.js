const Controller = require('egg').Controller;

const createRule = {
    name: {type: 'string', required: true, allowEmpty: false},
    age:{type:'string'}
}

class UsersController extends Controller {
    async create(){
        const ctx = this.ctx
        //  请求到service处理
        // console.log(ctx.request.body,'ctx.request.body')
        ctx.validate(createRule, ctx.request.body)
        const reqBody = await ctx.service.users.create(ctx.request.body)
        
        // const reqBody = await  await this.ctx.service.demo.create({name:'Hello World'})
       
        //  设置请求结果
        ctx.body = {
            data : reqBody
        }
        ctx.status = 201
    }
    async delete(){
        const ctx = this.ctx
        //  请求到service处理
        // console.log(ctx.request.body,'ctx.request.body')
        const reqBody = await ctx.service.users.delete(ctx.request.body)
        // const reqBody = await  await this.ctx.service.demo.create({name:'Hello World'})
       
        //  设置请求结果
        ctx.body = {
            data : reqBody
        }
        ctx.status = 201
    }
    async list(){
        const ctx = this.ctx
        //  请求到service处理
        // console.log(ctx.request.body,'ctx.request.body')
        const reqBody = await ctx.service.users.list()
        // const reqBody = await  await this.ctx.service.demo.create({name:'Hello World'})
       
        //  设置请求结果
        ctx.body = {
            data : reqBody
        }
        ctx.status = 201
    }
}

module.exports = UsersController
