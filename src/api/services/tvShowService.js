import { client as api} from '../client';
import { handleApiError } from '../errorHandler';
import {AIRING_TODAY} from "../../valueObjects/TvShowListType";

export default {
    /**
     * @param type  Refer to MovieListType.js
     * @param page
     * @returns {Promise<*>}
     */
    async paginate(type = AIRING_TODAY, page = 1) {
        try {
            const response = await api.get(`/tv/${type}`, {
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