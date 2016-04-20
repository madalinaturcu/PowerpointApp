var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');

var selectSlide = {};

var storedSlides = [
	{
		id: 1,
		type: 'Title',
		title : 'Title1'
	},
	{
		id: 2,
		type: 'Content',
		title: 'Title2',
		content : 'Content'
	},
	{
		id: 3,
		type: 'Image',
		title: 'Title3',
		content : 'http://ict-rev.ecml.at/Portals/1/images/Inventory/Powerpoint.png'
	},
	{
		id: 4,
		type: 'Title',
		title : 'Title4'
	},
	{
		id: 5,
		type: 'Image',
		title : 'Title5',
		content : 'http://www.softsolutionworks.com/images/microsoft-logo.png'
	},
];


//typeSlide
var TitleSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	addNewSlide: ''      
	    };
	},

	addNewSlide: function () {
		ReactDOM.render(<OverviewTitleSlide />, document.getElementById('overview-slides'));
		// console.log(this.props.data);
		// var newStoredSlides = this.props.data.slice();	//copy array
	  
	 //  newSlide = {
		// 	id: 100,
		// 	type: 'Title',
		// 	content: 'super'
		// };

	 //  newStoredSlides.push(newSlide);

	 //  this.setState({data: newStoredSlides});
	},
	render: function () {
		return (
			<div className="type-title"> 
				<p> Title </p>
			</div>
		);
	}
});
//ReactDOM.render(<OverviewSlides data={storedSlides}/>, document.getElementById('overview-slides'));

var ContentSlide = React.createClass ({

	getInitialState: function () {
	    return {
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

	addSlide: function () {
		console.log(this.props.data);
		var newStoredSlides = this.props.data.slice();	//copy array
	  
	  var newSlide = {
			id: 100,
			type: 'Title',
			content: 'super'
		};

	  newStoredSlides.push(newSlide);
	  console.log(newStoredSlides);
	  this.setState({data: newStoredSlides});

	  console.log(this.props.allOverviewSlides);
	  
	},
	render: function () {
		return (
			<div>
				<div>
					<h1 className = 'site-name' onClick= {this.addSlide}> Powerpoint </h1>	
					<div className = 'all-type-slides'>
						<TitleSlide />
						<ContentSlide />
						<ImageSlide />
					</div>
				</div>
				<div>
					{ this.props.allOverviewSlides }
				</div>
			</div>
		);
	}
});

ReactDOM.render(<Slides data={storedSlides}/>, document.getElementById('type-of-slides'));


//overviewSlide 
var OverviewTitleSlide = React.createClass ({
	getInitialState: function () {
	    return {
	    	deleteSlide: ''      
	    };
	},

	 //deleteSlide: function (id) {
	// 	var slideToDelete = document.getElementsByClassName('overview-slide-title')[0];
	// 	slideToDelete.className = 'display-none';

		// console.log(this.props.data);

		// var newStoredSlides = this.props.data.slice();	//copy array
	 //  newStoredSlides.push(id, 1);
	 //  console.log(newStoredSlides);
	 //  this.setState({data: newStoredSlides});

	 //  console.log(this.props.data);
	//},
	render: function () {
		return (
			<div className="overview-slide-title"> 
				<button > x </button>
				<p>  {this.props.title} </p>
			</div>
		);
	}
});

var OverviewContentSlide = React.createClass ({
	getInitialState: function () {
	    return {
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
				<p> {this.props.title} </p>
				<p className="overview-slide-textarea"> {this.props.content}</p>
			</div>
		);
	}
});

var OverviewImageSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	deleteSlide: ''      
	    };
	},

	deleteSlide: function () {
		console.log(event);
		var value = event;
		console.log('value: ' + value);


		var slideToDelete = document.getElementsByClassName('overview-slide-image')[0];
		slideToDelete.className = 'display-none';
	},
	render: function () {

		return (
			<div className="overview-slide-image"> 
				<button onClick = {this.deleteSlide }> x </button>
				<p className="overview-slide-input"> {this.props.title}</p>
				<img src={this.props.content} />
			</div>
		);
	}
});



var OverviewSlides = React.createClass ({

	selectSlide : function(){
		alert('');
	},

	deleteSlide: function (id) {
		var slideToDelete = document.getElementsByClassName('overview-slide-title')[0];
		slideToDelete.className = 'display-none';

		console.log(this.props.data);

		var newStoredSlides = this.props.data.slice();	//copy array
	  newStoredSlides.push(id, 1);
	  console.log(newStoredSlides);
	  this.setState({data: newStoredSlides});

	  console.log(this.props.data);

	},

	render: function () {

		var allOverviewSlides = this.props.data.map(function(slide){
			if(slide.type === 'Title') {
				return( < OverviewTitleSlide  key = {slide.id} title = {slide.title} /> );
			} else 
			if(slide.type === 'Content') {
				return(<OverviewContentSlide key = {slide.id} title = {slide.title} content = {slide.content} /> );
			} else {
				return(<OverviewImageSlide key = {slide.id} title = {slide.title} content = {slide.content}/> );
			}
		});

		return (
			<div >
				{ allOverviewSlides }
			</div>
		);
	}
});

ReactDOM.render(<OverviewSlides data={storedSlides}/>, document.getElementById('overview-slides'));

//detailSlide

var DetailsTitleSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	addSlideInfo: ''      
	    };
	},

	addSlideInfo: function () {
		// var inputTitle = {this.props.title};
		// var inputTitle = document.getElementsByTagName('input').value;
		console.log(inputTitle);
	},

	render: function () {
		return (
			<div onClick = {this.addSlideInfo } className="detail-title-slide">
				<input placeholder="Enter title"/>
			</div>
		);
	}
});

var DetailsContentSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	addSlideInfo: ''      
	    };
	},

	addSlideInfo: function () {
		// var inputTitle = {this.props.title};
		// var inputTitle = document.getElementsByTagName('input').value;
		console.log(inputTitle);
	},

	render: function () {
		return (
			<div onClick = {this.addSlideInfo } className="detail-content-slide">
				<input placeholder="Enter title"/>
				<textarea placeholder="Enter content" />
			</div>
		);
	}
});

var DetailsImageSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	addSlideInfo: ''      
	    };
	},

	addSlideInfo: function () {
		// var inputTitle = {this.props.title};
		// var inputTitle = document.getElementsByTagName('input').value;
		console.log(inputTitle);
	},

	render: function () {
		return (
			<div onClick = {this.addSlideInfo } className="detail-content-slide">
				<input placeholder="Enter title"/>
				<img src='' />
			</div>
		);
	}
});

var DetailsSlides = React.createClass ({
	render: function () {
		var selectedSilde;

		return (
			<div>

				<DetailsContentSlide />
			</div>
		);
	}
});

ReactDOM.render(<DetailsSlides />, document.getElementById('detail-slides'));