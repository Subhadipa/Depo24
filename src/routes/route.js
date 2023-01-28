const express = require("express");
const router = express.Router();

let pdfGenerator=require("../controller/pdfGenerator")

router.post("/createdetails",pdfGenerator.createDetails)
router.get("/pdf",pdfGenerator.generatePdf)





module.exports = router;