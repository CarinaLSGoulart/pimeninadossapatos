const {check} = require('express-valitor');

let validateRegister = [check('name')]

let user = req.query.user;
/* 
401 status de não autorizado */