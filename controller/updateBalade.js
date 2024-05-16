import baladeSchema from '../model/balade.js';

const updateBalade = async (request, response) => {
    try {
        const id = request.params.id;
        const data = request.body;
        
        const updatedBalade = await baladeSchema.findByIdAndUpdate(id, data, {new: true});
        
        if (!updatedBalade) {
            return response.status(404).json({ message: 'Balade not found' });
        }
        response.status(200).json({
            message: 'Balade modifiée',
            data: updatedBalade
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default updateBalade;