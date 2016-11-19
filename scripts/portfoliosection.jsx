var PortContent = React.createClass({
render: function(){
return (<div>
			<div id="pframe" className={this.props.setView}>
			<div id="pframecon">
				<a target="_blank" href="http://alopeciaapparel.com">
				<video id="alopecia_apparel" className="pframeimage" width="200" height="150" loop webkit-playsinline>
					<source src="img/workhis/alopecia_apparel.mp4" />
				</video>
				</a>
			</div>	
			</div>	
</div>);}
});

var Portfolioheader = React.createClass({

render: function(){
return (<div className="row containit">

<div className="col-md-3 col-lg-3 col-sm-3 col-xs-12">
<h1>Portfolio</h1>
</div>

<div id="viewitems" className="col-md-9 col-lg-9 col-sm-9 col-xs-12">
<p><a className="unassigneda" onClick={this.props.showIt}>{this.props.viewItems}</a></p>
</div>

</div>);}
});

var PortfolioScript = React.createClass({

getInitialState:function(){
return { setView: '', viewItems: 'View Items' }
},

showIt:function(){
if (this.state.viewItems === 'View Items'){
	this.setState({setView: 'pitemsel', viewItems: 'Hide Items'});
	document.getElementById('alopecia_apparel').play();
	}
else { 
	this.setState({setView: '', viewItems: 'View Items'});
	document.getElementById('alopecia_apparel').pause();
	}	
},

render: function(){
	return(<div id="portfoliocover">
			<Portfolioheader reveal={this.state.reveal} viewItems={this.state.viewItems} showIt={this.showIt}/>
		<div>
			<PortContent reveal={this.state.reveal} setView={this.state.setView} />
		</div>
</div>);}
});

ReactDOM.render(<PortfolioScript />, 
document.getElementById('portfoliosection'));