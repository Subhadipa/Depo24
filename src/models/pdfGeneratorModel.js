const mongoose = require("mongoose");

let pdfGeneratorSchema = new mongoose.Schema({
  "#": {
    type: Number,
    required: true
  },
  "Line Item Name": {
    type: String,
    required: true
  },
  SKU: {
    type: String,
    required: true
  },
  "HSN/SAC": {
    type: String,
    required: true
  },
  "Qt(y)": {
    type: String,
    required: true
  },
  Rate: {
    type: String,
    required: true
  },
  Discount: {
    type: String,
    required: true
  },
  "CGST %": {
    type: String,
    required: true
  },
  "CGST Amt": {
    type: String,
    required: true
  },
  "SGST %": {
    type: String,
    required: true
  },
  "SGST Amt": {
    type: String,
    required: true
  },
  Amount: {
    type: String,
    required: true
  },
});
module.exports = mongoose.model("Pdf Details", pdfGeneratorSchema);
