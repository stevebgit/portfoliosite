import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../assets/css/bloglisting.css'

import Layout from '../components/layout'
//import blogStyles from './blog.module.scss'
const BlogPage = () => {
	const siteTitle = "Serverside and Client Side Software Development"
	const siteDescription = ""

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
					
       			}
       		}
       	}
	   }`)
  return ( 
	  <Layout>
		    <Helmet>
		    	<title> {siteTitle} </title> 
				<meta name="description" content={siteDescription}/>
		    </Helmet>
			<div id="main">
				<section id="one">
					<h1> Blog </h1>
				  <div className="blog-posts"> 
				   {
					  data.allContentfulArticle.edges.map((edge) => {
						  return (
							  <div className="blog-post-preview" key={edge.node.slug}> 
								<h1>
									<Link to={`/blog/${edge.node.slug}`}>{edge.node.articleTitle}</Link>
								</h1>
								<h2> {edge.node.articleData} </h2>
								{/* <p>{post.excerpt}</p>  */}
							</div>
							
						  )
					  })
				  } 
				  </div>
				</section>
			</div> 
	  	</Layout>
  	)
  }

  export default BlogPage