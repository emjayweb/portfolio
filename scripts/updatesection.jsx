var UpdateScript = React.createClass({
	render: function(){
		return (<div>
			<h1 id="update_title">Updates</h1>
			<p className="update_header">October 19, 2016</p>
<p>A new site. Again. Only this time it's official.</p>
<p>As the first update notification for my new site, my goal is to complete the bare necessities by the end of this week. 
I am leaving out the portfolio section for next week. Everything added to it will be new content.</p>
<p>In keeping with personal tradition, my weekly updates for the site will be posted every Wednesday. Come this Sunday expect to see a bare-bones but functioning 
website. This will be more feature-complete after my Week 2 update.</p>
			</div>);
	}
});

ReactDOM.render(<UpdateScript />, document.getElementById('updatesection'));