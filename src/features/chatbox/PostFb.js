import  { Component  } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { fetchPostText ,removeSelectedUrl} from "./actions";

import GifSearch from '../SearchModule/GifSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap'
class Postbox extends Component {
     constructor(props) {
        super(props);
       
      
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
       
        this.state = {
            postText: '',
            isPost :false,
            show:false
           
        };
    
    }
 
    handleChange(event) {
        this.setState({postText: event.target.value});
    }
    handleClick = () => {
        this.props.fetchPostText({text : this.state.postText ,gif : this.props.url});
        this.props.removeSelectedUrl("");
        this.setState({postText: ''});
      }
    handleShow =() =>{
        this.setState({show: true});

    }
    handleClose = () =>{
        this.setState({show:false});
    }
   
    render() {
       
        let { postData } = this.props;
         return (
            <div className="createPostContainer">
               <div className="createPostWrapper"> 
                    <h3>Create post</h3>
                        <div>
                            <textarea type="text" className="postText" name="post" id="post" value={this.state.postText}  placeholder="What is on your mind?" onChange={this.handleChange} />
                        </div>
                    <div>
                    <div>
                    <img src={this.props.url}></img>
                    
                    </div>
                    <Button variant="outline-success" onClick={this.handleShow} >Choose GIF</Button>
                        
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose} scrollable>
                        <Modal.Header closeButton>
                            <Modal.Title>  Choose a GIF </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <GifSearch>
                                
                                </GifSearch>
                        </Modal.Body>
                    
                    </Modal>
                
                    <div>
                    <Button variant="primary" size="lg" onClick={this.handleClick} disabled={!this.state.postText}>Post</Button>
                    
                    </div>
                </div>
               
                <div className="postedWrapper">
                   <h4> display posted data</h4>
                    {postData  == null || postData[0] == null ? <div /> : <div className="">
                
                        {postData.map(p =>
                    
                            <div className="postedContainer">
                                <div className="postedText">
                                    {p.text}
                                </div>
                                <div className="postedGIF">
                                    <img src={p.gif}></img>
                                </div>
                            </div>
                        )}
                    </div>}
                    
                </div>
              
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { postData: state.postData ,url :  state.gifData.url};
}

export default connect(mapStateToProps, { fetchPostText ,removeSelectedUrl})(Postbox);
