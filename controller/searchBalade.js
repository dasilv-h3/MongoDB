import baladeSchema from '../model/balade.js';

const searchBalade = async (request, response) => {
    try {
        const search = request.params.search;
        const baladeItems = await baladeSchema.find({
            $or: [
                { nom_poi: { $regex: search, $options: 'i' }},
                { texte_intro: { $regex: search, $options: 'i' }}
            ]
        });
        response.status(200).json({
            data: baladeItems
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default searchBalade;