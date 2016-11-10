var UpdateScript = React.createClass({

componentDidMount(){
	this.updatedate();
},

updatedate:function(){
	var months = document.getElementsByClassName('month');
	var whichIsSelected = '';
	
	var nodes = document.getElementById('datechosen').childNodes;
	for (var i = 0; i< nodes.length; i++){
		if (nodes[i].selected){whichIsSelected = nodes[i].value;}
	}
	for (var x = 0; x < months.length; x++){
		months[x].style.display = (months[x].id === whichIsSelected) ? 'block':'none';
	}
},

render: function(){
		return (<div>
			<h1 id="update_title">Updates</h1>
			
			<select ref="datechosen" id="datechosen" onChange={this.updatedate}>
				<option value="nov2016">November 2016</option>
				<option value="oct2016">October 2016</option>
			</select>
			<div id="nov2016" className="month" ref="month">
			<p className="update_header">November 9, 2016</p>
			<p>App will be done by the end of the month. Pinky swear. On top of a few other obligations, I am also re-designing the app.</p>
			<p>I have included a portfolio section with my newest acquired contract for <a target="_blank" href="http://alopeciaapparel.com/">Alopecia Apparel</a>. 
			Work here will involve development, digital marketing, and all things in between when you're working on an e-commerce project.</p>
			<p>I do not normally plan on including contracted projects in my weekly updates, though if anything particularly interesting occurs expect exceptions to the rule. 
			In the meanwhile I still plan on releasing my app some time soon (I'll have to), and expect further changes to the front-end of my site. 
			My initial plan for weekly updates was to mostly outline my personal projects. So I'll try to stay on point in next week's update.</p>
			</div>
			
            <div id="oct2016" className="month">
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