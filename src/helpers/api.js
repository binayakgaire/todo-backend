function checkObjectIdValid(id) {
    if (ObjectID.isValid(id)) {
      if (new ObjectID(id) === id) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  
  module.exports.checkObjectIdValid = checkObjectIdValid;