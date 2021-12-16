import React, {Component,useState} from 'react';
import NavBar from '../utilities/navbar';
import Footer from '../utilities/footer';
import { Form } from 'semantic-ui-react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { ComparisonSlider } from 'react-comparison-slider';
import ReactPlayer from 'react-player'
import GifLoader from 'react-gif-loader';


var dataUriToBuffer = require('data-uri-to-buffer');
var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1'; 
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:1956382a-b3f6-472c-9a8d-3a246853c917'});


class Rekognition extends Component {
    constructor(props){
        super(props);

        this.state = {
            image: '',
            resultMessage: '',
            resultLabels: [],
            imageSrc: '',
            result_image: '',
            file : '' ,
            load : false ,

        }
        this.handleCapture = this.handleCapture.bind(this);
        this.sendImageToRekognition = this.sendImageToRekognition.bind(this);

    }

	compareSlider = () => {
	  return (
	    <ComparisonSlider
	      defaultValue={50}
	      itemOne={<div className="bg-red-200"> <img id="target" src={this.state.image}/> </div>}
	      itemTwo={<div className="bg-blue-200"> <img id="result" src={this.state.result_image}/> </div>}
	      aspectRatio={16 / 9}
	      orientation="horizontal"
	    />
	  );
	};

    setRef = webcam => {
      this.webcam = webcam;
    };

	changeHandler = (event) => {
		console.log(event.target.files[0])
		 if (event.target.files && event.target.files[0]) {
		   this.setState({
		     image: URL.createObjectURL(event.target.files[0]),
		     file: event.target.files[0]
		   });
		}
	};

	handleSubmission = () => {
    this.setState({
         load: true,
       }); 
		console.log(this.state.file);
		let formData = new FormData();
        formData.append("file", this.state.file);
		axios({
		    method: 'post',
		    url: 'http://118.69.190.178:5001/remove_video',
		    data: formData,
		    responseType: 'blob',
		    headers: {
		        'Content-Type': `multipart/form-data`,
		    },
		}).then((res) => {  
			console.log( res );		   
			this.setState({
		     result_image: URL.createObjectURL(res.data),
         load: false,
		   });   
		});
	};

    handleCapture=() => {

      const imageSrc = this.webcam.getScreenshot()
      this.sendImageToRekognition(imageSrc)
    }
    
    sendImageToRekognition = (imageSrc) => {
        // convert image to buffer from base64
        let buffer = dataUriToBuffer(imageSrc);
    };

    
    render(){
    	// const myName = this.compareSlider();
        let result, labels;
        if(this.state.resultMessage !== ''){
          result = <p>{this.state.resultMessage}</p>
          labels = this.state.resultLabels.map((label, i) => {
              return (<tr key={i}>
                        <td>
                          {label.Name}
                        </td>
                        <td>
                          {label.Confidence}
                        </td>
                    </tr>
              )
            })
        }
        const videoConstraints = {
          facingMode: "user"
        };
        return (
          <div className="App">
            <NavBar/>
            <div className="container">
              <div className="content-wrap">
                <div className="row text-left">
                <h1>Pixguru Remove Video Background</h1>
                </div>
                <div class="titlebar"></div> 
                <div className="row text-left">
                <p> <h3>Đem lại giải pháp tách sản phẩm khỏi nền video một cách đơn giản chỉ bằng một thao tác !  </h3></p>
                <p> Sản xuất video không có nền được sử dụng để yêu cầu các kỹ thuật phức tạp và khó hiểu như khóa sắc độ và màn hình xanh. Với tính năng Không màn hình, bạn có thể ghi lại cảnh quay của mình ở bất kỳ đâu, sau đó chỉ cần loại bỏ nền. Sản phẩm đang được phát triển bởi AIA - FTI </p>
              </div>
              		<div class="row">
            <GifLoader
                loading={this.state.load}
                imageSrc="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif"
                overlayBackground="rgba(0,0,0,0)"
            />
						<div>
						<input type="file" name="file" text="" className="btn btn-info" onChange={this.changeHandler} accept="video/*" />
						</div>

						<div>
              <button type="button" className="btn btn-info" onClick={this.handleSubmission}>Submit</button>
						</div>
					</div>
              		<div class="row">
						<div class="column">
              <ReactPlayer url={this.state.image} controls={true} />
						</div>
						<div class="column">
							<ReactPlayer url={this.state.result_image} controls={true} />
						</div>
					</div>
            </div>
            <Footer/>
            </div>
        </div>
        )
    }
}

export default Rekognition