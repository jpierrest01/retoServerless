const Dynamo = require('../config/db/Dynamo');

test('Dynamo es DB', () => {
    expect(typeof Dynamo).toBe('object');
});

test('dynamo tiene una funcion Get y PUT ', () => {
    expect(typeof Dynamo.get).toBe('function');
    expect(typeof Dynamo.write).toBe('function');
});

const TableName = 'UserTable';
const data = { name: 'jeanpierre ST', age: '20' };

test('Dynamo insert', async () => {

    try {
        const res = await Dynamo.write(data, TableName);
        console.log('la res',res);
        expect(res).toBe(data);
    } catch (error) {
        console.log('Error', error);
    }

});

test('Dynamo lista Usuarios', async () => {
    try {
        const res = await Dynamo.get(data.Id, validTableName);
        expect(res).toEqual(data);
    } catch (error) {
        console.log('Error al traer la data', error);
    }
});