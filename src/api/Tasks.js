import Base from './Base';

export default class extends Base {
    async fetchTasks(url, query) {
        const data = await this.apiClient.get(url, query);

        return data;
    }

    async createTask(url, payload) {
        const data = await this.apiClient.post(url, payload);

        return data;
    }

    async deleteTask(url) {
        const data = await this.apiClient.delete(url);

        return data;
    }

    async updateTask(url, payload) {
        console.log(url, payload);
        const data = await this.apiClient.put(url, payload);

        return data;
    }
}
