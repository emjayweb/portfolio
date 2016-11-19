var ToolScript = React.createClass({
	render:function(){
return(<div className="container">
			<h2>Tools n' Features</h2>
	<h3 className="toolshead">Utility</h3>
	
	<div id="tools_utility" className="row"> 	
		<div className="col-xs-12 col-sm-2 col-md-2"><div className="toolsec padtop"><a target="_blank" href="https://www.google.com/">
		<i className="material-icons toolscons">&#xE899;</i>
		<p>Password Generator</p>
            </a></div></div>		
	</div>		
    
    <h3 className="toolshead">Fun n' Games</h3>
        
	<div id="tools_fun" className="row"> 	
		<div className="col-xs-12 col-sm-2 col-md-2"><div className="toolsec padtop">
		<i className="material-icons toolscons">&#xE019;</i>
		<p>Radio</p>
		</div></div>		
	</div>	        
	
</div>);}});

ReactDOM.render(<ToolScript />, document.getElementById('toolsection'));