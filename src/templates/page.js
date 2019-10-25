import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Helmet from 'react-helmet'


export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        json
      }
    }
  }
`

const Blog1 = props => {
	const options = {
		renderNode: {
			"embedded-asset-block": (node) => {
				const alt = node.data.target.fields.title['en-US']
				const url = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={url} />
			}
		}
	}
	//console.log(props)
	return (
		<Layout>
			<Helmet>
				{/* <title>{siteTitle}</title>
				<meta name="description" content={siteDescription} /> */}
			</Helmet>
			<div id="main">
				<h1>{props.data.contentfulPage.title}</h1>
				{documentToReactComponents(props.data.contentfulPage.body.json)}
			</div>
		</Layout>
	)
}

export default Blog1
