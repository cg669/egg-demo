const Service = require('egg').Service

class UsersMySql extends Service {
    async create(opt) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        console.log(opt,'this.app.mysql')
        const result = await this.app.mysql.insert('users', opt)
        const insertSuccess = result.affectedRows === 1
        this.checkSuccess(insertSuccess)
        return opt
    }
    async delete(opt){
        const result = await this.app.mysql.delete('users',opt)
        console.log(result,'result')
        // const insertSuccess = result.affectedRows === 1
        // this.checkSuccess(insertSuccess)
        return opt
    }
    async list(){
        const result = await this.app.mysql.select('users')
        // console.log(result,'result')
        // const insertSuccess = result.affectedRows === 1
        // this.checkSuccess(insertSuccess)
        return result
    }
    // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
    checkSuccess(result) {
        if (!result) {
            const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
            this.ctx.throw(result.status, errorMsg);
        }
    }
}
module.exports = UsersMySql;