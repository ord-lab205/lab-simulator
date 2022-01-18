const router = require("express").Router();
const service_sse = require("../services/sse");

router.get("/sse", service_sse);

module.exports = router;
