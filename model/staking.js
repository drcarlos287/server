// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const StakingSchema = new Schema({
  btcStakeAmount: String,
  btcStakePlan: String,
  ethStakeAmount: String,
  ethStakePlan: String,
  ltcStakeAmount: String,
  ltcStakePlan: String,
  dogeStakeAmount: String,
  dogeStakePlan: String,
  user: String,
});

// Define Model
const Staking = mongoose.model("staking", StakingSchema);

module.exports = Staking;
