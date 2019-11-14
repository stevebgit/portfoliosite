import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { graphql } from 'gatsby'
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
				return <img alt={node.data.target.fields.description} src={url} width={"1024"} height={"515"}  />
			}
		}
	}
	//console.log(props)
	return (
		<Layout>
			<Helmet>
				<title>{props.data.contentfulPage.title}</title>
				<meta name="description" content={props.data.contentfulPage.pageSummary} /> 
				<meta name="robots" content="index, follow" />>
			</Helmet>
			<div id="main">
				<h1>{props.data.contentfulPage.title}</h1>
				{documentToReactComponents(props.data.contentfulPage.body.json, options)}
			</div>
		</Layout>
	)
}

export default Blog1
