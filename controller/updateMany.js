import baladeSchema from '../model/balade.js';

const updateMany = async (request, response) => {
    try {
        const search = request.params.search;
        const { nom_poi } = request.body
        const updatedBalade = await baladeSchema.updateMany(
            { texte_description: { $regex: search, $options: 'i' }},
            { $set: { nom_poi: nom_poi }}
        );     
        response.status(200).json({
            message: 'Balade modifiée',
            data: updatedBalade
        });   
    } 
    catch (error) {
        return res.status(500).send();   
    } 
}

export default updateMany;