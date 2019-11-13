import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../assets/scss/blog-listing.scss'

import Layout from '../components/layout'
//import blogStyles from './blog.module.scss'
const BlogPage = () => {
	const siteTitle = "Serverside and Client Side Software Development"
	const siteDescription = "Gatsby / GatsbyJS Developer Blog"

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
		<div class="grid-container">
			<header class="header">
			
			</header>
		
		<main class="main">

				{
					  data.allContentfulArticle.edges.map((edge) => {
						  return (

								<article class="entry" key={edge.node.slug}>
									<figure class="entry-thumb">
									  <img src={edge.node.thumbnail.file.url} alt=""/>
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
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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