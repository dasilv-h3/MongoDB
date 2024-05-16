import { Router } from 'express';
const router = Router();

import getAllBalade from '../controller/getAllBalade.js';
import getBalade from '../controller/getBalade.js';
import searchBalade from '../controller/searchBalade.js';
import getWebsite from '../controller/getWebsite.js';
import getKeyword from '../controller/getKeyword.js';
import publieAnne from '../controller/publieAnnee.js';
import getArrondissement from '../controller/getArrondissement.js';
import getSynthese from '../controller/getSynthese.js';
import getCategories from '../controller/getCategories.js';
import addBalade from '../controller/addBalade.js';
import addKeyword from '../controller/addKeyword.js';

router.get('/all', getAllBalade);
router.get('/id/:id', getBalade);
router.get('/search/:search', searchBalade);
router.get('/site-internet', getWebsite);
router.get('/mot-cle', getKeyword);
router.get('/publie/:annee', publieAnne);
router.get('/arrondissement/:num_arrondissement', getArrondissement);
router.get('/synthese', getSynthese);
router.get('/categories', getCategories);
router.post('/add', addBalade);
router.put('/add-mot_cle/:id', addKeyword);

export default router;