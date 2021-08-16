const getDistance = require("../utils/getDistance");

module.exports = {
  createShippingOrUpdateShipping: (req, res, next) => {
    const { origin_lat, origin_long, end_lat, end_long } = req.body;
    const distance = getDistance(origin_lat, origin_long, end_lat, end_long);

    console.log(distance);

    if (distance > 20) {
      res.json("El envio es mayor a 20 kms");
    } else {
      next();
    }
  },
};
