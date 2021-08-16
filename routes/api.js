const router = require("express").Router();

const apiShippingRouter = require("./api/shippings");

router.use("/shippings", apiShippingRouter);

module.exports = router;
