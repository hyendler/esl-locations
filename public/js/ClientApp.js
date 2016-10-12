var React = require('react')
var ReactDOM = require('react-dom')

var locale = {
	id: 1,
	locName: "pharmacy",
	description: "Location where you can get medications and household products",
	imgs: ["pharmacy1.jpg", "pharmacy2.jpg", "pharmacy3.jpg"],
	soundclip: "pharmacy_clip1.m4a"
}

var ListenSect = React.createClass({
	render: function() {
		return (
			<div className="listenSect section">
				Hello world, Im the listening section!
				<div className="col-md-4">
					<LocationImgs imgs={this.props.locale.imgs} />
				</div>
				<div className="col-md-8">
					<LocationHeader locName={this.props.locale.locName} />
				</div>
			</div>
		);
	}
})

var LocationImgs = React.createClass({
	render: function() {
		var imgNodes = this.props.imgs.map(function(img){
			return (
				<Img url={img} />
			);
		});
		return (
			<div className="locationImgs">
				{imgNodes}
			</div>
		)
	}
});

var Img = React.createClass({
	render: function() {
		return (
			<div className="img">
				<img src={'/img/${this.props.url}'} />
			</div>
		)
	}
})

var LocationHeader = React.createClass({
	render: function() {
		return (
			<div className="locationHeader">
				{this.props.locName}
			</div>
		);
	}
});

// var TypingSect = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="typingSect">
// 				<LocationHeader locName={this.props.locale.locName} />
// 			</div>
// 		);
// 	}
// });

// var TypingInput = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="typingInput">
// 			</div>
// 		)
// 	}
// })

// var SoundButton = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="soundButton">
// 				Press me!
// 			</div>
// 		)
// 	}
// })

ReactDOM.render(
	<ListenSect locale={locale} />,
	document.getElementById('content')
);