import * as express from 'express'

export let router = express.Router();

router.get('/', (req,res) => {
    res.render('index', {title: 'Express'})
});
