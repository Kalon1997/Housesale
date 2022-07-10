const House = require('../models/House')
const User = require('../models/User')
exports.createHouse = async (req, res) => {
    try {
        const {agreementType, city, locality, imgs, pinCode, price } = req.body;
        if(!agreementType || !city || !locality ||!pinCode ||!price)
        {
            res.status(400).json({messgae: "Fill all the fields"});
        }
        const h = await House.create({agreementType, city, locality, imgs, pinCode, price,
            createdBy: req.session.user._id});

        res.status(200).json({h, messgae: "new House Added"});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}

exports.getAllHouses = async (req, res) => {
    try {
        const allHouses = await House.find();
        if(!allHouses)
            res.status(400).json({err: "houses not found"});
        else    
            res.status(200).json({allHouses})
    } catch (error) {
        res.status(500).json({err: "500 error"})  
    }
}

exports.getSearchedHouses = async (req, res) => {
    try {
       let at = req.query.at;
       let ct = req.query.city;
       let loc = req.query.loc;
       if(typeof(loc) === "undefined")
       {
           loc = ""
       }
       let regex = new RegExp(`^${loc}`, "i");
       const searchedHomes = await House.find({
        //    "agreementType": at, "city": ct, "locality": /["^",loc,"$"]/i
        "agreementType": at, "city": ct, "locality": regex
       })

       const localities = await House.find(
        {agreementType: at, city: ct}, { locality : 1 }
     )
       res.status(200).json({searchedHomes, localities})
    } catch (error) {
        res.status(500).json({err: "500 error"}) 
    }
}

exports.interested =  async (req, res) => {
    try {
        var interestedHouse = await House.findById(req.params.id)
        var userWhoClicked = await User.findById(req.session.user._id)
        var userHouseAdder = await User.findById(interestedHouse.createdBy)
        //--if no h found
        if(!interestedHouse)
        {
           return res.status(400).json({err: "Interested House not found"})
        }

        //done with house
        //if userWhoClicked already exists
        if(interestedHouse.interestedPeopleList.includes(userWhoClicked._id))
        {
            //remove it
            interestedHouse.interestedPeopleList.splice(interestedHouse.interestedPeopleList.indexOf(userWhoClicked._id), 1);
            userWhoClicked.myInterestList.splice(userWhoClicked.myInterestList.indexOf(req.params.id),1)
            // const note1 = `You are removed from interest list of the house with id ${interestedHouse._id } `;
            userWhoClicked.myNotifications.unshift(`You are removed from interest list of the house with id ${interestedHouse._id } `);
            // const note2 = `User ${userWhoClicked._id} is no longer interested for your house with id ${interestedHouse._id} `;
            userHouseAdder.myNotifications.unshift(`User ${userWhoClicked._id} is no longer interested for your house with id ${interestedHouse._id} `)
        }
        else
        {
            //add interest
            interestedHouse.interestedPeopleList.unshift(userWhoClicked._id);
            userWhoClicked.myInterestList.unshift(req.params.id)
            // const note3 = `You are interested in the house with id ${interestedHouse._id } `;
            userWhoClicked.myNotifications.unshift(`You are interested in the house with id ${interestedHouse._id } `);
            // const note4 = `Your house ${interestedHouse._id} seems interesting for user with id ${userWhoClicked._id} `;
            userHouseAdder.myNotifications.unshift(`Your house ${interestedHouse._id} seems interesting for user with id ${userWhoClicked._id} `)
        }
        await interestedHouse.save();
        await userWhoClicked.save();
        await userHouseAdder.save();

        
        res.status(200).json({interestedHouse, userWhoClicked, userHouseAdder})


    } catch (error) {
        console.log(error)
        res.status(500).json({err: "500 error"})
    }
}


exports.getSingleHouse = async (req, res) => {
    try {
        const singlehouse = await House.findById(req.params.id);
        if(!singlehouse)
            res.status(400).json({err: "house not found"});
        else    
            res.status(200).json({singlehouse})
    } catch (error) {
        res.status(500).json({err: "500 error"})  
    }
}


// exports.getAllLocalities = async (req, res) => {
//     try {
//         let at = req.query.at;
//         let ct = req.query.city;
//         const localities = await House.find(
//            {agreementType: at, city: ct}, { locality : 1 }
//         )
//         // const localities = await House.aggregate(
//         //     { $match : {"agreementType": at, "city": ct} },
//         //     { $group : { _id: "$_id", locArray: "$locality" } }
//         // )
//         res.status(200).json({localities})
//     } catch (error) {
//         res.status(500).json({err: "500 error"}) 
//     }
// }