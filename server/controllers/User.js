const User = require('../models/User')

exports.registerUser = async (req, res) => { 
    try{
        const { username, email, password } = req.body;
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(!username || !email || !password){
          return res.status(400).json({message: "Fill the fields."})
        }
        if(!email.match(emailRegex)){
          return res.status(400).json({message: "Enter a valid email id"})
        }
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({message: "You already have an account."})
        }
        
        let uname = await User.findOne({username})
        if(uname){
          return res.status(400).json({message: "This username is already taken."})
        }
        
        user = await User.create({
            username, email, password
        })
            return res.status(200).json({
                success: true,
                user
            });
    } catch(err)
        {
            return res.status(400).json({message: "Some unknown err.."})
        }
}

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select("+password")

      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User does not exist",
        });
      }
  
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      }
  
      req.session.isAuth = true;
      req.session.user = user;

      res.status(200)

      .json({
        success: true,
        user,

      });
    
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


exports.logout = async (req, res) => {
    try {
      req.session.destroy();
      res.status(200)
    
        .json({
          success: true,
          message: "Logged out",
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

exports.myProfile = async (req, res) => {
            try {

              const user = await User.findById(req.session.user._id);

              if(!user){
                return res.status(400)
        .json({
          success: false,
          message: "login first",
        });
              }
              else
              {
                req.session.isAuth = true;
                res.status(200).json({
                  success: true,
                  user,
                  
                });
              }
             
            } catch (error) {
              res.status(500).json({
                success: false,
                message: error.message,
              });
            }
};

