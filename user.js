const { Schema, model } = require('mongoose')

const userModel = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Lockyboxticket: {
        type: Number,
        required: false,
        default: 0
    },
    Upgradeticket: {
        type: Number,
        required: false,
        default: 0
    },
    Specialupgradeticket: {
        type: Number,
        required: false,
        default: 0
    },
    Limitedupgradeticket: {
        type: Number,
        required: false,
        default: 0
    },
    Legendupgradeticket: {
        type: Number,
        required: false,
        default: 0
    },
    SpecialCardReinforcementTicket: {
        type: Number,
        required: false,
        default: 0
    },
    scrtpiece: {
        type: Number,
        required: false,
        default: 0
    },
    ConfirmationReinforcement: {
        type: Number,
        required: false,
        default: 0
    },
    ConfirmationReinforcementPiece: {
        type: Number,
        required: false,
        default: 0
    },
    AwakeningEnhancement: {
        type: Number,
        required: false,
        default: 0
    }
})
module.exports = model("user", userModel)