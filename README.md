# Pokemon Go Build-Week

## Table of Contents

-Overview
-Tech Stack
-API Endpoints
-Credits

## Overview
This app allows users to login, look at all Pokemon in the database.  Logged in users can add/delete/edit Pokemon.  Based on the data displayed by the front-end, users are able to determine whether or not a Pokemon is worth catching.

## Tech Stack

```
1. Node.js
2. Express
3. PostgreSQL
4. Jest
5. BCryptJS
6. JWT
```

## API Endpoints

### Authentication

Method  |    Endpoint   |   Description
       |
| ------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
POST    |   /api/auth/register  |	Creates a user using the information sent inside the body of the request. The body should be username, password, and email.
POST    |   /api/auth/login |   Uses the credentials sent inside the body (username and password) returns userId and JSON Web Token(JWT)

### Pokemon

Method  |   Endpoint    |   Description
       |
| ------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
GET |   /api/pokemon    |   Displays all Pokemon obtained from a csv file at https://www.kaggle.com/abcsds/pokemongo. This endpoint is visible to all users, registered and logged in or not. The body should include PokemonNo, Name, Type1, Type2, MaxCP, MaxHP, ImageURL.
POST    |   /api/pokemon    |   Allows users that have registered and are logged in to add Pokemon to the database. (Checks JWT and id in headers)
PUT |   /api/pokemon/:id    |   Allows users that have registered and are logged in to edit Pokemon currently in the database. (Checks JWT and id in headers)
DELETE  |   /api/pokemon/:id    |   Allows users that have registered and are logged in to delete a Pokemon from database. (Checks JWT and id in headers)

###Users

Method  |   Endpoint    |   Description
       |
| ------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
GET |   /api/users  |   Displays a list of all users that have registered to the API. Displays userid, username, hashed password, email. 


## Credits
### Backend
Eric Fugleberg: https://github.com/efugleberg

### Frontend
Jason Aviles: https://github.com/Jason-Aviles
Quinton McNamee: https://github.com/QuintonMcNamee
Michael Baynon:  https://github.com/MichaelBaynon

### User Interface
Adan Rodriguez: https://github.com/AdanRodriguez
Michael Perry: https://github.com/pusheadmetal

### Data Science:
Daniel Calimayor-Montero: https://github.com/