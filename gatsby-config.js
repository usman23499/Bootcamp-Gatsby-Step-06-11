// In your gatsby-config.js
const dotenv = require("dotenv");

// if(process.env.NODE_ENV !== 'production'){
dotenv.config();
// }

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,    },  
    },
  ],
}