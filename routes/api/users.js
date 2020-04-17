const express = require('express');
const router = express.Router();
const db = require('sqlite-sync');


//route GET api/users
// GET all users

router.get('/', async (req, res) => {
    try {
        const users = await db.run(`SELECT 
                                        users.user_id, 
                                        first_name, 
                                        last_name, 
                                        email, 
                                        gender, 
                                        ip_address, 
                                        Sum(page_views) As total_pageviews,  
                                        Sum(clicks) As total_clicks 
                                    FROM users, stats  
                                    WHERE  users.user_id = stats.user_id 
                                    GROUP BY stats.user_id`);
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error')
    }
})


//GET api/users/:user_id
//GET profile by user_id
router.get('/:user_id', async (req, res) => {
    try {
        const user = await db.run(`SELECT 
                                    * 
                                FROM users 
                                WHERE  user_id = ${req.params.user_id}`);

        const dateClicks = await db.run(`SELECT 
                                            date As x, 
                                            clicks As y 
                                        FROM stats 
                                        WHERE user_id = ${req.params.user_id}`);

        const dateViews = await db.run(`SELECT 
                                            date As x, 
                                            page_views As y 
                                            FROM stats 
                                            WHERE user_id = ${req.params.user_id}`);
        
        res.json({user, dateClicks, dateViews});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error')
    }
})

module.exports = router;