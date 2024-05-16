import baladeSchema from '../model/balade.js';

const publieAnne = async (request, response) => {
    try {
        const annee = request.params.annee;
        const debutAnnee = `${annee}-01-01`;
        const finAnnee = `${annee}-12-31`;
        const baladeItems = await baladeSchema.find({
            date_saisie: { $gte: debutAnnee, $lte: finAnnee }
        }).sort({ date_saisie: 1 });
        
        response.status(200).json({
            data: baladeItems
        });
    } catch (error) {
        response.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default publieAnne;