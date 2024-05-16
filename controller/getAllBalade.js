import baladeSchema from '../model/balade.js';

const getAllBalade = async (request, response) => {
    try {
        const baladeList = await baladeSchema.find();
        response.status(200).json({
            data: baladeList
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default getAllBalade;