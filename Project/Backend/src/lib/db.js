const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

async function getDBHandler(){
    try{
        const dbHandler = await open({
            filename: "db.sqlite", //Nuestro archivo de base de datos.
            driver: sqlite3.Database,
        });

        if(!dbHandler) throw new TypeError(`Db Handler expected got ${dbHandler}`);

        return dbHandler
    }catch (error){
        console.error('There was error, error: ', error.message);
    }

}

//Inicializar nuestra base de datos para crear las tablas correspondientes.
async function initializeDB(){
    try{
        const dbHandler = await getDBHandler();

        //Crear tabla en la base de datos
        await dbHandler.exec(`
            CREATE TABLE IF NOT EXISTS todo (
                id INTEGER PRIMARY KEY,
                title TEXT,
                description TEXT,
                priority INTEGER,
                creation_date TEXT,
                edition_date TEXT DEFAULT ' ',
                is_done INTEGER DEFAULT 0
            )
        `);

        await dbHandler.close(); 

    } catch(error){
        console.error('There was error intialize, error: ', error.message);
    }
}

module.exports = { getDBHandler, initializeDB};




