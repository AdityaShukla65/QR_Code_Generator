import inquirer from "inquirer";
import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const qr = require("qr-image");

console.log("Starting the script...");

inquirer.prompt([
        {
            type: "input",
            name: "url",
            message: "Enter the url please: "
        }
    ])
    .then((answers) => {
        const url=answers.url
        const qrCode=qr.image(url,{type:"png"})

        qrCode.pipe(fs.createWriteStream("qrcode.png"))
    });