const router = require("express").Router();
const Pokemon = require("./pokemonModel.js");
const { restrict } = require("../auth/authMiddleware.js");

router.get("/", restrict, (req, res) => {
  Pokemon.getPokemon()
    .then(pokemon => {
      res.status(200).json(pokemon);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", restrict, async (req, res) => {
  const { id } = req.params;

  try {
    const pokemon = await Pokemon.findById(id);
    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).json({ message: "Could not find pokemon with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get pokemon" });
  }
});

router.post("/", restrict, async (req, res) => {
  await Pokemon.insert(req.body)
    .then(pokemon => {
      res.status(201).json(pokemon);
    })
    .catch(err => {
      res.status(500).json({ message: "Pokemon could not be added" });
    });
});

router.delete("/:id", restrict, (req, res) => {
  const { id } = req.params;
  Pokemon.remove(id)
    .then(deleted => {
      res.status(204).json({ message: "Pokemon was successfully deleted" });
    })
    .catch(error => {
      res.status(500).json({ error: "Pokemon couldn't be deleted" });
    });
});

module.exports = router;
