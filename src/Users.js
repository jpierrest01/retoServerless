const Dynamo = require('../config/db/Dynamo');
const { v4 } = require('uuid');

// creamos funcion para traer todos los usuarios
const getUsers = async (event) => {
    const users = await Dynamo.getAll('UserTable').catch(err => {
        console.log('Se produjo un error al conectar a Dynamo',err );
        return{
            statusCode: 500,
            body : 'No se puedo procesar la solicitud',
        }
    });
    
    return {
        statusCode: 200,
        body: JSON.stringify(users),
    }
};

// creamos funcion para traer un usuario unico
const getUser = async (event) => {
    const { id } = event.pathParameters;
    const user = await Dynamo.get(id,'UserTable').catch(err => {
        console.log('Se produjo un error al conectar a Dynamo',err );
        return{
            statusCode: 500,
            body : 'No se puedo procesar la solicitud',
        }
    });
    
    return {
        statusCode: 200,
        body: JSON.stringify(user),
    }
};

// creamos funcion para insertar un nuevo usuario

const addUsers = async (event) => {
    const { name, age } = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();

    const paramsUser = {
        id,
        name,
        age,
        createdAt,
    };

    const createUsers = await Dynamo.write(paramsUser,'UserTable').catch(err => {
        console.log('Error:', err);
        return{
            statusCode: 500,
            body : 'No se puedo insertar el usuario',
        }
    });
    
    return {
        statusCode: 200,
        body: JSON.stringify(createUsers),
    }
};

module.exports = {
    getUsers,
    getUser,
    addUsers,
};