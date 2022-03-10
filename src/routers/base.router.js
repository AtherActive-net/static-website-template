const express = require('express');
const { redirect } = require('express/lib/response');

const router = express.router();

router.get('/', (req, res) => {
    res.render('./index.html');
})

module.exports = router;