const express = require("express");
const jeKer = require("../models/jeKer.js");
const Ping = require("../models/ping.js");

module.exports = {
    getAll: async (req, res, next) => {
        const allPings = await Ping.find({});
        res.status(200).json({ pings: allPings });
    },

    newPing: async (req, res, next) => {
        const { id } = req.body;
        console.log(id);

        try {
            const foundUser = await jeKer.findById(id);

            if (!foundUser) {
                return res.status(200).json({
                    error: {
                        message: "User not found.",
                    },
                });
            }

            const newPing = new Ping({
                doneBy: foundUser,
            });

            await newPing.save();
            res.status(200).json({});
        } catch (err) {
            console.log(err);
            res.status(500).json({ err });
        }
    },
};
