var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');

var selectSlide = {};


//typeSlide
var TitleSlide = React.createClass ({

	render: function () {
		return (
			<div className="type-title" onClick={this.props.addSlide}> 
				<p> Title </p>
			</div>
		);
	}
});
//ReactDOM.render(<OverviewSlides data={storedSlides}/>, document.getElementById('overview-slides'));

var ContentSlide = React.createClass ({

	render: function () {
		return (
			<div  className = 'type-content' onClick={this.props.addSlide}> 
				<p> Title </p>
				<p> Content </p>
			</div>
		);
	}
});


var ImageSlide = React.createClass ({

	render: function () {
		return (
			<div className = 'type-img' onClick={this.props.addSlide}>
				<p> Title </p>
				<p className = 'slide-img' > Image </p> 
			</div>
		);
	}
});


var Slides = React.createClass ({

	addNewTitleSlide: function() {
		var titleSlide = {
				id: Math.random(),
				type: 'Title',
				title : 'Enter title here'
		};

		this.props.onAddNewSlide(titleSlide);
	},
	addNewContentSlide: function() {
		var contentSlide = {
				id: Math.random(),
				type: 'Content',
				title: 'Enter title here',
				content : 'Enter content here'
		};

		this.props.onAddNewSlide(contentSlide);
	},
	addNewImageSlide: function() {
		var imageSlide = {
				id: Math.random(),
				type: 'Image',
				title: 'Enter title here',
				content : 'http://ict-rev.ecml.at/Portals/1/images/Inventory/Powerpoint.png'
		};

		this.props.onAddNewSlide(imageSlide);
	},

	render: function () {

		return (
			<div id="type-of-slides">
				<div>
					<h1 className = 'site-name' > Powerpoint </h1>	
					<div className = 'all-type-slides'>
						<TitleSlide addSlide={this.addNewTitleSlide}/>
						<ContentSlide addSlide={this.addNewContentSlide}/>
						<ImageSlide addSlide={this.addNewImageSlide}/>
					</div>
				</div>
				<div>
					{ this.props.allOverviewSlides }
				</div>
			</div>
		);
	}
});

// ReactDOM.render(<Slides data={storedSlides}/>, document.getElementById('type-of-slides'));


//overviewSlide 
var OverviewTitleSlide = React.createClass ({
	selectTitleSlideOverview: function(){
		this.props.select(this.props.id);
	},
	deleteSelectedSlide: function(){
		this.props.deleteS(this.props.id);
	},
	render: function () {
		return (
			<div className="overview-slide-title" onClick={this.selectTitleSlideOverview}> 
				<button onClick = {this.deleteSelectedSlide }> x </button>
				<p>  {this.props.title} </p>
			</div>
		);
	}
});

var OverviewContentSlide = React.createClass ({
	selectContentSlideOverview: function(){
		this.props.select(this.props.id);
		
	},
	deleteSelectedSlide: function(){
		this.props.deleteS(this.props.id);
	},
	render: function () {
		return (
			<div className="overview-slide-content" onClick={this.selectContentSlideOverview}> 
				<button onClick = {this.deleteSelectedSlide }> x </button>
				<p> {this.props.title} </p>
				<p className="overview-slide-textarea"> {this.props.content}</p>
			</div>
		);
	}
});

var OverviewImageSlide = React.createClass ({
	selectImageSlideOverview: function(){
		this.props.select(this.props.id);
	},
		deleteSelectedSlide: function(){
		this.props.deleteS(this.props.id);
	},
	render: function () {
		return (
			<div className="overview-slide-image" onClick={this.selectImageSlideOverview}> 
				<button onClick = {this.deleteSelectedSlide }> x </button>
				<p className="overview-slide-input"> {this.props.title}</p>
				<img src={this.props.image} />
			</div>
		);
	}
});

var OverviewSlides = React.createClass ({
	render: function () {
		var that = this;
		var allOverviewSlides = this.props.data.map(function(slide){
			if(slide.type === 'Title') {
				return( < OverviewTitleSlide  key = {slide.id} id={slide.id} title = {slide.title} select={that.props.selectSlide} deleteS={that.props.deleteSlide} /> );
			} else 
			if(slide.type === 'Content') {
				return(<OverviewContentSlide key = {slide.id} id={slide.id} title = {slide.title} content = {slide.content} select={that.props.selectSlide} deleteS={that.props.deleteSlide} /> );
			} else {
				return(<OverviewImageSlide key = {slide.id} id={slide.id} title = {slide.title} image = {slide.content} select={that.props.selectSlide} deleteS={that.props.deleteSlide}/> );
			}
		});

		return (
			<div id="overview-slides">
				{allOverviewSlides }
			</div>
		);
	}
});

