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
import updateBalade from '../controller/updateBalade.js';
import updateMany from '../controller/updateMany.js';
import deleteBalade from '../controller/deleteBalade.js';

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
router.put('/update-one/:id', updateBalade);
router.put('/update-many/:search', updateMany);
router.delete('/delete/:id', deleteBalade);

export default router;