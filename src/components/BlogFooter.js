import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const BlogFooter = ({ children }) => (
	<StaticQuery
		// query={graphql`
		// 	query FooterQuoteQuery {
		// 		allDataJson {
		// 		  edges {
		// 			  node {
		// 				  author
		// 				  book
		// 			  }
		// 		  }
		// 		}
		// 	}
		// 	`}
			render={data => (
				<footer class="footer">
					{/* <p>{getFooterCurrentBookString(data)}</p> */}
				</footer>
				
			)}
	/>
);


function getFooterCurrentBookString(data) {
	let numberBooks = data.allDataJson.edges.length;
	let randomInt = Math.floor(Math.random() * numberBooks);
	let title = data.allDataJson.edges[randomInt].node.book;
	let author = data.allDataJson.edges[randomInt].node.author;
	
	let returnString = title + " by " + author;
	
	return returnString;
}

export default BlogFooter
