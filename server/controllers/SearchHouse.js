const House = require('../models/House')
//for search page

//get all searchedHouses

exports.getSearchPageHouses = async (req, res) => {
    try {
       let at = req.query.at;
       let ct = req.query.city;
       let loc = req.query.loc.toString();
       
       if(typeof(loc) === "undefined")
       {
           loc = ""
       }
       let locList = loc.split(' ');
       var regexList = []
        for(var i=0; i<locList.length; ++i)
        {
            let regex = new RegExp(`^${locList[i]}`, "i");
            regexList.push(regex)
        }
       const searchPageHouses = await House.find({
        "agreementType": at, "city": ct, "locality": { $in : regexList}
       })


       res.status(200).json({searchPageHouses})
    } catch (error) {
        console.log(error)
        res.status(500).json({err: "500 error"}) 
    }
}


exports.populateLocalities = async (req, res) => {
    try {
       let ct = req.query.city.toString();
       let regex = new RegExp(`^${ct}$`, "i");
       const populatedLocalities = await House.find(
        { city: regex }, {locality : 1}
       )
    let nonUniqueLoc = []
    for(var i =0; i<populatedLocalities.length; ++i)
    {
        nonUniqueLoc.push(populatedLocalities[i].locality)
    }
    let uniqueLoc = [ ...new Set(nonUniqueLoc) ]

    //react-select format
    var uniqueLocList = []
    for(var j =0; j<uniqueLoc.length; j++)
    {
        uniqueLocList.push({value: uniqueLoc[j], label: uniqueLoc[j]})
    }

       res.status(200).json({uniqueLocList})
    } catch (error) {
        res.status(500).json({err: "500 error"}) 
    }
}


exports.getHousedetails = async (req, res) => {
    try {
        const h_id = req.params.id;
        const selectedHouse = await House.findById(h_id);
        if(!selectedHouse)
            return res.status(404).json({message:"House not found! "})
        
            res.status(200).json({selectedHouse})
    } catch (error) {
        console.log(error)
        res.status(500).json({err: "500 error"}) 
    }
}

