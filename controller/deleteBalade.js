import baladeSchema from '../model/balade.js';
import { isValidObjectId } from 'mongoose';

const deleteBalade = async (request, response) => {
    try {
        const { id } = request.params;

        if (!isValidObjectId(id)) {
            return response.status(400).json({
                message: 'ID non valide'
            });
        }

        const deletedBalade = await baladeSchema.findByIdAndDelete(id);

        if (!deletedBalade) {
            return response.status(404).json({
                message: 'Balade non trouvée'
            });
        }

        response.status(200).json({
            message: 'Balade supprimée'
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default deleteBalade;
