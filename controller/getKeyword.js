import baladeSchema from '../model/balade.js';

const getKeyword = async (request, response) => {
    try {
        const baladeList = await baladeSchema.find({
            mot_cle: { $size: 5 }
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

export default getKeyword;