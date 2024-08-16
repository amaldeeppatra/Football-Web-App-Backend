const multer = require('multer');
const XLSX = require('xlsx');
const fs = require('fs');
const Laliga = require('../../../models/data/league/laliga');


// Endpoint to upload and process the Excel file
async function laligaData(req, res){
  try {
    // Read and parse the uploaded Excel file
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    // Process and update the data
    for (const row of data) {
      const filter = { club: row.club }; // Filter by unique identifier
      const update = {
        rank: row.rank,
        img: row.img,
        mp: row.mp,
        wins: row.wins,
        draw: row.draw,
        losses: row.losses,
        gf: row.gf,
        ga: row.ga,
        gd: row.gd,
        pts: row.pts,
        streak: row.streak
      };
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      await Laliga.findOneAndUpdate(filter, update, options);
    }

    // Remove the uploaded file after processing
    fs.unlinkSync(req.file.path);

    res.status(200).send('Data processed and updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing the file');
  }
};

module.exports = {laligaData};