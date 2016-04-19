var React = require('react');
var ReactDOM = require('react-dom');

var slidesInfo =  {
	title: 'slide title',
	content: 'slide content',
	image: 'http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg' 
}

// var Slide = React.createClass ({

// 	getDefaultProps: function () {
// 	    return {
// 	    	title: 'No title.',
// 	    	content: 'No content.',
// 	    	image: ''      
// 	    };
// 	},

// 	render: function () {
// 		return (
// 			<div className="overview-slide-title"> 
// 				<button> x </button>
// 				<input type="text" value = { this.props.title }/> 
// 			</div>
// 		);
// 	}

// });

// ReactDOM.render(<Slide />, document.getElementById('overview-slides'));

//typeSlide
var TitleSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	data: slidesInfo,
	    	addNewSlide: ''      
	    };
	},

	addNewSlide: function () {

		ReactDOM.render(<OverviewTitleSlide />, document.getElementById('overview-slides'));
	},
	render: function () {
		return (
			<div onClick= { this.addNewSlide } className="type-title"> 
				<p> Title </p>
			</div>
		);
	}
});
// ReactDOM.render(<OverviewSlides />, document.getElementById('overview-slides'));

var ContentSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	data: slidesInfo,
	    	addNewSlide: ''      
	    };
	},

	addNewSlide: function () {

		ReactDOM.render(<OverviewContentSlide />, document.getElementById('overview-slides'));
	},
	render: function () {
		return (
			<div onClick= { this.addNewSlide } className = 'type-content'> 
				<p> Title </p>
				<p> Content </p>
			</div>
		);
	}
});


var ImageSlide = React.createClass ({
	getInitialState: function () {
	    return {
	    	data: slidesInfo,
	    	addNewSlide: ''      
	    };
	},

	addNewSlide: function () {

		ReactDOM.render(<OverviewImageSlide />, document.getElementById('overview-slides'));
	},
	render: function () {
		return (
			<div onClick= { this.addNewSlide } className = 'type-img'>
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
					<ContentSlide />
					<ImageSlide />
				</div>
			</div>
		);
	}
});

ReactDOM.render(<Slides />, document.getElementById('type-of-slides'));


//overviewSlide 
var OverviewTitleSlide = React.createClass ({
	getInitialState: function () {
	    return {
	    	data: slidesInfo,
	    	deleteSlide: ''      
	    };
	},

	deleteSlide: function () {
		// console.log(event);
		// var value = event.target;
		// console.log('value: ' + value);

		var slideToDelete = document.getElementsByClassName('overview-slide-title')[0];
		slideToDelete.className = 'display-none';
	},
	render: function () {
		return (
			<div className="overview-slide-title"> 
				<button onClick = {this.deleteSlide } > x </button>
				<input />
			</div>
		);
	}
});

var OverviewContentSlide = React.createClass ({
	getInitialState: function () {
	    return {
	    	data: slidesInfo,
	    	deleteSlide: ''      
	    };
	},

	deleteSlide: function () {
		// console.log(event);
		// var value = event.target;
		// console.log('value: ' + value);

		var slideToDelete = document.getElementsByClassName('overview-slide-content')[0];
		slideToDelete.className = 'display-none';
	},
	render: function () {
		return (
			<div className="overview-slide-content"> 
				<button onClick = {this.deleteSlide }> x </button>
				<input />
				<textarea  name="description">  </textarea>
			</div>
		);
	}
});

var OverviewImageSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	data: slidesInfo,
	    	deleteSlide: ''      
	    };
	},

	deleteSlide: function () {
		// console.log(event);
		// var value = event.target;
		// console.log('value: ' + value);

		var slideToDelete = document.getElementsByClassName('overview-slide-image')[0];
		slideToDelete.className = 'display-none';
	},
	render: function () {

		return (
			<div className="overview-slide-image"> 
				<button onClick = {this.deleteSlide }> x </button>
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
			<div className="detail-title-slide">
				<input placeholder="Enter title"/>
			</div>
		);
	}
});

var DetailsSlides = React.createClass ({
	render: function () {
		return (
			<div>
				<DetailsTitleSlide />
			</div>
		);
	}
});

ReactDOM.render(<DetailsSlides />, document.getElementById('detail-slides'));