import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../assets/scss/blog-listing.scss'

import BlogLayout from '../components/bloglayout'
const BlogPage = () => {
	// const siteTitle = "Serverside and Client Side Software Development"
	// const siteDescription = "Gatsby / GatsbyJS Developer Blog"

	const data = useStaticQuery(graphql `
       query {
       	allContentfulArticle(sort: {
       		fields: articleData
       	}) {
       		edges {
       			node {
       				articleTitle
					articleData(formatString: "MMMM Do, YYYY")
					slug
					articleSummary
					 thumbnail {
						file {
						url
						}
					}
       			}
       		}
       	}
	   }`)
  return ( 
		<BlogLayout>
		
		<main className="main">

				{
					  data.allContentfulArticle.edges.map((edge) => {
						  return (

								<article class="entry" key={edge.node.slug}>
									<figure class="entry-thumb">
									  <img src={edge.node.thumbnail.file.url} alt={edge.node.thumbnailAlt} />
									</figure>

									<div class="entry-content">
										<header class="entry-header">
											<h3 class="entry-title">
													<Link to={`/blog/${edge.node.slug}`}>{edge.node.articleTitle}</Link>
											</h3>
											<h6> {edge.node.articleData} </h6>
												{/* <div class="entry-meta">
													2 Comments
												</div> */}
										</header>
										<p>{edge.node.articleSummary}</p>
									</div>
								</article>
							  
							
						  )
					  })
				  } 
		</main>
		
		<div class="sidebar sidebar-right">
			<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I built Gatsby with React because I love the technology and people. We&#39;re going to keep building a safe and inclusive ecosystem where individuals and organizations of all flavors can thrive. <a href="https://t.co/c57SpeAdOM">https://t.co/c57SpeAdOM</a></p>&mdash; Kyle Mathews (@kylemathews) <a href="https://twitter.com/kylemathews/status/1165062768111702016?ref_src=twsrc%5Etfw">August 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Amid rapid changes to the US economy, an increasing number of Americans are leaving behind the security of traditional employment and turning to freelance. Should freelancers incorporate in 2019?<a href="https://t.co/C2kPIgKL5B">https://t.co/C2kPIgKL5B</a> <a href="https://t.co/C9KYYgFuLp">pic.twitter.com/C9KYYgFuLp</a></p>&mdash; Payoneer (@Payoneer) <a href="https://twitter.com/Payoneer/status/1090965464598147072?ref_src=twsrc%5Etfw">January 31, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			
			<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Next.js is so fucking good. Gatsby is so fucking good. The React ecosystem is so fucking good. I love you all.</p>&mdash; Andrew Clark (@acdlite) <a href="https://twitter.com/acdlite/status/1057727099320954880?ref_src=twsrc%5Etfw">October 31, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


		</div>
		
		
	</BlogLayout>
  	)
  }

  export default BlogPage