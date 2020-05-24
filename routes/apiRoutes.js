let fs = require('fs'), {v4: uuidv4} = require('uuid'), dB = require('../db/db.json');


module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        res.json(dB);
    });


    app.post('/api/notes', function (req, res) {
        const note = req.body;
        const id = uuidv4()
        const title = note.title;
        const text = note.text;
        const nNote = {title, text, id}

        dB.push(nNote)

        fs.writeFile('./db/db.json', JSON.stringify(dB, null, 2), err => {
            if (err) throw err;

            alert('Note created successfully')
        });
        res.json(dB);
    });


    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if (err) throw err;
    //
    //     let aNotes = JSON.parse(data)
    //
    //     aNotes.push(nNote)'


    app.delete('/api/notes:id', (req, res) => {

        fs.readFile('./db/db.json', (err) => {
            if (err) throw err;

            let nID = req.params.id
            dB = dB.filter(function (note) {
                return note.id !== nID;
            });

            fs.writeFile('./db/db.json', JSON.stringify(dB, null, 2), err => {
                if (err) throw err;
                alert('note deleted')
            });
            res.json(dB)
        });
    });
};