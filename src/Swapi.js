const vehiclesParse = require('./models/vehiclesModel');
const axios = require('axios');

const getVehicles = async (event) => {

    var vehicles = await axios.get('https://swapi.py4e.com/api/vehicles/');    
    var translate = vehiclesParse.vehiclesParse(vehicles.data);

    return {
        status: 200,
        body: JSON.stringify(translate),
    };
};

const getVehicle = async (event) => {

    const { id } = event.pathParameters;
    var vehicle = await axios.get(`https://swapi.py4e.com/api/vehicles/${id}`);
    var translate = vehiclesParse.vehiclesParse(vehicle.data);

    return {
        status: 200,
        body: JSON.stringify(translate),
    };
};




module.exports = {
    getVehicles,
    getVehicle,
};