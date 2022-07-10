
const User = require('../models/User.js')

exports.isAuthedUser = async (req, res, next) => {
    
        try { 

          if(req.session.isAuth === true) {
            next();
          }
      else
      {

        return res.status(401).json({
          message: "Please login first",
        });
      }
      
        } catch (err) {
          res.status(500).json({
            message: err.message,
          });
        }
      };
    
