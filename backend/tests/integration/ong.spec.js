const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback(); // para desfazer todas as migration e zerar banco
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs') // .set('Authorization','aa48056d') -> se precisar enviar Header insomnia
        .send({
            name: "ANA",
            email: "ana@gmail.com",
            whatsapp:"0997258870",
            city:"Pacaembu",
            uf:"SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});