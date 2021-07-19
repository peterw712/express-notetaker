//dependencies
const express = require('express')
const router = express.Router()
const fs = require('fs')

//show notes from db
router.get('/notes', function (req, res) {
    notesData = fs.readFileSync('./db/db.json', 'utf-8'),
    res.send(notesData);
    }
  );

//middleware route to add notes from db
router.post('/notes', (req, res) => {
  notesData = fs.readFileSync("./db/db.json", "utf8");
  console.log(notesData);

  // parse the data to get an array of objects
  newNotesData = JSON.parse(notesData);
  // set id of new notes
  req.body.id = newNotesData.length;
  // add the new note to the array of note objects
  newNotesData.push(req.body); 
  // stringify in order to write to file
  newNotesData = JSON.stringify(newNotesData);
  // writes the new note to file
  fs.writeFile("./db/db.json", newNotesData, "utf8", function(err) {
    if (err) throw err;
    res.json(notesData);
  });
  });

module.exports = router;