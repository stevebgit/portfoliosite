module.exports = {
  siteMetadata: {
	siteUrl: "http://gatsbydeveloper.com",
    title: "Freelance Developer",
    author: "Steve Bailey",
    description: "Server-End Laravel Development/Front End React/Gatsby"
  },
  plugins: [
	  'gatsby-plugin-sitemap',
	{
		resolve: 'gatsby-source-contentful',
		options: {
			spaceId: process.env.CONTENTFUL_SPACE_ID,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		}
	},
	{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: "UA-151508782-1",
			},
	},
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
	'gatsby-plugin-twitter'
	// 'gatsby-transformer-json',
	// {
	// 	resolve: 'gatsby-source-filesystem',
	// 	options: {
	// 		name: 'data',
	// 		path: `${__dirname}/src/currentBook`
	// 	}
	// }
  ],
}
