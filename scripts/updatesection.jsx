var UpdateScript = React.createClass({
	render: function(){
		return (<div>
			<h1 id="update_title">Updates</h1>
            <div id="october2016" className="month">
            <p className="update_header">October 26, 2016</p>
<p>I've added a price overview section to the site. I am also currently developing an app. Hope to get that done in time for next week's update so I can share what it is.</p>
<p>Don't have much to add beyond that at the moment. The portfolio section will hopefully debut with my app.</p>
                
			<p className="update_header">October 19, 2016</p>
<p>A new site. Again. Only this time it's official.</p>
<p>As the first update notification for my new site, my goal is to complete the bare necessities by the end of this week. 
I am leaving out the portfolio section for the next update. Everything added to it will be new content. That is, content made after the creation of this site.</p>
<p>In keeping with personal tradition, my weekly updates for the site will be posted every Wednesday. Goal is to code up the basics by the end of the week. This will be more feature-complete after my Week 2 update.</p>
            </div>
			</div>);
	}
});

ReactDOM.render(<UpdateScript />, document.getElementById('updatesection'));