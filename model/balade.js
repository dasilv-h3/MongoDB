import { Schema  } from 'mongoose';
const Schema = Schema;

const baladeSchema = new Schema({
    identifiant: String,
    adresse: String,
    code_postal: String,
    parcours: [String],
    url_image: String,
    copyright_image: String,
    legende: String,
    categorie: String,
    nom_poi: String,
    date_saisie: Date,
    mot_cle: [String],
    ville: String,
    texte_intro: String,
    texte_description: String,
    url_site: String,
    fichier_image: {
        thumbnail: Boolean,
        filename: String,
        format: String,
        width: Number,
        mimetype: String,
        etag: String,
        id: String,
        last_synchronized: Date,
        color_summary: [String],
        height: Number
    },
    geo_shape: {
        type: String,
        geometry: {
            coordinates: [Number],
            type: String
        },
        properties: {}
    },
    geo_point_2d: {
        lon: Number,
        lat: Number
    }
});

module.exports = mongoose.model('balade', baladeSchema);