const { think } = require('thinkjs');
const Base = require('./base.js');

module.exports = class extends Base {
    async indexAction() {
        return this.display();
    }

    // 查询
    async getListAction() {
        let data = await this.model('sys_department').getList();
        return this.success(data);
    }

    // 新增
    async addListAction() {
        let param = this.post();
        let data = await this.model('sys_department').addList(param);
        if (data) {
            return this.success('添加成功')
        } else {
            return this.fail('添加失败')
        }
    }
    // 删除

    async deleteListAction() {
        let param = this.post();
        let data = await this.model('sys_department').deleteList(param);
        if (data) {
            return this.success('删除成功')
        } else {
            return this.fail('删除失败')
        }
    }

    // 修改
    async updateListAction() {
        let param = this.post();
        let data = await this.model('sys_department').updateList(param);
        if (data) {
            return this.success('修改成功')
        } else {
            return this.fail('修改失败')
        }
    }

};
