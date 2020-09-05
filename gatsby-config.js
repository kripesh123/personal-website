/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Full Stack Developer",
        description: "This is Full Stack Developer Portfolio Site",
        author: "@bista_kripesh",
        twitterUsername: "@bista_kripesh",
        image: "/twitter-img.png",
        siteUrl: "https://kripeshbista.com.np",
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [{
                        family: `Roboto`,
                        variants: [`400`, `700`],
                    },
                    {
                        family: `Open Sans`,
                    },
                ],
            },
        },
    ],
}