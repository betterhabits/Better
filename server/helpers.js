var Habit = require('../db/models').Habit;
var Instance = require('../db/models').Instance;
var Instances = require('../db/models').Instances;
var User = require('../db/models').User;

var getHabits = function (success, fail) {
  Habit.find({})
    .then(function (data) {
      success(data);
    })
    .catch(function (err) {
      fail(err);
    });
};

var addHabit = function (habit, success, fail) {
  Habit.create(habit)
    .then(function (data) {
      success(data);
    })
    .catch(function (err) {
      fail(err);
    });
};

var deleteHabit = function (id, success, fail) {
  Habit.findByIdAndRemove(id)
    .then(function (data) {
      success(data);
    })
    .catch(function (err) {
      fail(err);
    });
};

var updateHabit = function (habitid, habitDetails, success, fail) {
  // mongo stuff
  console.log('updating', habitid, 'with', habitDetails);
  // if mongo success
  success(habitDetails);
  // if mongo fail
  // fail(err);
};

module.exports = {
  updateHabit: updateHabit,
  addHabit: addHabit,
  deleteHabit: deleteHabit,
  getHabits: getHabits
};
