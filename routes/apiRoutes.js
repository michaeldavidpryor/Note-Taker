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
            console.log('saved')
        });
        res.json(dB);
    });


    app.delete('/api/notes:id', (req, res) => {
        let nID = req.params.id, aNotes = JSON.parse(dB), anNotes = aNotes.filter(note => note.id !== nID)

        fs.readFile('./db/db.json', (err) => {
            if (err) throw err;

            fs.writeFile('./db/db.json', JSON.stringify(anNotes, null, 2), err => {
                if (err) throw err;
                res.json(dB)
                console.log('deleted')
            });
        });
    });
};
