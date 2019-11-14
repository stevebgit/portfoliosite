import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../assets/scss/blog-listing.scss'

import Layout from '../components/layout'
//import blogStyles from './blog.module.scss'
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
		<div className="grid-container">
			<header className="header">
			
			</header>
			<div className="menu">
				<ul>
					<li><a href="/" className="item">Home</a>     </li>
					<li><Link to="/#contact-form" className="item">Contact</Link></li>
					{/* <li><a href="/#contact-form" className="item">Contact</a></li> */}
				</ul>
			</div>
		
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
			Right Sidebar
		</div>
		
		<footer class="footer">
			Footer
		</footer>
	</div>
  	)
  }

  export default BlogPage