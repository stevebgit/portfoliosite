import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Helmet from 'react-helmet'
import { DiscussionEmbed } from 'disqus-react'

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      articleTitle
	  articleData(formatString: "MMMM Do, YYYY")
	  id
      articleBody {
        json
      }
    }
  }
`

const Blog = props => {
	const disqusShortname = 'gatsbydeveloper'
	const baseUrl = "https://gatsbydeveloper.com"
	const disqusConfig = {
		identifier: props.data.contentfulArticle.id,
		title: props.data.contentfulArticle.articleTitle,
		url: baseUrl + props.data.contentfulArticle.slug
	}
	const options = {
		renderNode: {
			"embedded-asset-block": (node) => {
				const alt = node.data.target.fields.title['en-US']
				const url = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={url} />
			}
		}
	}

	return (
		<Layout>
			<Helmet>
				{/* <title>{siteTitle}</title>
				<meta name="description" content={siteDescription} /> */}

			</Helmet>

			<div id="main">
				<h1>{props.data.contentfulArticle.articleTitle}</h1>
				<p>{props.data.contentfulArticle.articleData}</p>
			{documentToReactComponents(props.data.contentfulArticle.articleBody.json, options)}
				<div id="disqus-container">
					<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
				</div>
			</div>
			
		</Layout>
	)
}

export default Blog
