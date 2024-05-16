import baladeSchema from '../model/balade.js';

const getArrondissement = async (request, response) => {
    try {
        const { num_arrondissement } = request.params;
        const baladeList = await baladeSchema.find({
            code_postal: num_arrondissement
        }).count();
        response.status(200).json({
            data: baladeList
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default getArrondissement;