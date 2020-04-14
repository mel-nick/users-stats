const express = require('express');
const router = express.Router();
const db = require('sqlite-sync');


//@route GET api/users
//@desc GET all users
//first_name, last_name, email, gender, ip_address => USERS TABLE;
// total_clicks, total_page_views => STATS TABLE

router.get('/', async (req, res) => {
    try {
        const users = await db.run(`SELECT first_name, last_name, email, gender, ip_address, Sum(page_views) As total_pageviews,  Sum(clicks) As total_clicks FROM users, stats  WHERE  users.user_id = stats.user_id GROUP BY stats.user_id`);
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error')
    }
})


//@route GET api/users/:user_id
//@desc GET profile by user_id
//@access public
router.get('/:user_id', async (req, res) => {
    try {
        const user = await db.run(`SELECT * FROM users WHERE  user_id = ${req.params.user_id}`);
        const data = await db.run(`SELECT date, page_views, clicks FROM stats WHERE user_id = ${req.params.user_id}`);
        res.json([user, data]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error')
    }
})

module.exports = router;