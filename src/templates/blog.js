import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import BlogLayout from "../components/bloglayout"
import Helmet from 'react-helmet'
import { DiscussionEmbed } from 'disqus-react'

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
			articleTitle
			thumbnailAlt
	  articleData(formatString: "MMMM Do, YYYY")
	  id
      articleBody {
        json
      }
    }
  }
`

const Blog = props => {
	const siteTitle = "Serverside and Client Side Software Development"
	const siteDescription = "Gatsby / GatsbyJS Developer Blog"

	//newFilePath = `src/pages${pathname.slice(0, -1)}.js`

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
		<BlogLayout>
			<Helmet>
				<title> {props.data.contentfulArticle.thumbnailAlt} </title> 
				<meta name="description" content={props.data.contentfulArticle.articleSummary}/>
				<meta name="robots" content="index, follow" />
			</Helmet>

			<div className="main">
				<h1>{props.data.contentfulArticle.articleTitle}</h1>
				<p>{props.data.contentfulArticle.articleData}</p>
			{documentToReactComponents(props.data.contentfulArticle.articleBody.json, options)}
				<div id="disqus-container">
					<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
				</div>
			</div>
			
			<div class="sidebar sidebar-right">
			<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Goal of 2020 - Be the Yoda of Visual Studio Code keyboard shortcuts</p>&mdash; gatsbydeveloper (@gatsbydeveloper) <a href="https://twitter.com/gatsbydeveloper/status/1195331124526026753?ref_src=twsrc%5Etfw">November 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/LP5xrVE4NB">https://t.co/LP5xrVE4NB</a></p>&mdash; gatsbydeveloper (@gatsbydeveloper) <a href="https://twitter.com/gatsbydeveloper/status/1194699877080547329?ref_src=twsrc%5Etfw">November 13, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sam Harris - enlightenment, real meditation, and consciousness explained - <a href="https://t.co/ngRrRMGtJN">https://t.co/ngRrRMGtJN</a></p>&mdash; sb (@codertravelerMe) <a href="https://twitter.com/codertravelerMe/status/1186709317858123776?ref_src=twsrc%5Etfw">October 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Homeless Man does Breaking Bad impressions for food (Homelessberg) <a href="https://t.co/taxwdf6Yna">https://t.co/taxwdf6Yna</a> via <a href="https://twitter.com/YouTube?ref_src=twsrc%5Etfw">@YouTube</a></p>&mdash; sb (@codertravelerMe) <a href="https://twitter.com/codertravelerMe/status/1186693722437771264?ref_src=twsrc%5Etfw">October 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

		  </div>

		</BlogLayout>
	)
}

export default Blog
