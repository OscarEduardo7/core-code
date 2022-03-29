const { Router } = require("express");
const { getDBHandler } = require("../lib/db");

const RequestHandler = Router();

// Insert a new to-do in the table all
RequestHandler.post("/insert", async (req, res) => {
    try{
        const dbHandler = await getDBHandler();
        const { title, description, priority } = req.body;

        const creationTodoInfo = await dbHandler.run(`
            INSERT INTO todo (title, description, priority, creation_date)
            VALUES (
                '${title}',
                '${description}',
                ${priority},
                DATE('NOW')
            )
        `);

        dbHandler.close();

        res.status(200).send({
            status: {
                title,
                description,
                priority
            },
            creationTodoInfo
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            errorMesage: "An error occurred while creating the to-do",
            errorDetails: error,
        });
    }
});

//Get all to-does from the database
RequestHandler.get("/todos", async (req, res) => {
    try{
        const dbHandler = await getDBHandler();

        const listTodos = await dbHandler.all(`
            SELECT * FROM todo;
        `);

        if(!listTodos){
            res.status(404).send({ message: "To does not found."});
            next();
        }else{
            dbHandler.close();
            res.status(200).send({
                listTodos
            });            
        }
        
    }catch(error){
        console.log(error);
        res.status(500).send({
            errorMesage: "An error occurred while getting the data.",
            errorDetails: error,
        });
    }
});

// Edit a to-do in the database.
RequestHandler.patch("/edit/:id", async (req, res) => {
    try{
        const dbHandler = await getDBHandler();
        const { title, description, priority, is_done} = req.body;

        const updateInfo = await dbHandler.run(`
            UPDATE todo 
            SET 
            title = '${title}',
            description = '${description}', 
            priority = ${priority},
            edition_date = DATE('NOW'),
            is_done = ${is_done}
            WHERE id = ${req.params.id}
        `);

        dbHandler.close();

        res.status(200).send({
            status: {
                title,
                description,
                priority
            },
            updateInfo
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            errorMesage: "An error occurred while creating the to-do",
            errorDetails: error,
        });
    }
});

// Edit a Done to to-do in the database.
RequestHandler.patch("/editDone/:id", async (req, res) => {
    try{
        const dbHandler = await getDBHandler();
        const {is_done} = req.body;

        const updateInfo = await dbHandler.run(`
            UPDATE todo 
            SET 
            is_done = ${is_done}
            WHERE id = ${req.params.id}
        `);

        dbHandler.close();

        res.status(200).send({
            status: {
                "msg": "ss"
            }
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            errorMesage: "An error occurred while creating the to-do",
            errorDetails: error,
        });
    }
});

// Delete a to-do in the database.
RequestHandler.delete("/delete/:id", async (req, res) => {
    try{
        console.log(req.params.id);
        const dbHandler = await getDBHandler();
        const deleteInfo = await dbHandler.run(`
            DELETE FROM todo WHERE id = ${req.params.id}
        `);

        dbHandler.close();

        res.status(200).send({
            status: {
                msg: "Its done"
            },
            deleteInfo
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            errorMesage: "An error occurred while creating the to-do",
            errorDetails: error,
        });
    }
});

//Filter priority
RequestHandler.get("/filter/priority/:p", async (req, res) => {
    try{
        const dbHandler = await getDBHandler();

        const listTodos = await dbHandler.all(`
            SELECT * FROM todo WHERE priority = ${req.params.p};
        `);

        if(!listTodos){
            res.status(404).send({ message: "To does not found."});
            next();
        }else{
            dbHandler.close();
            res.status(200).send({
                listTodos
            });            
        }
        
    }catch(error){
        console.log(error);
        res.status(500).send({
            errorMesage: "An error occurred while getting the data.",
            errorDetails: error,
        });
    }
});

//Filter date
RequestHandler.get("/filter/date/:d", async (req, res) => {
    try{
        console.log(req.params.d);
        const dbHandler = await getDBHandler();
        const listTodos = await dbHandler.all(`
            SELECT * FROM todo WHERE creation_date = '${req.params.d}';
        `);

        if(!listTodos){
            res.status(404).send({ message: "To does not found."});
            next();
        }else{
            dbHandler.close();
            res.status(200).send({
                listTodos
            });            
        }
        
    }catch(error){
        console.log(error);
        res.status(500).send({
            errorMesage: "An error occurred while getting the data.",
            errorDetails: error,
        });
    }
});

module.exports = RequestHandler;
