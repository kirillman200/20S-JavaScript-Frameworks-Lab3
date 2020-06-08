const { home, about, contact} = require('../controllers/PagesController');
const router = require('express').Router();
const PagesController  = require('../controllers/PagesController');

module.exports = router => {
 // router.get('/', home);
   router.get('/', home);
   
   router.get('/about', about);

   router.get('/contact', contact);
};