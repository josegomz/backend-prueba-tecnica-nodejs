const express = require('express')
const routes  = express.Router()

// READ
routes.get('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM alumnos", (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//CREATE
routes.post('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("INSERT INTO alumnos set ?",[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Alumno agregado!')
        })
    })
})
//UPDATE
routes.put('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("UPDATE alumnos SET ? WHERE id=?",[req.body,req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Alumno modificado!')
        })
    })
})

//DELETE
routes.delete('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("DELETE FROM alumnos WHERE id=?",[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Alumno eliminado!')
        })
    })
})

module.exports = routes