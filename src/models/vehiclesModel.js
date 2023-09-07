const vehiclesFieldsParse = {
    "cargo_capacity": "capacidad_de_carga",
    "consumables": "consumibles",
    "cost_in_credits": "costo_en_créditos",
    "created": "creado",
    "crew": "tripulación",
    "edited": "editado",
    "length": "longitud",
    "manufacturer": "fabricante",
    "max_atmosphering_speed": "velocidad_atmosférica_máxima",
    "model": "modelo",
    "name": "nombre",
    "passengers": "pasajeros",
    "pilots": "pilotos",
    "films": "peliculas",
    "url": "url"
};

const parsedResults = [];

const vehiclesParse = (vehicle) => {  
	let results = []; 
	
	if (vehicle.results != undefined) {
		 results = vehicle.results;
		 for (let i = 0; i < results.length; i++) {
			const parsedVehicle = {};
			const vehicle = results[i];
			for (const key in vehicle) {
			  const parseField = vehiclesFieldsParse[key];
			  parsedVehicle[parseField] = vehicle[key];
			}
			parsedResults.push(parsedVehicle);
		}
		let newvehicle = {...vehicle}
		newvehicle.results =parsedResults
		return newvehicle;

	}else{
		results = vehicle;
		return Object.keys(results).reduce((obj, field) => {
			const parse_field = vehiclesFieldsParse[field];
			obj[parse_field] = results[field];
			return obj;
		}, {});
	}
  };

exports.vehiclesParse = vehiclesParse;