const ShippingModel = require("../models/shippings");

module.exports = {
  createShipping: async (req, res) => {
    const ship = await ShippingModel.create(req.body);
    res.json(ship);
  },

  getAllShipping: async (req, res) => {
    const shippings = await ShippingModel.findAll();

    res.json(shippings);
  },

  gelByIdShipping: async (req, res) => {
    const ship = await ShippingModel.findOne({
      where: { id: req.params.shipId },
    });

    res.json(ship);
  },

  putShipping: async (req, res) => {
    await ShippingModel.update(req.body, {
      where: { id: req.params.shipId },
    });
    res.json({ success: "Se ha modificado con exito" });
  },

  deleteShipping: async (req, res) => {
    await ShippingModel.destroy({
      where: { id: req.params.shipId },
    });
    res.json({ success: "Se ha borrado el envio" });
  },
};
