import React, { Component } from 'react';

export default class About extends Component {

	render() {
	  return (
	    <div className='container'>
				<h1 className="custom-h1"> About </h1>
				<hr/>
				<br/>
				<ul className='custom-bullet'>
        <li><p>The basic idea of this project is to automate the process of document management/verification from different entities.</p></li>
        <li><p>A requester upload a document to blockchain for a verifier.</p></li>
		<li><p>Requester gives the document for verification.</p></li>
        <li><p>The verifier verifies or rejects the document.</p></li>
		<li><p>Once a verifier verifies the document, it is reflected on the system.</p></li>
				</ul>
			</div>
	  );
	}

};
