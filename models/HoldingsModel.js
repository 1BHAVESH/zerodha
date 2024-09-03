const {model} = require("mongoose");

const {HoldingsSchemas} = require("../schemas/HoldingSchema");

const HoldingsModel = new model("holding", HoldingsSchemas);

module.exports  = {HoldingsModel};