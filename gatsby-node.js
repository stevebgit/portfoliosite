/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const articleTemplate = path.resolve('./src/templates/blog.js')
	const res = await graphql(`
        query {
            allContentfulArticle {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

	res.data.allContentfulArticle.edges.forEach((edge) => {
		createPage({
			component: articleTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	})

	// =================================================
	createPage({
		component: articleTemplate,
		path: `/blog/${edge.node.slug}`,
		context: {
			slug: edge.node.slug
		}
	})


	// =================================================

	const pageTemplate = path.resolve('./src/templates/page.js')
	const res1 = await graphql(`
        query {
            allContentfulPage {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

	res1.data.allContentfulPage.edges.forEach((edge) => {
		createPage({
			component: pageTemplate,
			path: `/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	})


}