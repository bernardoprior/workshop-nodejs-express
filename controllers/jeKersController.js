const express = require("express");
const jeKer = require("../models/jeKer.js");

module.exports = {
    getAll: async (req, res, next) => {
        //O QUE QUEREMOS AQUI É SACAR TODOS OS DOCS DA BASE DE DADOS COM MODELO == jeKers

        const allJeKers = await jeKer.find({});
        res.status(200).json({ jeKers: allJeKers });
    },

    createJeKer: async (req, res, next) => {
        // ADICIONAR UM NOVO JEKER
        const { name, age, deparment } = req.body;

        try {
            const newJeKer = new jeKer({
                name,
                age,
                deparment,
            });

            await newJeKer.save();

            res.status(200).json({ error: null });
        } catch (err) {
            console.log(err);
            res.status(200).json({ err });
        }
    },
};
