const router = require('express').Router()
const Pokemon = require('./pokemonModel.js');
const { restrict } = require('../users/authMiddleware.js');

router.get('/', restrict, (req, res) => {
    Pokemon.getPokemon().then(pokemon => {
        res.status(200).json(pokemon)
    }).catch(error => {
        res.status(500).json(error)
    })
})


module.exports = router;