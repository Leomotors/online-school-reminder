const dotenv = require("dotenv");
dotenv.config();

const { exec } = require("child_process");

exec(`rm -rf ${process.env.INSTALL_LOC || "dist"}/*`);
