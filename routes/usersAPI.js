const express = require('express');
const router = express.Router();
const authUser = require('../middleware/userAuth');
const users = require('../controllers/users');

// Display list of users from database
router.get('/users/:username',authUser,users.allUsers );

/*
// Display a user from database
router.get('/user/:username',authUser,function(req,res){
    Users.find({username: req.params.username}).then(function(user){
        res.send(user);
    }).catch((error) => console.log(error));
});
*/

//Add a user to the database
router.post('/signup',users.signUp);

// Update a password for a user
router.put('/users/:username',users.updatePassword);

// Login 
router.post('/login',users.login);

//Delete a user and all info from database by username
router.delete('/users/:admin',authUser,users.deleteUser);

//Get all of a users's info from all mappings
router.get('/usersinfo/:admin',authUser,users.allOfAUser);

module.exports = router;