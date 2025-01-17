/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

// module.exports.bootstrap = async function () {
//   if ((await User.count()) > 0) {
//     return;
//   }

//   await User.createEach([
//     { email: "ry@example.com", name: "Ryan Dahl", password: "password" },
//     {
//       email: "rachael@example.com",
//       name: "Rachael Shaw",
//       password: "password",
//     },
//     // etc.
//   ]);
// };
module.exports.bootstrap = function() {
  const cron = require('node-cron')
  const cronConfig = sails.config.cron;

  for (const jobName in cronConfig) {
    const job = cronConfig[jobName].scheduleJob;
    job.start();
  }
}

