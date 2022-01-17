// import your controllers
const TemplateSeeder = require('./../../../../controllers/EmailTemplate/seed.js')
const seedData = async () => {
    // write each query which you want to seed
    return new Promise( async (resolve, reject) => {
        try {
            await TemplateSeeder.seedTemplates();
            resolve({});
        } catch (error) {
            reject(error);        
        }
    })
}
module.exports = seedData;