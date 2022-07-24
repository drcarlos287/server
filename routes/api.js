const express = require("express");

const router = express.Router();

const BlogPost = require("../model/blogPost");

const NftMarket = require("../model/nftMarketPlace");

const Customer = require("../model/customers");

const TopSixUser = require("../model/top6users");

const TopSixNft = require("../model/topsixnft");
const ActiveUsers = require("../model/activeuser");
const Staking = require("../model/staking");
const buynft = require("../model/buynft");
const order = require("../model/orders");
const notification = require("../model/notification");

// Routes

router.get("/", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

//get user nftbalance
router.get("/buynfts", (req, res) => {
  buynft
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

// top6 Users
router.get("/topsixusers", (req, res) => {
  TopSixUser.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

// get notification
router.get("/notification", (req, res) => {
  notification
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

// top6 Users
router.get("/activeusersection", (req, res) => {
  ActiveUsers.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

// top 6 nft
router.get("/topsixnfts", (req, res) => {
  TopSixNft.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

//post request
router.post("/save", (req, res) => {
  console.log("Body: ", req.body);

  //store the post request to our Database
  const data = req.body;

  const newBlogPost = new Customer(data);
  newBlogPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    } else {
      res.json({
        msg: "We received your data!!",
      });
    }
  });
});

//Submit Stake request
router.post("/staking", (req, res) => {
  console.log("Body: ", req.body);

  //store the post request to our Database
  const data = req.body;

  const saveStake = new Staking(data);
  saveStake.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    } else {
      res.json({
        msg: "We received your data!!",
      });
    }
  });
});

// sending bought Nfts to database
router.post("/buynft", (req, res) => {
  console.log("Body: ", req.body);

  //store the post request to our Database
  const data = req.body;

  const nftbuy = new buynft(data);
  nftbuy.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    } else {
      res.json({
        msg: "We received your data!!",
      });
    }
  });
});

// carring out user send orders
router.post("/orders", (req, res) => {
  console.log("Body: ", req.body);

  //store the post request to our Database
  const data = req.body;

  const nftbuy = new order(data);
  nftbuy.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    } else {
      res.json({
        msg: "We received your data!!",
      });
    }
  });
});

// writing the api to update user nft balance
router.put("/savenft", (req, res) => {
  console.log("Body: ", req.body);

  const data1 = req.body.data1;
  const data2 = req.body.data2;

  //store the post request to our Database

  const newUpdate = Customer.findOneAndUpdate(data1, data2);
  newUpdate.findOneAndUpdate((error) => {
    if (error) {
      console.log(error.message);
    } else {
      res.json({
        msg: "We received your data!!",
      });
    }
  });
});

// trying to delete an object this works
router.delete("/deleteobject", (req, res) => {
  console.log("Body: ", req.body);

  //store the post request to our Database
  const data = req.body;

  const newUpdate = Customer.findOneAndDelete(data);
  newUpdate.findOneAndDelete((error) => {
    if (error) {
      console.log(error.message);
    } else {
      res.json({
        msg: "We received your data!!",
      });
    }
  });
});

// trying to delete specific items
router.delete("/deleteobjectitems", (req, res) => {
  console.log("Body: ", req.body);

  //store the post request to our Database
  const data = req.body;

  const newUpdate = Customer.findOneAndReplace(data);
  newUpdate.findOneAndReplace((error) => {
    if (error) {
      console.log(error.message);
    } else {
      res.json({
        msg: "We received your data!!",
      });
    }
  });
});

// this is a sample logic to save user data into mongoDB
router.post("/newcustomer", (req, res) => {
  console.log("Body: ", req.body);

  //store the post request to our Database
  const data = req.body;

  const newCustomer = new Customer(data);
  newCustomer.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    } else {
      res.json({
        msg: "We received your data!!",
      });
    }
  });
});

// getiing saved data from the database
router.get("/nftmarket", (req, res) => {
  NftMarket.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

router.get("/Customer", (req, res) => {
  Customer.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

module.exports = router;
