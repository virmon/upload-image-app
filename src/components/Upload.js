import React, { Component } from 'react';
import './upload.css';

class Upload extends Component {
    constructor() {
        super();
        this.state = {
            isDisabled: true,
            image: false,
            cropWidth: 0,
            cropHeight: 0
        }
        this.clearAllInput = this.clearAllInput.bind(this);
        this.cropImage = this.cropImage.bind(this);
        this.saveImage = this.saveImage.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleUpload(event) {
        if(event.target.value !== "") {
            if(event.target.size > 1000000) {
                alert("File too big!");
                event.target.value = "";
            } else {
                this.setState({
                    image: true
                })
            }
        } else {
            this.setState({
                isDisabled: true,
                image: false
            })
        }
    }
    clearAllInput() {
        this.width.value = '';
        this.height.value = '';
    }
    cropImage(width, height) {
        let cropWidth = width;
        let cropHeight = height;
        if(cropWidth === "" && cropHeight === "") {
            cropWidth = 800;
            cropHeight = 100;
        }
        this.setState({
            cropWidth: cropWidth,
            cropHeight: cropHeight
        })
        console.log("width: " + cropWidth + ", height: " + cropHeight);
    }
    saveImage(imageFile) {
        if(imageFile) {
            this.cropImage(this.width.value, this.height.value);
            this.setState({isDisabled: false});
            return Promise.resolve("http://lorempixel.com/800/100/cats/");
        } else {
            this.setState({isDisabled: true});
            console.log("not");
        }
    }
    printPreview(width, height) {
        console.log("print preview");
        window.open("/preview/"+width+"&"+height);
    }
    render() {
        return(
            <div className="upload-container">
                <input type="file" accept="image/*" className="file" onChange={this.handleUpload}/><br/>
                <div className="crop">
                    <input type="number" max="800" min='0' placeholder="width" ref={el => this.width = el} />
                    <input type="number" max="100" min='0' placeholder="height" ref={el => this.height = el} />
                    <button onClick={this.clearAllInput} className="clear" >Clear</button>
                </div>
                <button onClick={() => this.saveImage(this.state.image)} className="save" >Save</button>
                <button onClick={() => this.printPreview(this.state.cropWidth, this.state.cropHeight)} className="preview" disabled={this.state.isDisabled}>Print Preview</button>
            </div>
        );
    }
}

export default Upload;