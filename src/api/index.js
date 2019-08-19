import ApiClient from './ApiClient';
import AuthAPI   from './Auth';

const { VUE_APP_ROOT_API } = process.env;

function apiFactory({ apiPrefix } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        apiClient : api,
        auth      : new AuthAPI({ apiClient: api }),
    };
}

export default apiFactory({ apiPrefix: VUE_APP_ROOT_API });

