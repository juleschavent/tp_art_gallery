// Création des dépendences et connexion à la DB
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'gallery',
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})


//Req

//          Read

// Read de la liste oeuvres
app.get('/artList', (req, res) => {
    db.query(`SELECT * FROM art`,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

// Read des détails d'une oeuvre grâce à endpoint artdetails/:id
app.get('/artdetails/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM art
            WHERE id_art = ?`, id,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})
//          Read fin

//          Insert

app.put('/createart', (req, res) => {
    const artName = req.body.artName
    const artAuth = req.body.artAuth
    const artDesc = req.body.artDesc
    const artImage = req.body.artImage
    db.query(`INSERT INTO art (name_art, auth_art, desc_art, image_art)
        VALUES (?,?,?,?)`, [artName, artAuth, artDesc, artImage]
        , (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result);
            }
        })
})

//          Insert fin

//          Update

app.put('/updatabid', (req, res) => {
    const id = req.body.id
    const currBid = req.body.currBid
    const currBuyer = req.body.currBuyer

    db.query(`UPDATE art SET currbid_art = ?, currbuyer_art = ? WHERE id_art = ?`,
        [currBid, currBuyer, id], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result);
            }
        })
})

//          Update fin