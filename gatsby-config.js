module.exports = {
  siteMetadata: {
    title: "Manealog",
    description:
      "Je m'appelle Geoffrey Douilly, je suis développeur web fullstack, voici le blog sur lequel je posterai mes découvertes en développement/technologies",
    author: "Geoffrey Douilly",
    siteUrl: "https://www.blog.geoffreydouilly.fr",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static_images",
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
    },
    "gatsby-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-plugin-netlify-cms-paths",
            options: {
              // Path to your Netlify CMS config file
              cmsConfig: "/static/admin/config.yml",
            },
          },
          // "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Manealog",
        short_name: "ML",
        start_url: "/",
        background_color: "#DEDEDE",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/images/arch-hero.jpg", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: "gatsby-plugin-offline",
      // options: {
      //   precachePages: ["/search", "/blog/*"],
      // },
    },
  ],
};
