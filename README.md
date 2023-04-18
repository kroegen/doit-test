# doit-test

```
This test is a full stack app made with vue2 + bulma + axios and express + mongoose.
A simple login form + validation + todo list with items stored in db on be side
```

## Project setup
```
npm install
```

### Edit config files (server/bin/config.json and .env)
```
mv server/bin/config.json.sample server/bin/config.json
mv .env.sample .env && cp .env .env.prod
```

### Add new user with script to login (example)
```
node server/bin/add_user.js --email=admin@mail.com --password=12345678 --name=Yevhenii --age=25 --info="Javascript Software Engineer"
```

### Compiles and minifies for production
```
npm run build
```

### Run server
```
npm run start
```

### See http://localhost:3000

## Compiles and hot-reloads for development
```
npm run serve (for front) + npm run start (for server) in other tab
```
