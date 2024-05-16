import baladeSchema from '../model/balade.js';

const getSynthese = async (request, response) => {
    try {
        const baladeList = await baladeSchema.aggregate([
            {
                $group: {
                    _id: "$code_postal",
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);
        response.status(200).json({
            data: baladeList
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default getSynthese;
