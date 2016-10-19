var UpdateScript = React.createClass({
	render: function(){
		return (<div>
			<h1 id="update_title">Updates</h1>
			<p className="update_header">October 19, 2016</p>
			<p>Welcome to my site! It's still under construction at the moment, so content is a little light. Expect to see updates made to this site at least once every week from this point onwards. Definitely expect to see a few open-source projects.</p>
			<p>If you would like to contact me, you can at moyjohnsen@aol.com</p>
			</div>);
	}
});

ReactDOM.render(<UpdateScript />, document.getElementById('updatesection'));