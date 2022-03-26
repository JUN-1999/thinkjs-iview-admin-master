'use strict';

module.exports = class extends think.Model {
    async getList() {
        return await this.select();
    }

    async addList(param) {
        let flag = await this.add(param);
        if (flag) {
            return true;
        }
    }

    async deleteList(param) {
        return await this.where({
            id: param.id
        }).delete();
    }

    async updateList(param) {
        return await this.where({
            id: param.id
        }).update({
            department_name: param.department_name
        })
    }
};
