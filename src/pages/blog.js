import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../assets/css/bloglisting.css'

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
					
       			}
       		}
       	}
	   }`)
  return ( 
		<div class="grid-container">
			<header class="header">
				<h3>A WordPress blogging layout</h3>
			</header>
		
		<main class="main">

			<article class="entry">
				<figure class="entry-thumb">
					<img src="https://placehold.it/540x400" alt=""/>>
				</figure>
				
				<div class="entry-content">
					<header class="entry-header">
						<h3 class="entry-title"><a href="#">Toddler Scientists Finally Determine Number Of Peas That Fit Into Ear Canal</a></h3>

						<div class="entry-meta">
							2 Comments
						</div>
					</header>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</article>
			
			<article class="entry">
				<figure class="entry-thumb">
					<img src="https://placehold.it/540x400" alt=""/>
				</figure>
				
				<div class="entry-content">
					<header class="entry-header">
						
						<h3 class="entry-title"><a href="#">Trump Comforts Grieving War Widow By Assuring Her He Will Never Die</a></h3>
	
						<div class="entry-meta">
							1 Comments
						</div>
					</header>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</article>
		
			
		</main>
		
		<div class="sidebar sidebar-left">
			Left Sidebar
		</div>
		
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