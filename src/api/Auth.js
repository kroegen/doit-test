import Base from './Base';

export default class extends Base {
    async login(url, paylaod) {
        const data = await this.apiClient.post(url, paylaod);

        return data;
    }

    setAuthToken(token) {
        this.apiClient.setAuthToken(token);
    }
}
