import React, { Component } from 'react';
import './preview.css';

class Preview extends Component {
    constructor() {
        super();

        this.state = {
            width: 800,
            height: 100,
            image: ''
        }
    }
    componentDidMount() {
        let pathSnippets = this.props.location.pathname.split('/');
        let dimension = pathSnippets[2].split('&');
        this.setState({
            width: dimension[0],
            height: dimension[1],
            image: "http://lorempixel.com/800/100/cats/"
        })
    }
    handlePrint() {
        console.log("Print");
        window.print();
        window.close();
    }
    render() {
        console.log(this.state.width + " " + this.state.height);
        var cropDim = {clip: 'rect(0px, '+ this.state.width +'px, '+ this.state.height +'px, 0px)'}
        return(
            <div className="preview">
                <div className="image-container">
                    <img src={this.state.image} alt="preview" width="800px" height="100px" className="image" style={cropDim}/>
                </div>
                <button onClick={this.handlePrint} className="print-btn">Print</button>
            </div>
        );
    }
}

export default Preview;