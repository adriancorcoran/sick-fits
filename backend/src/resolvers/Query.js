const Query = {
  dogs(parent, args, ctx, info) {
    // get all dogs
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};

module.exports = Query;
