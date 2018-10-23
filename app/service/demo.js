
const Service = require('egg').Service

class DemoMySql extends Service {
    async create(opt) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        console.log(opt,'this.app.mysql')
        const result = await this.app.mysql.insert('users', opt)
        const insertSuccess = result.affectedRows === 1
    }
    async delete(opt){
        const result = await this.app.mysql.delete('users',opt)
    }
}
module.exports = DemoMySql;