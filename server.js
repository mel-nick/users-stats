const express = require('express');
const db = require('sqlite-sync');
const users = require('./users/users.json');
const stats = require('./users/users_statistic.json');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

//connect db
db.connect('./database/users.db');

// init Middleware
app.use(express.json({ extended: false }))

//define routes
app.use('/api/users', require('./routes/api/users'))

// serve statisc assets
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });

//app listen
app.listen(PORT, (req, res) => {
    console.log(`Server is listening on port: ${PORT}`)
})  

// setting table
const usersTable = `
    CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    gender TEXT NOT NULL,
    ip_address INTEGER NOT NULL
    );`

const usersStatsTable = `
    CREATE TABLE IF NOT EXISTS stats(
    id INTEGER PRIMARY KEY AUTOINCREMENT,     
    user_id INTEGER NOT NULL,
    date TEXT NOT NULL,
    page_views INTEGER,
    clicks INTEGER 
);`
// Connect USERS 
db.run(usersTable, function (res) {
    if (res.error)
        throw res.error;
    else console.log('db USERS is running')
});

//users table query
const usersQuery = user => db.insert("users", {
    user_id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    gender: user.gender,
    ip_address: user.ip_address
}, function (res) {
    if (res.error)
        throw res.error;
    // console.log(res);
});

const usersTableSQL = db.run("SELECT * FROM users")

if (usersTableSQL.length === 0) {
    users.forEach(user => {
        usersQuery(user)
    })
} else if (users.length > usersTableSQL.length) {
    users.slice(usersTableSQL.length, users.length).forEach(user => {
        usersQuery(user)
    })
}


//Connect STATS
db.run(usersStatsTable, function (res) {
    if (res.error)
        throw res.error;
    else console.log('db STATS is running')
});

//stats table query
const statsQuery = user => db.insert("stats", {
    user_id: user.user_id,
    date: user.date,
    page_views: user.page_views,
    clicks: user.clicks
}, function (res) {
    if (res.error)
        throw res.error;
    // console.log(res);
})

const statsTableSQL = db.run("SELECT * FROM stats");

if (statsTableSQL.length === 0) {
    stats.forEach(user => {
        statsQuery(user)        
    })
} else if (stats.length > statsTableSQL.length) {
    stats.slice(statsTableSQL.length, stats.length).forEach(user => {
        statsQuery(user)
    })
} 