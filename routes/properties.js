const Joi = require("joi");
const appHelper = require("../src/helpers");

module.exports = [
  {
    method: "GET",
    path: "/properties",
    options: {
      description: "Get All Properties",
      notes: "Returns all properties",
      tags: ["api", "Properties"],
    },
    handler: async (request, h) => {
      return await appHelper.GeneralErrorHandlerFn(async () => {
        const response = await appHelper.Get(`${appHelper.BaseUrl}/listings/summary`);
        return {
          mapkey: process.env.mapkey,
          details: response.body
        };
      });
    },
  }
];
