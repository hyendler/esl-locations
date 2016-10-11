var ListenSect = React.createClass({
	render: function() {
		return (
			<div className="listenSect">
				Hello world, Im the listening section!
				<LocationImgs />
				<LocationHeader />
				<SoundButton />
			</div>
		);
	}
})

var LocationImgs = React.createClass({
	render: function() {
		return (
			<div className="locationImgs">
				Insert image here
				<Img />
			</div>
			);
	}
});

var Img = React.createClass({
	render: function() {
		return (
			<div className="img">
				Imma an image!
			</div>
		)
	}
})

var LocationHeader = React.createClass({
	render: function() {
		return (
			<div className="locationHeader">
				Imma header
			</div>
		);
	}
});

var SoundButton = React.createClass({
	render: function() {
		return (
			<div className="soundButton">
				Press me!
			</div>
		)
	}
})

ReactDOM.render(
	<ListenSect />,
	document.getElementById('content')
);