// ReactDOM.render(<OverviewSlides data={storedSlides}/>, document.getElementById('overview-slides'));

//detailSlide

var DetailsTitleSlide = React.createClass ({

	getInitialState: function () {
	    return {title: this.props.slide.title, id: this.props.slide.id};
	},

	handleChange: function(event){
		this.setState({title: event.target.value});
		this.props.editSlide(this.state);
	},

	render: function () {
		return (
			<div className="detail-title-slide">
				<input placeholder="Enter title" value={this.state.title} onChange={this.handleChange} />
			</div>
		);
	}
});

var DetailsContentSlide = React.createClass ({

	getInitialState: function () {
	    return {
	    	title: this.props.slide.title, 
	    	content: this.props.slide.content, 
	    	id: this.props.slide.id
	    };
	},

	handleChange: function(event){
		this.setState({title: event.target.value, content: event.target.value});
		this.props.editSlide(this.state);
	},


	render: function () {
		return (
			<div className="detail-content-slide" >
				<input placeholder="Enter title" onChange={this.handleChange}/>
				<textarea placeholder="Enter content" onChange={this.handleChange}/>
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
			<div className="detail-content-slide">
				<input placeholder="Enter title"/>
				<img src='' />
			</div>
		);
	}
});

var DetailsSlides = React.createClass ({

	render: function () {

		var detailsSlideType;

		if(this.props.selectedSlide.type === 'Title'){
			detailsSlideType = <DetailsTitleSlide slide={this.props.selectedSlide} editSlide={this.props.editSlide}/>;
		} 
		if (this.props.selectedSlide.type === 'Content') {
			detailsSlideType = <DetailsContentSlide slide={this.props.selectedSlide} editSlide={this.props.editSlide} />;
		} 
		if (this.props.selectedSlide.type === 'Image') {
			detailsSlideType = <DetailsImageSlide slide={this.props.selectedSlide} editSlide={this.props.editSlide} />;
		}

		return (
			<div id="detail-slides">
				{detailsSlideType}
			</div>
		);
	}
});

// ReactDOM.render(<DetailsSlides />, document.getElementById('detail-slides'));


var App = React.createClass ({

	getInitialState: function() {
		return {
			data: [
				{
					id: 1,
					type: 'Title',
					title : 'Title1'
				},
				{
					id: 2,
					type: 'Content',
					title : 'Title2',
					content: 'Content'
				},
				{
					id: 3,
					type: 'Image',
					title : 'Title3',
					content: 'https://exbabylon.com/sites/all/themes/goodnex_sub/images/partners/microsoft.png'
				}
			],
			selectedSlide: {},
			deletedSlide: {}
		};
	},

	addNewSlide: function(slideType) {
		this.state.data.push(slideType);
		this.setState({data: this.state.data});
	},

	selectSlide: function(slideId) {
		var selectedSlide = this.state.data.filter(function(slide){
			if(slide.id === slideId) {
				return slide; 
			}
		})[0];
		this.setState({selectedSlide: selectedSlide});
	},

	deleteSlide: function(slideId){
		console.log(slideId);
		console.log(this.state.data);
		for(var i = 0; i < this.state.data.length; i++){
				if(this.state.data[i].id === slideId){
				//slideId = slideId -1;
				this.state.data.splice(slideId, 1);

				console.log(this.state.data);
			}
		}
		 this.setState({deleteSlide: this.state.data})
		 console.log(this.state.data);
	},

	editSlide: function(editedSlide){
			var positionInArray;
			for(var i = 0; i < this.state.data.length; i++){
				if(this.state.data[i].id === editedSlide.id){
					positionInArray = i;
				}
			}

			this.state.data[positionInArray].title = editedSlide.title;
			this.state.data[positionInArray].content = editedSlide.content;
			this.setState({data: this.state.data});
			// sa schimb obiectul din array
			// care are id-ul egal cu editedSlide.id
			// this.state.data[x] = editedSlide
	},
	render: function() {
		return (
			<div>
				<Slides onAddNewSlide = {this.addNewSlide} />
				<div className="content">
					<OverviewSlides data={this.state.data} selectSlide={this.selectSlide} deleteSlide={this.deleteSlide} />
					<DetailsSlides selectedSlide={this.state.selectedSlide} editSlide={this.editSlide}/>
				</div>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));