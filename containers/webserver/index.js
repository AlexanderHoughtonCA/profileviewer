require('dotenv').config();
const { ethers } = require("hardhat");

const express = require('express');
const bodyParser = require('body-parser');

var { CONTRACT_ADDRESS, NETWORK } = process.env;
// console.log("CONTRACT_ADDRESS: ", CONTRACT_ADDRESS);

process.env.NODE_ENV = 'production';
process.env.IN_DEVELOPMENT = true;

const PORT = 8931;

// Set up the express server
var cors = require('cors');
const express_app = express();

express_app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET');    
    next();
});

express_app.use(express.urlencoded({limit: '50mb', extended: false}));
express_app.use(express.json());

express_app.get('/', async(req, res)=>{
    try{
        const contractAddress = CONTRACT_ADDRESS;
        const ProfileViewer = await ethers.getContractFactory("ProfileViewer");
        const contract = await ProfileViewer.attach(contractAddress);

        const link = await contract.message();
        console.log("Stored link:", link);

        var html = "<a href=\"" + link + "\">GitHub</a>";
        const json = {
            network: NETWORK,
            explorer: 'https://sepolia.etherscan.io/address/'+contractAddress,
            link,
            contractAddress
         };

        res.json(json);
    }
    catch(error){

    }
});

express_app.listen(PORT, () =>
{
    console.log(`server running on port ${PORT}`)
});
  

