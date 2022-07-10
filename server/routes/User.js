const express = require('express')
const router = express.Router();
const { registerUser, login, logout, myProfile } = require('../controllers/User');
const { isAuthedUser } = require('../middleware/Auth')

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/logout').get(isAuthedUser, logout);
router.route('/myProfile').get(isAuthedUser, myProfile);


module.exports = router;