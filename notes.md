### Deploying on Heroku
## Deploy to Heroku with PostgreSQL
​
- new app
- connect it to GitHub
- /hobbits hast seeded data
- `Resources` > postgres > provision
- commit 'add tests' > should deploy
- refresh app, should still work
​
Time to add postgres configuration for the database
​
- change knexfile
- add 'pg' package
- show settings > reveal config files DATABASE_URL
- commit and push 'adds production db config'
- deployed, **still reading the development database**
- open dbConfig, we use DB_ENV
- **add this environment variable to heroku**
- fails because **hobbits table does not exist in heroku**.
​
### Run Migrations On Heroku
​
```sh
npx heroku run knex migrate:latest -a appname
npx heroku run knex seed:run -a appname
```
​
change DB_ENV to be development and switch it back to show the effect
​
make sure the 'id' is added as a second argument to the `.insert()` method inside hobbitsModel.js
​
`const [id] = await db('hobbits').insert(hobbit, 'id');