import baladeSchema from '../model/balade.js';


const addBalade = async (request, response) => {
    try {
        const { nom_poi, adresse, categorie } = request.body;
        
        if (!nom_poi || !adresse || !categorie) {
            return response.status(400).json({
                message: 'nom_poi, adresse et categorie sont requis'
            });
        }

        const newBalade = new baladeSchema({
            nom_poi,
            adresse,
            categorie
        });

        const savedBalade = await newBalade.save();

        response.status(201).json({
            message: 'Balade ajoutée',
            data: savedBalade
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default addBalade;
