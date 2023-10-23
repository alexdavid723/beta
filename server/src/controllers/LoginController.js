const connection = require('../models/db')
const jwt = require('jsonwebtoken');
module.exports.login = (req, res) => {
    const {username,password}= req.body;
    //console.log(username);
    //console.log(password);
    const consult = 'SELECT * FROM usuarios WHERE username = ? AND password_hash = ?';
    try {
        connection.query(consult, [username, password], (err, result)=> {
            if(err){
                res.send(err);
            }
            if (result.length > 0 ){
                const token = jwt.sign({username}, "Stack", {
                    expiresIn: '20s'
                });
                res.send({token});

            }else{
                console.log('wrong user')
                res.send({message: 'worng user'})
            }
        })
    } catch (e) {
        
    }
}

 