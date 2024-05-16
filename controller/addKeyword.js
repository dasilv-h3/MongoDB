import baladeSchema from '../model/balade.js';
import { isValidObjectId } from 'mongoose';

const addKeyword = async (request, response) => {
    try {
        const { id } = request.params;
        const { mot_cle } = request.body;
        if (!isValidObjectId(id)) {
            return response.status(400).json({
                message: 'Id non valide'
            });
        }

        const rep = await baladeSchema.updateOne({_id: id}, {$addToSet: {mot_cle:mot_cle}});

        response.status(200).json({
            message: 'Mot clé ajouté avec succès', 
            data: rep
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({ 
            message: 'Internal server error' 
        });
    }
};

export default addKeyword;
