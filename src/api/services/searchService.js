import {client as api} from '../client';
import {handleApiError} from '../errorHandler';
import {MULTI} from "../../valueObjects/SearchType";

export default {
    /**
     * @param type  Refer to SearchType.js
     * @param page
     * @returns {Promise<*>}
     */
    async paginate(query, type = MULTI, page = 1) {
        try {
            const response = await api.get(`/search/${type}`, {
                params: {
                    page,
                    query
                }
            });

            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
}