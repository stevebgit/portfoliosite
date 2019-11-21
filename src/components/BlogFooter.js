import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

//const FooterQuote = ({ children }) => (

export default () => (
	<StaticQuery
		query={graphql`
			query FooterQuoteQuery {
				allDataJson {
				  edges {
					  node {
						  author
						  book
					  }
				  }
				}
			}
			`}
			render={data => (
				<>
					<p>{getFooterQuoteString(data)}</p>
				</>
			)}
	/>
);


function getFooterQuoteString(data) {
	//quoteString = data.allFooterQuoteJson.edges.node;
	console.log(data);
	var quoteString = "some string";
	return quoteString;
}

class BlogFooter extends React.Component {
    render() {
        return (
            <footer class="footer">
		
            </footer>
        )
    }
}

//export default BlogFooter
