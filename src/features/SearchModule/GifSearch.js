import  { Component  } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { fetchProfile ,fetchSelectedUrl} from "./actions";
import debounce from 'lodash.debounce';

class GifSearch extends Component {
    
    constructor(props) {
        super(props);
        this.fatchProfiles = debounce(this.fatchProfiles.bind(this), 1000);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickForSelectGif = this.handleClickForSelectGif.bind(this);

        this.state = {
            searchValue: '',
            selectedUrl:''
        };
    
    }
    handleChange(evnt) {
       this.setState({
            searchValue: evnt.target.value
        });
        this.fatchProfiles( evnt.target.value);
    }
    fatchProfiles(evnt){
        this.props.fetchProfile(evnt);
    }
    handleClickForSelectGif(evnt){
        this.props.fetchSelectedUrl( evnt.target.src);
    }
    render() {
        let { gifs } = this.props; 
        return (
            <div className="">
               <div>
                    <input type="text" className="searchGifText" name="search" id="search" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search" />
                </div>
                {gifs  == null || gifs[0] == null ? <div /> : <div className="">
                    <div>
                        {gifs.map(p =>
                            <div key={p.id}>
                                <img src={p.images.preview_gif.url}  className="Gif" onClick={this.handleClickForSelectGif} ></img>
                        </div>)}
                    </div>

                </div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { gifs: state.gifData.profile, url: state.gifData.url};
}

export default connect(mapStateToProps, { fetchProfile ,fetchSelectedUrl})(GifSearch);
