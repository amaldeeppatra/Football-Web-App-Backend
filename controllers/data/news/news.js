const multer = require('multer');
const XLSX = require('xlsx');
const fs = require('fs');
const News = require('../../../models/data/news');

// Function to process the uploaded Excel file and update the news data
async function newsData(req, res) {
    try {
        // Read the Excel file
        const workbook = XLSX.readFile(req.file.path);
        const sheet_name_list = workbook.SheetNames;
        const sheet = workbook.Sheets[sheet_name_list[0]];
        const data = XLSX.utils.sheet_to_json(sheet);
        
        // Validate and process data, limiting to 16 records
        const newsData = data.slice(0, 16).map(item => ({
            title: item.title,
            content: item.content,
            imgUrl: item.imgUrl
        }));

        // Clear the existing news records in the database
        await News.deleteMany({});

        // Insert the new records into the database
        await News.insertMany(newsData);

        // Respond with success
        res.status(200).send('File uploaded and data inserted successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while uploading the file.');
    }
}

module.exports = { newsData };