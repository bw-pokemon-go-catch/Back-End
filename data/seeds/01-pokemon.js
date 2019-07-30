exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("pokemon")
    .truncate()
    .then(function() {
      return knex("pokemon").insert([
        {
          PokemonNo: "001",
          Name: "Bulbasaur",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 1079,
          MaxHP: 83,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"
        },
        {
          PokemonNo: "002",
          Name: "Ivysaur",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 1643,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png"
        },
        {
          PokemonNo: "003",
          Name: "Venusaur",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 2598,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png"
        },
        {
          PokemonNo: "004",
          Name: "Charmander",
          Type1: "Fire",
          Type2: "",
          MaxCP: 962,
          MaxHP: 73,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"
        },
        {
          PokemonNo: "005",
          Name: "Charmeleon",
          Type1: "Fire",
          Type2: "",
          MaxCP: 1568,
          MaxHP: 103,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png"
        },
        {
          PokemonNo: "006",
          Name: "Charizard",
          Type1: "Fire",
          Type2: "Flying",
          MaxCP: 2620,
          MaxHP: 135,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png"
        },
        {
          PokemonNo: "007",
          Name: "Squirtle",
          Type1: "Water",
          Type2: "",
          MaxCP: 1015,
          MaxHP: 81,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"
        },
        {
          PokemonNo: "008",
          Name: "Wartortle",
          Type1: "Water",
          Type2: "",
          MaxCP: 1594,
          MaxHP: 105,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png"
        },
        {
          PokemonNo: "009",
          Name: "Blastoise",
          Type1: "Water",
          Type2: "",
          MaxCP: 2560,
          MaxHP: 137,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png"
        },
        {
          PokemonNo: "010",
          Name: "Caterpie",
          Type1: "Bug",
          Type2: "",
          MaxCP: 446,
          MaxHP: 83,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/5/5d/010Caterpie.png/250px-010Caterpie.png"
        },
        {
          PokemonNo: "011",
          Name: "Metapod",
          Type1: "Bug",
          Type2: "",
          MaxCP: 481,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/cd/011Metapod.png/250px-011Metapod.png"
        },
        {
          PokemonNo: "012",
          Name: "Butterfree",
          Type1: "Bug",
          Type2: "Flying",
          MaxCP: 1465,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/d1/012Butterfree.png/250px-012Butterfree.png"
        },
        {
          PokemonNo: "013",
          Name: "Weedle",
          Type1: "Bug",
          Type2: "Poison",
          MaxCP: 452,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/df/013Weedle.png/250px-013Weedle.png"
        },
        {
          PokemonNo: "014",
          Name: "Kakuna",
          Type1: "Bug",
          Type2: "Poison",
          MaxCP: 488,
          MaxHP: 83,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/f0/014Kakuna.png/250px-014Kakuna.png"
        },
        {
          PokemonNo: "015",
          Name: "Beedrill",
          Type1: "Bug",
          Type2: "Poison",
          MaxCP: 1450,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/6/61/015Beedrill.png/250px-015Beedrill.png"
        },
        {
          PokemonNo: "016",
          Name: "Pidgey",
          Type1: "Normal",
          Type2: "Flying",
          MaxCP: 684,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png"
        },
        {
          PokemonNo: "017",
          Name: "Pidgeotto",
          Type1: "Normal",
          Type2: "Flying",
          MaxCP: 1232,
          MaxHP: 111,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/7a/017Pidgeotto.png/250px-017Pidgeotto.png"
        },
        {
          PokemonNo: "018",
          Name: "Pidgeot",
          Type1: "Normal",
          Type2: "Flying",
          MaxCP: 2106,
          MaxHP: 143,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/5/57/018Pidgeot.png/250px-018Pidgeot.png"
        },
        {
          PokemonNo: "019",
          Name: "Rattata",
          Type1: "Normal",
          Type2: "",
          MaxCP: 585,
          MaxHP: 59,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/46/019Rattata.png/250px-019Rattata.png"
        },
        {
          PokemonNo: "020",
          Name: "Raticate",
          Type1: "Normal",
          Type2: "",
          MaxCP: 1454,
          MaxHP: 99,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/f4/020Raticate.png/250px-020Raticate.png"
        },
        {
          PokemonNo: "021",
          Name: "Spearow",
          Type1: "Normal",
          Type2: "Flying",
          MaxCP: 691,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/8b/021Spearow.png/250px-021Spearow.png"
        },
        {
          PokemonNo: "022",
          Name: "Fearow",
          Type1: "Normal",
          Type2: "Flying",
          MaxCP: 1758,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/a0/022Fearow.png/250px-022Fearow.png"
        },
        {
          PokemonNo: "023",
          Name: "Ekans",
          Type1: "Poison",
          Type2: "",
          MaxCP: 830,
          MaxHP: 67,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/fa/023Ekans.png/250px-023Ekans.png"
        },
        {
          PokemonNo: "024",
          Name: "Arbok",
          Type1: "Poison",
          Type2: "",
          MaxCP: 1779,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/cd/024Arbok.png/250px-024Arbok.png"
        },
        {
          PokemonNo: "025",
          Name: "Pikachu",
          Type1: "Electric",
          Type2: "",
          MaxCP: 894,
          MaxHP: 67,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"
        },
        {
          PokemonNo: "026",
          Name: "Raichu",
          Type1: "Electric",
          Type2: "",
          MaxCP: 2042,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png"
        },
        {
          PokemonNo: "027",
          Name: "Sandshrew",
          Type1: "Ground",
          Type2: "",
          MaxCP: 804,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/9e/027Sandshrew.png/250px-027Sandshrew.png"
        },
        {
          PokemonNo: "028",
          Name: "Sandslash",
          Type1: "Ground",
          Type2: "",
          MaxCP: 1823,
          MaxHP: 130,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/0b/028Sandslash.png/250px-028Sandslash.png"
        },
        {
          PokemonNo: "029",
          Name: "Nidoran♀",
          Type1: "Poison",
          Type2: "",
          MaxCP: 882,
          MaxHP: 99,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/81/029Nidoran.png/250px-029Nidoran.png"
        },
        {
          PokemonNo: "030",
          Name: "Nidorina",
          Type1: "Poison",
          Type2: "",
          MaxCP: 1414,
          MaxHP: 122,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/cd/030Nidorina.png/250px-030Nidorina.png"
        },
        {
          PokemonNo: "031",
          Name: "Nidoqueen",
          Type1: "Poison",
          Type2: "Ground",
          MaxCP: 2502,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/b/bf/031Nidoqueen.png/250px-031Nidoqueen.png"
        },
        {
          PokemonNo: "032",
          Name: "Nidoran♂",
          Type1: "Poison",
          Type2: "",
          MaxCP: 849,
          MaxHP: 84,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/4a/032Nidoran.png/250px-032Nidoran.png"
        },
        {
          PokemonNo: "033",
          Name: "Nidorino",
          Type1: "Poison",
          Type2: "",
          MaxCP: 1382,
          MaxHP: 108,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/9f/033Nidorino.png/250px-033Nidorino.png"
        },
        {
          PokemonNo: "034",
          Name: "Nidoking",
          Type1: "Poison",
          Type2: "Ground",
          MaxCP: 2492,
          MaxHP: 140,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/c6/034Nidoking.png/250px-034Nidoking.png"
        },
        {
          PokemonNo: "035",
          Name: "Clefairy",
          Type1: "Fairy",
          Type2: "",
          MaxCP: 1209,
          MaxHP: 122,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/f4/035Clefairy.png/250px-035Clefairy.png"
        },
        {
          PokemonNo: "036",
          Name: "Clefable",
          Type1: "Fairy",
          Type2: "",
          MaxCP: 2414,
          MaxHP: 162,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/a9/036Clefable.png/250px-036Clefable.png"
        },
        {
          PokemonNo: "037",
          Name: "Vulpix",
          Type1: "Fire",
          Type2: "",
          MaxCP: 837,
          MaxHP: 72,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/6/60/037Vulpix.png/250px-037Vulpix.png"
        },
        {
          PokemonNo: "038",
          Name: "Ninetales",
          Type1: "Fire",
          Type2: "",
          MaxCP: 2203,
          MaxHP: 127,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/05/038Ninetales.png/250px-038Ninetales.png"
        },
        {
          PokemonNo: "039",
          Name: "Jigglypuff",
          Type1: "Normal",
          Type2: "Fairy",
          MaxCP: 924,
          MaxHP: 194,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png"
        },
        {
          PokemonNo: "040",
          Name: "Wigglytuff",
          Type1: "Normal",
          Type2: "Fairy",
          MaxCP: 2192,
          MaxHP: 233,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/92/040Wigglytuff.png/250px-040Wigglytuff.png"
        },
        {
          PokemonNo: "041",
          Name: "Zubat",
          Type1: "Poison",
          Type2: "Flying",
          MaxCP: 647,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/da/041Zubat.png/250px-041Zubat.png"
        },
        {
          PokemonNo: "042",
          Name: "Golbat",
          Type1: "Poison",
          Type2: "Flying",
          MaxCP: 1935,
          MaxHP: 130,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/0c/042Golbat.png/250px-042Golbat.png"
        },
        {
          PokemonNo: "043",
          Name: "Oddish",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 1156,
          MaxHP: 83,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/43/043Oddish.png/250px-043Oddish.png"
        },
        {
          PokemonNo: "044",
          Name: "Gloom",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 1701,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/2/2a/044Gloom.png/250px-044Gloom.png"
        },
        {
          PokemonNo: "045",
          Name: "Vileplume",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 2510,
          MaxHP: 130,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/6/6a/045Vileplume.png/250px-045Vileplume.png"
        },
        {
          PokemonNo: "046",
          Name: "Paras",
          Type1: "Bug",
          Type2: "Grass",
          MaxCP: 923,
          MaxHP: 67,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/d4/046Paras.png/250px-046Paras.png"
        },
        {
          PokemonNo: "047",
          Name: "Parasect",
          Type1: "Bug",
          Type2: "Grass",
          MaxCP: 1759,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/80/047Parasect.png/250px-047Parasect.png"
        },
        {
          PokemonNo: "048",
          Name: "Venonat",
          Type1: "Bug",
          Type2: "Poison",
          MaxCP: 1036,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/ad/048Venonat.png/250px-048Venonat.png"
        },
        {
          PokemonNo: "049",
          Name: "Venomoth",
          Type1: "Bug",
          Type2: "Poison",
          MaxCP: 1903,
          MaxHP: 122,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/d3/049Venomoth.png/250px-049Venomoth.png"
        },
        {
          PokemonNo: "050",
          Name: "Diglett",
          Type1: "Ground",
          Type2: "",
          MaxCP: 460,
          MaxHP: 27,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/31/050Diglett.png/250px-050Diglett.png"
        },
        {
          PokemonNo: "051",
          Name: "Dugtrio",
          Type1: "Ground",
          Type2: "",
          MaxCP: 1176,
          MaxHP: 67,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/e/e5/051Dugtrio.png/250px-051Dugtrio.png"
        },
        {
          PokemonNo: "052",
          Name: "Meowth",
          Type1: "Normal",
          Type2: "",
          MaxCP: 761,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/d6/052Meowth.png/250px-052Meowth.png"
        },
        {
          PokemonNo: "053",
          Name: "Persian",
          Type1: "Normal",
          Type2: "",
          MaxCP: 1643,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/1/13/053Persian.png/250px-053Persian.png"
        },
        {
          PokemonNo: "054",
          Name: "Psyduck",
          Type1: "Water",
          Type2: "",
          MaxCP: 1117,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/5/53/054Psyduck.png/250px-054Psyduck.png"
        },
        {
          PokemonNo: "055",
          Name: "Golduck",
          Type1: "Water",
          Type2: "",
          MaxCP: 2403,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/fe/055Golduck.png/250px-055Golduck.png"
        },
        {
          PokemonNo: "056",
          Name: "Mankey",
          Type1: "Fighting",
          Type2: "",
          MaxCP: 884,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/41/056Mankey.png/250px-056Mankey.png"
        },
        {
          PokemonNo: "057",
          Name: "Primeape",
          Type1: "Fighting",
          Type2: "",
          MaxCP: 1877,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/9a/057Primeape.png/250px-057Primeape.png"
        },
        {
          PokemonNo: "058",
          Name: "Growlithe",
          Type1: "Fire",
          Type2: "",
          MaxCP: 1344,
          MaxHP: 99,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/3d/058Growlithe.png/250px-058Growlithe.png"
        },
        {
          PokemonNo: "059",
          Name: "Arcanine",
          Type1: "Fire",
          Type2: "",
          MaxCP: 3005,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/b/b8/059Arcanine.png/250px-059Arcanine.png"
        },
        {
          PokemonNo: "060",
          Name: "Poliwag",
          Type1: "Water",
          Type2: "",
          MaxCP: 801,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/49/060Poliwag.png/250px-060Poliwag.png"
        },
        {
          PokemonNo: "061",
          Name: "Poliwhirl",
          Type1: "Water",
          Type2: "",
          MaxCP: 1350,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/a9/061Poliwhirl.png/250px-061Poliwhirl.png"
        },
        {
          PokemonNo: "062",
          Name: "Poliwrath",
          Type1: "Water",
          Type2: "Fighting",
          MaxCP: 2523,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/2/2d/062Poliwrath.png/250px-062Poliwrath.png"
        },
        {
          PokemonNo: "063",
          Name: "Abra",
          Type1: "Psychic",
          Type2: "",
          MaxCP: 604,
          MaxHP: 51,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/6/62/063Abra.png/250px-063Abra.png"
        },
        {
          PokemonNo: "064",
          Name: "Kadabra",
          Type1: "Psychic",
          Type2: "",
          MaxCP: 1140,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/97/064Kadabra.png/250px-064Kadabra.png"
        },
        {
          PokemonNo: "065",
          Name: "Alakazam",
          Type1: "Psychic",
          Type2: "",
          MaxCP: 1826,
          MaxHP: 99,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/cc/065Alakazam.png/250px-065Alakazam.png"
        },
        {
          PokemonNo: "066",
          Name: "Machop",
          Type1: "Fighting",
          Type2: "",
          MaxCP: 1097,
          MaxHP: 122,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/85/066Machop.png/250px-066Machop.png"
        },
        {
          PokemonNo: "067",
          Name: "Machoke",
          Type1: "Fighting",
          Type2: "",
          MaxCP: 1773,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/8e/067Machoke.png/250px-067Machoke.png"
        },
        {
          PokemonNo: "068",
          Name: "Machamp",
          Type1: "Fighting",
          Type2: "",
          MaxCP: 2612,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/8f/068Machamp.png/250px-068Machamp.png"
        },
        {
          PokemonNo: "069",
          Name: "Bellsprout",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 1125,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/a2/069Bellsprout.png/250px-069Bellsprout.png"
        },
        {
          PokemonNo: "070",
          Name: "Weepinbell",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 1736,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/9f/070Weepinbell.png/250px-070Weepinbell.png"
        },
        {
          PokemonNo: "071",
          Name: "Victreebel",
          Type1: "Grass",
          Type2: "Poison",
          MaxCP: 2548,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/b/be/071Victreebel.png/250px-071Victreebel.png"
        },
        {
          PokemonNo: "072",
          Name: "Tentacool",
          Type1: "Water",
          Type2: "Poison",
          MaxCP: 911,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/4e/072Tentacool.png/250px-072Tentacool.png"
        },
        {
          PokemonNo: "073",
          Name: "Tentacruel",
          Type1: "Water",
          Type2: "Poison",
          MaxCP: 2236,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/f6/073Tentacruel.png/250px-073Tentacruel.png"
        },
        {
          PokemonNo: "074",
          Name: "Geodude",
          Type1: "Rock",
          Type2: "Ground",
          MaxCP: 855,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/98/074Geodude.png/250px-074Geodude.png"
        },
        {
          PokemonNo: "075",
          Name: "Graveler",
          Type1: "Rock",
          Type2: "Ground",
          MaxCP: 1443,
          MaxHP: 99,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/75/075Graveler.png/250px-075Graveler.png"
        },
        {
          PokemonNo: "076",
          Name: "Golem",
          Type1: "Rock",
          Type2: "Ground",
          MaxCP: 2319,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/f2/076Golem.png/250px-076Golem.png"
        },
        {
          PokemonNo: "077",
          Name: "Ponyta",
          Type1: "Fire",
          Type2: "",
          MaxCP: 1526,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/3b/077Ponyta.png/250px-077Ponyta.png"
        },
        {
          PokemonNo: "078",
          Name: "Rapidash",
          Type1: "Fire",
          Type2: "",
          MaxCP: 2215,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/3f/078Rapidash.png/250px-078Rapidash.png"
        },
        {
          PokemonNo: "079",
          Name: "Slowpoke",
          Type1: "Water",
          Type2: "Psychic",
          MaxCP: 1227,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/70/079Slowpoke.png/250px-079Slowpoke.png"
        },
        {
          PokemonNo: "080",
          Name: "Slowbro",
          Type1: "Water",
          Type2: "Psychic",
          MaxCP: 2615,
          MaxHP: 162,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/80/080Slowbro.png/250px-080Slowbro.png"
        },
        {
          PokemonNo: "081",
          Name: "Magnemite",
          Type1: "Electric",
          Type2: "Steel",
          MaxCP: 897,
          MaxHP: 51,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/6/6c/081Magnemite.png/250px-081Magnemite.png"
        },
        {
          PokemonNo: "082",
          Name: "Magneton",
          Type1: "Electric",
          Type2: "Steel",
          MaxCP: 1893,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/72/082Magneton.png/250px-082Magneton.png"
        },
        {
          PokemonNo: "083",
          Name: "Farfetch'd",
          Type1: "Normal",
          Type2: "Flying",
          MaxCP: 1272,
          MaxHP: 94,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/f8/083Farfetch'd.png/250px-083Farfetch'd.png"
        },
        {
          PokemonNo: "084",
          Name: "Doduo",
          Type1: "Normal",
          Type2: "Flying",
          MaxCP: 861,
          MaxHP: 67,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/5/54/084Doduo.png/250px-084Doduo.png"
        },
        {
          PokemonNo: "085",
          Name: "Dodrio",
          Type1: "Normal",
          Type2: "Flying",
          MaxCP: 1849,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/93/085Dodrio.png/250px-085Dodrio.png"
        },
        {
          PokemonNo: "086",
          Name: "Seel",
          Type1: "Water",
          Type2: "",
          MaxCP: 1114,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/1/1f/086Seel.png/250px-086Seel.png"
        },
        {
          PokemonNo: "087",
          Name: "Dewgong",
          Type1: "Water",
          Type2: "Ice",
          MaxCP: 2161,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/c7/087Dewgong.png/250px-087Dewgong.png"
        },
        {
          PokemonNo: "088",
          Name: "Grimer",
          Type1: "Poison",
          Type2: "",
          MaxCP: 1293,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/a0/088Grimer.png/250px-088Grimer.png"
        },
        {
          PokemonNo: "089",
          Name: "Muk",
          Type1: "Poison",
          Type2: "",
          MaxCP: 2621,
          MaxHP: 178,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/7c/089Muk.png/250px-089Muk.png"
        },
        {
          PokemonNo: "090",
          Name: "Shellder",
          Type1: "Water",
          Type2: "",
          MaxCP: 828,
          MaxHP: 59,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/40/090Shellder.png/250px-090Shellder.png"
        },
        {
          PokemonNo: "091",
          Name: "Cloyster",
          Type1: "Water",
          Type2: "Ice",
          MaxCP: 2067,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/1/1d/091Cloyster.png/250px-091Cloyster.png"
        },
        {
          PokemonNo: "092",
          Name: "Gastly",
          Type1: "Ghost",
          Type2: "Poison",
          MaxCP: 810,
          MaxHP: 59,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/ca/092Gastly.png/250px-092Gastly.png"
        },
        {
          PokemonNo: "093",
          Name: "Haunter",
          Type1: "Ghost",
          Type2: "Poison",
          MaxCP: 1390,
          MaxHP: 83,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/6/62/093Haunter.png/250px-093Haunter.png"
        },
        {
          PokemonNo: "094",
          Name: "Gengar",
          Type1: "Ghost",
          Type2: "Poison",
          MaxCP: 2093,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png"
        },
        {
          PokemonNo: "095",
          Name: "Onix",
          Type1: "Rock",
          Type2: "Ground",
          MaxCP: 863,
          MaxHP: 67,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/9a/095Onix.png/250px-095Onix.png"
        },
        {
          PokemonNo: "096",
          Name: "Drowzee",
          Type1: "Psychic",
          Type2: "",
          MaxCP: 1082,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/3e/096Drowzee.png/250px-096Drowzee.png"
        },
        {
          PokemonNo: "097",
          Name: "Hypno",
          Type1: "Psychic",
          Type2: "",
          MaxCP: 2199,
          MaxHP: 146,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/0a/097Hypno.png/250px-097Hypno.png"
        },
        {
          PokemonNo: "098",
          Name: "Krabby",
          Type1: "Water",
          Type2: "",
          MaxCP: 797,
          MaxHP: 59,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/a7/098Krabby.png/250px-098Krabby.png"
        },
        {
          PokemonNo: "099",
          Name: "Kingler",
          Type1: "Water",
          Type2: "",
          MaxCP: 1836,
          MaxHP: 99,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/71/099Kingler.png/250px-099Kingler.png"
        },
        {
          PokemonNo: 100,
          Name: "Voltorb",
          Type1: "Electric",
          Type2: "",
          MaxCP: 845,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/da/100Voltorb.png/250px-100Voltorb.png"
        },
        {
          PokemonNo: 101,
          Name: "Electrode",
          Type1: "Electric",
          Type2: "",
          MaxCP: 1657,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/84/101Electrode.png/250px-101Electrode.png"
        },
        {
          PokemonNo: 102,
          Name: "Exeggcute",
          Type1: "Grass",
          Type2: "Psychic",
          MaxCP: 1107,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/af/102Exeggcute.png/250px-102Exeggcute.png"
        },
        {
          PokemonNo: 103,
          Name: "Exeggutor",
          Type1: "Grass",
          Type2: "Psychic",
          MaxCP: 2976,
          MaxHP: 162,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/2/24/103Exeggutor.png/250px-103Exeggutor.png"
        },
        {
          PokemonNo: 104,
          Name: "Cubone",
          Type1: "Ground",
          Type2: "",
          MaxCP: 1013,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/2/2a/104Cubone.png/250px-104Cubone.png"
        },
        {
          PokemonNo: 105,
          Name: "Marowak",
          Type1: "Ground",
          Type2: "",
          MaxCP: 1668,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/98/105Marowak.png/250px-105Marowak.png"
        },
        {
          PokemonNo: 106,
          Name: "Hitmonlee",
          Type1: "Fighting",
          Type2: "",
          MaxCP: 1503,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/32/106Hitmonlee.png/250px-106Hitmonlee.png"
        },
        {
          PokemonNo: 107,
          Name: "Hitmonchan",
          Type1: "Fighting",
          Type2: "",
          MaxCP: 1527,
          MaxHP: 91,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/a3/107Hitmonchan.png/250px-107Hitmonchan.png"
        },
        {
          PokemonNo: 108,
          Name: "Lickitung",
          Type1: "Normal",
          Type2: "",
          MaxCP: 1638,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/00/108Lickitung.png/250px-108Lickitung.png"
        },
        {
          PokemonNo: 109,
          Name: "Koffing",
          Type1: "Poison",
          Type2: "",
          MaxCP: 1160,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/1/17/109Koffing.png/250px-109Koffing.png"
        },
        {
          PokemonNo: 110,
          Name: "Weezing",
          Type1: "Poison",
          Type2: "",
          MaxCP: 2266,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/42/110Weezing.png/250px-110Weezing.png"
        },
        {
          PokemonNo: 111,
          Name: "Rhyhorn",
          Type1: "Ground",
          Type2: "Rock",
          MaxCP: 1190,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/9b/111Rhyhorn.png/250px-111Rhyhorn.png"
        },
        {
          PokemonNo: 112,
          Name: "Rhydon",
          Type1: "Ground",
          Type2: "Rock",
          MaxCP: 2259,
          MaxHP: 178,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/47/112Rhydon.png/250px-112Rhydon.png"
        },
        {
          PokemonNo: 113,
          Name: "Chansey",
          Type1: "Normal",
          Type2: "",
          MaxCP: 679,
          MaxHP: 408,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/cd/113Chansey.png/250px-113Chansey.png"
        },
        {
          PokemonNo: 114,
          Name: "Tangela",
          Type1: "Grass",
          Type2: "",
          MaxCP: 1752,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/3e/114Tangela.png/250px-114Tangela.png"
        },
        {
          PokemonNo: 115,
          Name: "Kangaskhan",
          Type1: "Normal",
          Type2: "",
          MaxCP: 2057,
          MaxHP: 178,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/4e/115Kangaskhan.png/250px-115Kangaskhan.png"
        },
        {
          PokemonNo: 116,
          Name: "Horsea",
          Type1: "Water",
          Type2: "",
          MaxCP: 800,
          MaxHP: 59,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/5/5a/116Horsea.png/250px-116Horsea.png"
        },
        {
          PokemonNo: 117,
          Name: "Seadra",
          Type1: "Water",
          Type2: "",
          MaxCP: 1725,
          MaxHP: 99,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/2/26/117Seadra.png/250px-117Seadra.png"
        },
        {
          PokemonNo: 118,
          Name: "Goldeen",
          Type1: "Water",
          Type2: "",
          MaxCP: 972,
          MaxHP: 83,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/7b/118Goldeen.png/250px-118Goldeen.png"
        },
        {
          PokemonNo: 119,
          Name: "Seaking",
          Type1: "Water",
          Type2: "",
          MaxCP: 2058,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/6/6a/119Seaking.png/250px-119Seaking.png"
        },
        {
          PokemonNo: 120,
          Name: "Staryu",
          Type1: "Water",
          Type2: "",
          MaxCP: 944,
          MaxHP: 59,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/4f/120Staryu.png/250px-120Staryu.png"
        },
        {
          PokemonNo: 121,
          Name: "Starmie",
          Type1: "Water",
          Type2: "Psychic",
          MaxCP: 2197,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/cd/121Starmie.png/250px-121Starmie.png"
        },
        {
          PokemonNo: 122,
          Name: "Mr. Mime",
          Type1: "Psychic",
          Type2: "Fairy",
          MaxCP: 1505,
          MaxHP: 75,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/e/ec/122Mr._Mime.png/250px-122Mr._Mime.png"
        },
        {
          PokemonNo: 123,
          Name: "Scyther",
          Type1: "Bug",
          Type2: "Flying",
          MaxCP: 2088,
          MaxHP: 122,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/b/ba/123Scyther.png/250px-123Scyther.png"
        },
        {
          PokemonNo: 124,
          Name: "Jynx",
          Type1: "Ice",
          Type2: "Psychic",
          MaxCP: 1728,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/7c/124Jynx.png/250px-124Jynx.png"
        },
        {
          PokemonNo: 125,
          Name: "Electabuzz",
          Type1: "Electric",
          Type2: "",
          MaxCP: 2134,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/de/125Electabuzz.png/250px-125Electabuzz.png"
        },
        {
          PokemonNo: 126,
          Name: "Magmar",
          Type1: "Fire",
          Type2: "",
          MaxCP: 2281,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/8c/126Magmar.png/250px-126Magmar.png"
        },
        {
          PokemonNo: 127,
          Name: "Pinsir",
          Type1: "Bug",
          Type2: "",
          MaxCP: 2137,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/71/127Pinsir.png/250px-127Pinsir.png"
        },
        {
          PokemonNo: 128,
          Name: "Tauros",
          Type1: "Normal",
          Type2: "",
          MaxCP: 1857,
          MaxHP: 130,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/b/b8/128Tauros.png/250px-128Tauros.png"
        },
        {
          PokemonNo: 129,
          Name: "Magikarp",
          Type1: "Water",
          Type2: "",
          MaxCP: 264,
          MaxHP: 43,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png"
        },
        {
          PokemonNo: 130,
          Name: "Gyarados",
          Type1: "Water",
          Type2: "Flying",
          MaxCP: 2708,
          MaxHP: 162,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/41/130Gyarados.png/250px-130Gyarados.png"
        },
        {
          PokemonNo: 131,
          Name: "Lapras",
          Type1: "Water",
          Type2: "Ice",
          MaxCP: 3002,
          MaxHP: 218,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/a/ab/131Lapras.png/250px-131Lapras.png"
        },
        {
          PokemonNo: 132,
          Name: "Ditto",
          Type1: "Normal",
          Type2: "",
          MaxCP: 926,
          MaxHP: 88,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/3/36/132Ditto.png/250px-132Ditto.png"
        },
        {
          PokemonNo: 133,
          Name: "Eevee",
          Type1: "Normal",
          Type2: "",
          MaxCP: 1084,
          MaxHP: 99,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png"
        },
        {
          PokemonNo: 134,
          Name: "Vaporeon",
          Type1: "Water",
          Type2: "",
          MaxCP: 2836,
          MaxHP: 218,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/fd/134Vaporeon.png/250px-134Vaporeon.png"
        },
        {
          PokemonNo: 135,
          Name: "Jolteon",
          Type1: "Electric",
          Type2: "",
          MaxCP: 2155,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/b/bb/135Jolteon.png/250px-135Jolteon.png"
        },
        {
          PokemonNo: 136,
          Name: "Flareon",
          Type1: "Fire",
          Type2: "",
          MaxCP: 2662,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/d/dd/136Flareon.png/250px-136Flareon.png"
        },
        {
          PokemonNo: 137,
          Name: "Porygon",
          Type1: "Normal",
          Type2: "",
          MaxCP: 1703,
          MaxHP: 115,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/6/6b/137Porygon.png/250px-137Porygon.png"
        },
        {
          PokemonNo: 138,
          Name: "Omanyte",
          Type1: "Rock",
          Type2: "Water",
          MaxCP: 1127,
          MaxHP: 67,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/79/138Omanyte.png/250px-138Omanyte.png"
        },
        {
          PokemonNo: 139,
          Name: "Omastar",
          Type1: "Rock",
          Type2: "Water",
          MaxCP: 2249,
          MaxHP: 122,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/43/139Omastar.png/250px-139Omastar.png"
        },
        {
          PokemonNo: 140,
          Name: "Kabuto",
          Type1: "Rock",
          Type2: "Water",
          MaxCP: 1112,
          MaxHP: 59,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/f9/140Kabuto.png/250px-140Kabuto.png"
        },
        {
          PokemonNo: 141,
          Name: "Kabutops",
          Type1: "Rock",
          Type2: "Water",
          MaxCP: 2145,
          MaxHP: 107,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/2/29/141Kabutops.png/250px-141Kabutops.png"
        },
        {
          PokemonNo: 142,
          Name: "Aerodactyl",
          Type1: "Rock",
          Type2: "Flying",
          MaxCP: 2180,
          MaxHP: 138,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/e/e8/142Aerodactyl.png/250px-142Aerodactyl.png"
        },
        {
          PokemonNo: 143,
          Name: "Snorlax",
          Type1: "Normal",
          Type2: "",
          MaxCP: 3135,
          MaxHP: 265,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/250px-143Snorlax.png"
        },
        {
          PokemonNo: 144,
          Name: "Articuno",
          Type1: "Ice",
          Type2: "Flying",
          MaxCP: 2999,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png"
        },
        {
          PokemonNo: 145,
          Name: "Zapdos",
          Type1: "Electric",
          Type2: "Flying",
          MaxCP: 3136,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/250px-145Zapdos.png"
        },
        {
          PokemonNo: 146,
          Name: "Moltres",
          Type1: "Fire",
          Type2: "Flying",
          MaxCP: 3263,
          MaxHP: 154,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/250px-146Moltres.png"
        },
        {
          PokemonNo: 147,
          Name: "Dratini",
          Type1: "Dragon",
          Type2: "",
          MaxCP: 990,
          MaxHP: 76,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/c/cc/147Dratini.png/250px-147Dratini.png"
        },
        {
          PokemonNo: 148,
          Name: "Dragonair",
          Type1: "Dragon",
          Type2: "",
          MaxCP: 1760,
          MaxHP: 108,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/9/93/148Dragonair.png/250px-148Dragonair.png"
        },
        {
          PokemonNo: 149,
          Name: "Dragonite",
          Type1: "Dragon",
          Type2: "Flying",
          MaxCP: 3525,
          MaxHP: 156,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/8/8b/149Dragonite.png/250px-149Dragonite.png"
        },
        {
          PokemonNo: 150,
          Name: "Mewtwo",
          Type1: "Psychic",
          Type2: "",
          MaxCP: 4174,
          MaxHP: 180,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png"
        },
        {
          PokemonNo: 151,
          Name: "Mew",
          Type1: "Psychic",
          Type2: "",
          MaxCP: 3322,
          MaxHP: 170,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/b/b1/151Mew.png/250px-151Mew.png"
        }
      ]);
    });
};
