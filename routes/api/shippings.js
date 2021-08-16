const router = require("express").Router();

const shippingMiddleware = require("../../middleware/shippingMiddleware");

const shippingController = require("../../controller/shippingController");

router.post(
  "/",
  shippingMiddleware.createShippingOrUpdateShipping,
  shippingController.createShipping
);

router.get("/", shippingController.getAllShipping);

router.get("/:shipId", shippingController.gelByIdShipping);

router.put(
  "/:shipId",
  shippingMiddleware.createShippingOrUpdateShipping,
  shippingController.putShipping
);

router.delete("/:shipId", shippingController.deleteShipping);

module.exports = router;
