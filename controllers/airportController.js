/* const sequelize = require('sequelize');
const database = require('../config/database'); */
const Airport = require('../models/Airport');

const controller = {};

controller.getAirports = async function (callback){
    try {
        let response = await Airport.findAll({
            where: {
                activo: 1
            }
        });
        let airports = response.map(result => result.dataValues);
        console.log(airports);
        callback(airports, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.getAirportsUpdate = async function (id, callback){
    try {
        let response = await Airport.findAll({
            where: {
                activo: 1,
                codigoIATA: id
            }
        });
        let airportsUpdate = response.map(result => result.dataValues);
        console.log(airportsUpdate);
        callback(airportsUpdate, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.deleteAirport = async function (codigoIATA, callback) {
    try {
        let response = await Airport.update({
            activo: 0
        }, {
            where: {
                codigoIATA
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.createAirport = async function (data, callback) {
    try {
        let response = await Airport.create({
            codigoIATA: data.codigoIATA,
            ciudad: data.ciudad,
            pais: data.pais
        });
        // code goes here
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.updateAirport = async function (data, codigoIATA, callback) {
    try {
        let response = await Airport.update({
            codigoIATA: data.codigoIATA,
            ciudad: data.ciudad,
            pais: data.pais
        },{
            where:{
                codigoIATA
            } 
        });
        // code goes here
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;