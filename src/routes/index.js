const express = require('express');

const routerController = require('../controller/routerController')

const router = express.Router();

router.get('/',  await routerController._fn_residenceArea(req, res));
router.get('/bridge',  await routerController._fn_bridge(req, res));
router.get('/tunnel',  await routerController._fn_tunnel(req, res));
router.get('/animals', await routerController._fn_animals(req, res));

module.exports = router;