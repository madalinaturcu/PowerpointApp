var React = require('react');
var ReactDOM = require('react-dom');

// var Test = React.createClass({
// 	render: function () {
// 		return(
// 			<div>
// 				<p> uraa uraa ura duraa</p>
// 			</div> 
// 		);
// 	}  
// });
 
// ReactDOM.render(<Test />, document.getElementById('test'));

//typeSlide
var TitleSlide = React.createClass ({
	render: function () {
		return (
			<div className="type-title"> 
				<p> Title </p>
			</div>
		);
	}
});


var ContentSlider = React.createClass ({
	render: function () {
		return (
			<div className = 'type-content'> 
				<p> Title </p>
				<p> Content </p>
			</div>
		);
	}
});


var ImageSlider = React.createClass ({
	render: function () {
		return (
			<div className = 'type-img'>
				<p> Title </p>
				<p className = 'slide-img' > Image </p> 
			</div>
		);
	}
});


var Slides = React.createClass ({
	render: function () {
		return (
			<div>
				<h1 className = 'site-name'> Powerpoint </h1>	
				<div className = 'all-type-slides'>
					<TitleSlide />
					<ContentSlider />
					<ImageSlider />
				</div>
			</div>
		);
	}
});

ReactDOM.render(<Slides />, document.getElementById('type-of-slides'));


//overviewSlide 
var OverviewTitleSlide = React.createClass ({
	render: function () {
		return (
			<div className="overview-slide-title"> 
				<button> x </button>
				<input />
			</div>
		);
	}
});

var OverviewContentSlide = React.createClass ({
	render: function () {
		return (
			<div className="overview-slide-content"> 
				<button> x </button>
				<input />
				<textarea> </textarea>
			</div>
		);
	}
});

var OverviewImageSlide = React.createClass ({
	render: function () {
		return (
			<div className="overview-slide-image"> 
				<button> x </button>
				<input />
				<img src = "http://ict-rev.ecml.at/Portals/1/images/Inventory/Powerpoint.png" />
			</div>
		);
	}
});

var OverviewSlides = React.createClass ({
	render: function () {
		return (
			<div>
				<OverviewTitleSlide />
				<OverviewContentSlide />
				<OverviewImageSlide />
			</div>
		);
	}
});

ReactDOM.render(<OverviewSlides />, document.getElementById('overview-slides'));

//detailSlide

var DetailsTitleSlide = React.createClass ({
	render: function () {
		return (
			<div>
				
			</div>
		);
	}
});

var DetailsSlides = React.createClass ({
	render: function () {
		return (
			<div>

			</div>
		);
	}
});

ReactDOM.render(<DetailsSlides />, document.getElementById('detail-slides'));