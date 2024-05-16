import baladeSchema from '../model/balade.js';

const getCategories = async (request, response) => {
    try {
        const categories = await baladeSchema.distinct("categorie");
        response.status(200).json({
            categories: categories
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default getCategories;