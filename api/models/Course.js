/**
 * Course.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type:'string',
      required:true,
    },
    duration:{
      type:'string',
      required:true,
    },
    fees:{
      type:'number',
      required:true,
    },
  },
  datastores:'mongodb',
};

