const Joi = require("joi");
const appHelper = require("../src/helpers");

module.exports = [
  {
    method: "GET",
    path: "/search/{address}",
    options: {
      description: "Find location",
      notes: "Finds location",
      tags: ["api", "Search"],
      validate: {
        params: Joi.object({
          address: Joi.string().required().description("Free form address search"),
        }),
      },
    },
    handler: async (request, h) => {
      return await appHelper.GeneralErrorHandlerFn(async () => {
        const searchBy = {
          q: request.params.address,
          apiKey: process.env.here_api_key,
          limit: 1,
        };
        const response = await appHelper.GetNoAuth(
          `${appHelper.GeocoderUrl.HERE}?${new URLSearchParams(
            searchBy
          ).toString()}`
        );
        return {
          inputSearch: request.params.address,
          details: response.body.items.shift(),
        };
      });
    },
  },
];
