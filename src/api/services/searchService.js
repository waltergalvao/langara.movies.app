import { client as api} from '../client';
import { handleApiError } from '../errorHandler';
import {LATEST} from "../../valueObjects/MovieListType";

export default {
    /**
     * @param type  Refer to MovieListType.js
     * @param page
     * @returns {Promise<*>}
     */
    async search(type = LATEST, page = 1) {
        try {
            const response = await api.get(`/movie/${type}`, {
                params: {
                    page
                }
            });

            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
}