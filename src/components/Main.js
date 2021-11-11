import React, {Component} from 'react'
import GitHubButton from 'react-github-btn'
import Footer from '../utilities/footer';
import '../App.css';
import GifLoader from 'react-gif-loader';
//import * as THREE from "three";

class Main extends Component {

    render() {
        return(<div className="container">
                    <div className="bg-pattern"></div>
                    <div className="hero">
                        <div className="row">
                            <div className="col-xs-3 offset-1">
                                <a href="https://aws.amazon.com/machine-learning/ai-services/" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../images/AIA-logos_transparent.png') } width="400" height="200" alt="AWS Logo" />
                                </a>
                            </div>
                            <div className="col-xs-4 offset-1">
                                    <h1>AIA AI Service Demos</h1>
                                    <p>
                                        Dịch vụ AIA AI cung cấp các công cụ trí tuệ nhân tạo nhằm hổ trợ cho doanh nghiệp trong vận hành, sản xuất và kinh doanh hiệu quả hơn.
                                        <br></br>
                                        Bạn đã sẵn sàng cho kỷ nguyên của dữ liệu: <i>từ dữ liệu đến dữ liệu lớn</i>.
                                        <br></br>
                                        <br></br>
                                        Sự phức tạp của việc sử dụng trí tuệ nhân tạo trong tự động hóa công nghiệp cũng như trong cách mạng 4.0 đòi hỏi các nhà sản xuất phải hợp tác với các chuyên gia để đạt được các giải pháp tùy chỉnh. Việc cố gắng xây dựng công nghệ cần thiết là rất tốn kém và hầu hết các nhà sản xuất không có đủ kỹ năng và kiến ​​thức cần thiết. Do vậy, từng doanh nghiệp cần phải xây dựng một lộ trình chi tiết trong trường hợp áp dụng các công nghệ AI vào sản xuất để khai thác được hiểu quả nhất các lợi ích từ nó.
                                    </p> 

                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xs-12">
                        <div className="row flex-container">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">AIA Pixguru</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">AIA Pixguru là một công cụ giúp bạn tách nền các sản phẩm để quảng cáo và thương mại một cách dễ dàng nhanh chóng và chuyên nghiệp, các dịch vụ tách nền ảnh và các thao tác nói không với photoshop.</p>
                                    <br></br>
                                    <a href="/pixguru" className="btn btn-info">Thử Pixguru</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Về Guru</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">AIA Pixguru Video</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">AIA Pixguru là một công cụ giúp bạn tách nền các Video sản phẩm để quảng cáo và thương mại một cách dễ dàng nhanh chóng và chuyên nghiệp. Hổ trợ các sáng tạo nội dung video hiệu quả trên nhiều nền tảng giải trí trực tuyến.</p>
                                    <br></br>
                                    <a href="/pixguruvideo" className="btn btn-info">Thử PixguruV</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Về GuruV</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Person Detection</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Ngày đó, ngày đó sẽ không xa xôi ,và chúng ta là người chiến thắng. Và ta biết dẫu lắm thác nghềnh cheo leo trên đường xa, đường gian nan ta vươn tới những đỉnh cao. Ngày đó, ngay đó sẽ không xa xôi và chúng ta là người chiến thắng. Đường đến những ngày vinh quang không còn xa, dù khó khăn vẫn còn.</p>
                                    <br></br>
                                    <a href="/" className="btn btn-info">Try Comprehend</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Face Recognition</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Cùng trèo lên đỉnh núi cao vời vợi. Để ta khắc tên mình trên đời. Dù ta biết gian nan đang chờ đón. Và trái tim vẫn âm thầm. Ta bước đi hướng tới muôn vì sao.</p>
                                    <br></br>
                                    <a href="/" className="btn btn-info">Try Rekognition</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Motion Detection</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Ngày đó, ngày đó sẽ không xa xôi. Và chúng ta là người chiến thắng. Đường đến những ngày vinh quang không còn xa. Dù khó khăn vẫn còn.</p>
                                    <br></br>
                                    <a href="/" className="btn btn-info">Try Translate</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Anomaly Detection</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Chặng đường nào trải bước trên hoa hồng. Bàn chân cũng thấm đau vì những mũi gai. Đường vinh quang đi qua muôn ngàn sóng gió. Lời hứa ghi trong tim mình. Vẫn bước đi hiên ngang đầu ngẩng cao.</p>
                                    <br></br>
                                    <a href="/" className="btn btn-info">Try Translate</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                           <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cloud Camera Monitor</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Và mặt trời rực sáng trên cao vời. Ban sức sống huy hoàng khắp muôn nơi. Cài vinh quang lên vai những người chiến thắng. Khoảnh khắc ghi trong tim hồng. Bao khó khăn ta cũng sẽ vượt qua.</p>
                                    <br></br>
                                    <a href="/" className="btn btn-info">Try Translate</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                           <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Face Mask Detection</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Việt Nam hỡi, Việt Nam ơi. Tự hào hát mãi lên Việt Nam ơi. Bước giữa nắng tràn. Đường phố nơi tôi ở. Từ thơ bé đã quen. Giữa đất nước này. Niềm tin luôn căng tràn. Đừng lo lắng, cười lên.</p>
                                    <br></br>
                                    <a href="/" className="btn btn-info">Try Translate</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                           <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Social Listening</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Từ nơi đồng xanh thơm hương lúa. Về nơi nhà cao xe giăng phố. Hòa một niềm tin reo ca (eh oh eh oh). Từ nơi đảo xa mênh mông sóng. Về nơi đồi cao bay mây trắng. Một vòng tay nối tròn Việt Nam.</p>
                                    <br></br>
                                    <a href="/" className="btn btn-info">Try Translate</a>
                                    <a href="https://bigdata-madesimple.com/want-get-started-artificial-intelligence-7-easy-steps/" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                        </div>
                        {/*
                        <div className="row">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Amazon Rekognition</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Amazon Rekognition allows you to automatically identify objects, people, text, scenes, and activities, in images and videos. Available for batch and streaming.</p>
                                    <a href="/rekognition" className="btn btn-info">Try Rekognition</a>
                                    <a href="https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Amazon Translate</h5>
                                    <div class="bar">
                                        <div class="emptybar"></div>
                                        <div class="filledbar"></div>
                                    </div>
                                    <p className="card-text">Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language to language translation.</p>
                                    <a href="/translate" className="btn btn-info">Try Translate</a>
                                    <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is.html" target="_blank" rel="noopener noreferrer" className="btn btn-info">Docs</a>
                                </div>
                            </div>
                    </div>
                        */}
                    </div>       
                    <div className="footer text-center">
                        <Footer></Footer>
                    </div>
                            
        </div>)
    }
}
export default Main