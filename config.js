
const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://zirei:<pasword>*@cluster0.uf6mm.mongodb.net/cluster0?retryWrites=true&w=majority',
    port: process.env.PORT || 3001,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;