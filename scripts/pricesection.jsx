function PriceList(){
	return (<div id="pricetainer">
	<h1>What's your Project?</h1>
	<p className="hilite">Price and Service Estimates</p>
	<p className="disclaim">Note: Prices are not set in stone and are subject to change. The purpose of this 
	section is to give clients a broad baseline of what to expect. This also only covers general project scopes.
	If you do not see anything here that describes what you need, please e-mail me at moyjohnsen@aol.com.</p>
	
	<div className="row">
		<div id="pfolio" className="col-md-4 col-sm-6 col-xs-12">
			<div id="pfolioh" className="pheather">
				<h4>One Page Portfolio <span className="pricetag">$60</span></h4>
			</div>
			<div className="pcontent">
				<table className="table">
					<tr>
						<td>Estimated Duration</td>
						<td>One Week</td>
					</tr>
                    <tr>
                        <td>SEO</td>
                        <td>No</td>
                    </tr>
					<tr>
						<td>CMS</td>
						<td>No</td>
					</tr>
					<tr>
						<td>Special Notes</td>
						<td>Only available for individuals who would like to have a personal or 
						professional portfolio. Ideal for your bio or resume. Not available to businesses.</td>
					</tr>
				</table>
			</div>
		</div>
        
		<div id="ppress" className="col-md-4 col-sm-6 col-xs-12">
			<div id="ppressh" className="pheather">
				<h4>Wordpress Site <span className="pricetag">$250</span></h4>
			</div>
			<div className="pcontent">
				<table className="table">
					<tr>
						<td>Estimated Duration</td>
						<td>One Week</td>
					</tr>
                    <tr>
                        <td>SEO</td>
                        <td>No</td>
                    </tr>
					<tr>
						<td>CMS</td>
						<td>Yes</td>
					</tr>
					<tr>
						<td>Special Notes</td>
						<td>For individuals and businesses who would like to establish a 4-page site (home, about, contact, services) with a pre-built Wordpress theme that has a functioning contact form.</td>
					</tr>
				</table>
			</div>
		</div>        

		<div id="pbuspack" className="col-md-4 col-sm-6 col-xs-12">
			<div id="pbuspackh" className="pheather">
				<h4>3-Month Business Plan <span className="pricetag">$3,000 monthly</span></h4>
			</div>
			<div className="pcontent">
				<table className="table">
					<tr>
						<td>Estimated Duration</td>
						<td>3-month Contract</td>
					</tr>
                    <tr>
                        <td>SEO</td>
                        <td>Yes</td>
                    </tr>
					<tr>
						<td>CMS</td>
						<td>Depends</td>
					</tr>
					<tr>
						<td>Special Notes</td>
						<td>Over a renewable 3-month contract, we develop, grow, and mantain a website for your business. 
                        Includes web administration tasks, ongoing SEO support, and new features added to the site each month including 
                            goals for web application development, online commerce, etc.</td>
					</tr>
				</table>
			</div>
		</div> 
        
		<div id="papp" className="col-md-4 col-sm-6 col-xs-12">
			<div id="papph" className="pheather">
				<h4>Web Application <span className="pricetag">$3,000</span></h4>
			</div>
			<div className="pcontent">
				<table className="table">
					<tr>
						<td>Estimated Duration</td>
						<td>One Month</td>
					</tr>
                    <tr>
                        <td>SEO</td>
                        <td>Depends</td>
                    </tr>
					<tr>
						<td>CMS</td>
						<td>Depends</td>
					</tr>
					<tr>
						<td>Special Notes</td>
						<td>Node.js web application development. We build a browser-based app that is suitable for expansion into the mobile space.</td>
					</tr>
				</table>
			</div>
		</div> 

		<div id="pcopy" className="col-md-4 col-sm-6 col-xs-12">
			<div id="pcopyh" className="pheather">
				<h4>Digital Marketing<span className="pricetag">$3,000 monthly</span></h4>
			</div>
			<div className="pcontent">
				<table className="table">
					<tr>
						<td>Estimated Duration</td>
						<td>One Month</td>
					</tr>
                    <tr>
                        <td>SEO</td>
                        <td>Yes</td>
                    </tr>
					<tr>
						<td>CMS</td>
						<td>Depends</td>
					</tr>
					<tr>
						<td>Special Notes</td>
						<td>
							A one-month package for digital marketing. Includes a personalized strategy for SEO, 
							content creation including marketing collateral, article writing, analytics, Facebook ad targeting, and more. 
							At the end of the month we produce a report detailing page views, online sales numbers, and more.
						</td>
					</tr>
				</table>
			</div>
		</div>          
        
        
	</div>
	
	</div>);
}

function PriceScript(){
	return (<div>
	<PriceList />
</div>);}

ReactDOM.render(<PriceScript />, document.getElementById('pricesection'));