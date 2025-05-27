const dotenv = require("dotenv");
const {defineConfig} = require("drizzle-kit");

dotenv.config();

module.exports = defineConfig({
    out: "./drizzle",
<<<<<<< HEAD
    schema: "./src/db/schema.js",
=======
    schema: "./src/models/schema.js",
>>>>>>> cdd2863 (fix: drizzle, frontend api, backend)
    dialect: "postgresql",
    dbCredentials:{
        url: process.env.DATABASE_URL
    },
});