const express = require('express')
const routes  = express.Router()

// READ
routes.get('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM materias", (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//CREATE
routes.post('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("INSERT INTO materias set ?",[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Materia agregada!')
        })
    })
})
//UPDATE
routes.put('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("UPDATE materias SET ? WHERE id=?",[req.body,req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Materia modificada!')
        })
    })
})

//DELETE
routes.delete('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("DELETE FROM materias WHERE id=?",[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Materia eliminada!')
        })
    })
})

module.exports = routes