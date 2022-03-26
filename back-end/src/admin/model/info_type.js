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
            type_name: param.type_name,
            display_order: param.display_order,
            explain: param.explain,
        })
    }
};
