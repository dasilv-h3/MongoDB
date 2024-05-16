import baladeSchema from '../model/balade.js';

const getBalade = async (request, response) => {
    try {
        const { id } = request.params;
        const baladeItem = await baladeSchema.findById(id);
        response.status(200).json({
            data: baladeItem
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default getBalade;