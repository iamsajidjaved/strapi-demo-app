'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

// GET /hello
  find: async ctx => {
    ctx.send('Hello World!');
  },

  hello: async ctx => {
    ctx.send('Hello From hello Function!');
  },



};
