/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

cb();


  // Emoji.create([{
  //   text: '=)'
  // }, {
  //   text: '=()'
  // }, {
  //   text: ';p'
  // },]).exec(function theFuture (err, result){
  //   if (err){
  //     //handle it
  //     console.log('it did NOT WORK OMG', err);
  //     cb(err);
  //   }
  //   else{
  //     //handle the success case
  //
  //     // It's very important to trigger this callback method when you are finished
  //    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  //    console.log("it worked");
  //    cb();
  //   }
  // });

};
