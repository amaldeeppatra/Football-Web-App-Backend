const multer = require('multer');
const XLSX = require('xlsx');
const fs = require('fs');
const RecentLaligaMatches = require('../../../../models/data/league/recentLaligamatches');

// Function to convert Excel date serial to a JavaScript Date object
function excelDateToJSDate(serial) {
  const utc_days = Math.floor(serial - 25569);
  const utc_value = utc_days * 86400;
  const date_info = new Date(utc_value * 1000);

  // Formatting the date to "dd-MMM-yyyy" (e.g., "19-May-2024")
  return date_info.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

// Endpoint to upload and process the Excel file

async function recentLaligaMatchesData(req, res) {
  try {
    // Log the file path to ensure it's being uploaded correctly
    console.log('Uploaded file path:', req.file.path);

    // Read and parse the uploaded Excel file
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    // Log the parsed data to ensure it's being read correctly
    console.log('Parsed Excel Data:', data);

    // Process and update the data
    for (const row of data) {
      let matchDate;

      // If date is a number, convert it from Excel serial format
      if (typeof row.date === 'number') {
        matchDate = excelDateToJSDate(row.date);
        console.log('Converted Date:', matchDate); // Log the converted date
      } else {
        // Assume it's already a formatted date string
        matchDate = row.date;
      }

      // Prepare filter and update objects
      const filter = { date: matchDate, teamName: row.teamName };
      const update = {
        teamLogo: row.teamLogo,
        teamName: row.teamName,
        score: row.score,
        opponentLogo: row.opponentLogo,
        opponentName: row.opponentName,
        opponentScore: row.opponentScore,
        date: matchDate,
      };
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      // Log the filter and update objects
      console.log('Filter:', filter);
      console.log('Update:', update);

      // Perform the database update
      const result = await RecentLaligaMatches.findOneAndUpdate(filter, update, options);
      console.log('Update Result:', result); // Log the result of the update
    }

    // Remove the uploaded file after processing
    fs.unlinkSync(req.file.path);

    res.status(200).send('Data processed and updated successfully');
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).send('An error occurred while processing the file');
  }
};

module.exports = { recentLaligaMatchesData };
