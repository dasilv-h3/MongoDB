import baladeSchema from '../model/balade.js';

const getWebsite = async (request, response) => {
    try {
        const baladeList = await baladeSchema.find({ 
            url_site: { $ne: null }
        });
        response.status(200).json({
            data: baladeList
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default getWebsite;