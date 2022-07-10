const router = require('express')
const route = router.Router();
const {createHouse, getAllHouses, getSearchedHouses, interested, getSingleHouse} = require('../controllers/House')
const { getSearchPageHouses, populateLocalities, getHousedetails } = require('../controllers/SearchHouse');
const {isAuthedUser} = require ('../middleware/Auth')

route.route('/createHouse').post(isAuthedUser, createHouse);
route.route('/allHouses').get(getAllHouses);
route.route('/getSingleHouse/:id').get(getSingleHouse);

route.route('/interested/:id').put(isAuthedUser, interested)

route.route('/searchedHouses/:searchurl').get(getSearchedHouses);
// route.route('/allLocalities/:searchurl').get(getAllLocalities);



// ------search page

route.route('/searchPage/:searchurl').get(getSearchPageHouses);
route.route('/searchPage/getLocalities/:searchurl').get(populateLocalities);

route.route('/searchPage/houseDetails/:id').get(getHousedetails);
module.exports = route;