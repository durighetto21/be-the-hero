const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index (request,response)  {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request,response){
    const {name, email, whatsapp, city, uf} = request.body;

    const id = generateUniqueId(); // gera 4 bytes de hexadecimal
    
    await connection('ongs').insert({  // await espera esse código finalizar para depois retornar
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
  
    return response.json({id});
    }
}