const pdfGeneratorModel = require("../models/pdfGeneratorModel");
const fs = require("fs");
const PDFDocument = require("pdfkit-table");

let outerFunc = {
  createDetails: async (req, res) => {
    try {
      let pdfDbDetails = await pdfGeneratorModel.create(req.body);
      return res.status(200).send({
        status: true,
        message: "Details created successfully!",
        data: pdfDbDetails,
      });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  },
  generatePdf: async (req, res) => {
    try {
      let doc = new PDFDocument({ margin: 30, size: "A4" });

      doc.pipe(fs.createWriteStream("../document.pdf"));
      let pdfDbDetails = await pdfGeneratorModel
        .find()
        .select({ _id: 0, __v: 0 });
      const result = pdfDbDetails.map((value) => Object.values(value)[2]);
      let keyValues = result.map((key) => Object.keys(key));
      let headings = keyValues[0];
      let detailValues = result.map((value) => Object.values(value));

      const tableJson = {
        headers: headings,
        rows: detailValues,
        options: {
          height:300,
          width: 500,
          padding: 5
        },
      };

      doc.table(tableJson);

      doc.end();
      return res.status(200).send({
        status: true,
        message: "Pdf created successfully!",
      });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  },
};

module.exports = outerFunc;
