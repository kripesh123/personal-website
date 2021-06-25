/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Full Stack Software Developer | Kripesh Bista",
        description: "Kripesh Bista, Full Stack Software Developer Portfolio Site",
        author: "@bista_kripesh",
        twitterUsername: "@bista_kripesh",
        image: "/twitter-img.png",
        siteUrl: "https://kripeshbista.com",
    },
    plugins: [
        `gatsby-plugin-image`,
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
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto\:400,700`,
                    `Open Sans`,
                ],
                display: 'swap'
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.UA,
            },
        },
    ],
}