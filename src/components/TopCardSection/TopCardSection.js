import React, { Component} from 'react';
import './TopCardSection.css';
import tile from '../../Images/lake-inniscarra-thumb.jpg';
import thumbnail from '../../Images/lake-inniscarra-trainer.jpg';
import timer from '../../Images/icn_timer_line.png';
import metric from '../../Images/icn_distance_line.png';
import tile2 from '../../Images/performance-series-thumb.jpg';
import thumbnail2 from '../../Images/performance-series-trainer.jpg';
import playlist from '../../Images/icn_playlist.svg';
import tile3 from '../../Images/slow-pulls-thumb.jpg';
import thumbnail3 from '../../Images/slow-pulls-trainer.jpg';
import tile4 from '../../Images/20-minutes-to-toned-thumb.jpg';
import thumbnail4 from '../../Images/20-minutes-to-toned-trainer.jpg';
import tile5 from '../../Images/charles-race-thumb.jpg';
import thumbnail5 from '../../Images/charles-race-trainer.jpg';
import tile6 from '../../Images/full-body-hiit-thumb.jpg';
import thumbnail6 from '../../Images/full-body-hiit-trainer.jpg';
import tile7 from '../../Images/kafue-river-thumb.jpg';
import thumbnail7 from '../../Images/kafue-river-trainer.jpg';
import tile8 from '../../Images/shred-and-burn-thumb.jpg';
import thumbnail8 from '../../Images/shred-and-burn-trainer.jpg';

class TopCardSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addClassName: ''
        };
    };

    toggleClassName = (e) => {
        const clicked  = e.target.id
        if(this.state.addClassName === clicked) {
            this.setState({
                addClassName: ''
            });
        } else {
            this.setState({addClassName:clicked})
        }
    };

    render() {
        return (
            <div className='cardWrapper'>
                <div id='one' className={`cards oddCards ${this.state.addClassName === 'one' ? 'activeCard': ''}`} onClick={this.toggleClassName}>
                    <div className='topHalf'>
                        <img src={tile} className='tileImgs ifitImg' title='Ireland Pyramid' alt='Ireland Pyramid'/>
                    </div>
                    <div className='bottomHalf'>
                        <p className='title firstTitle writing'>Lake Inniscarra, Ireland&mdash; Pyramid</p>
                        <img src={thumbnail} className='smallImg ifitImg' alt='Ireland Pyramid' />
                    </div>
                    <div className='statsWrapper'>
                        <img src={timer} className='icons' alt='timer'/>
                        <p className='stats writing'>30:53</p>
                        <img src={metric} className='icons' alt='metric'/>
                        <p className='stats writing'>6,248 M</p>
                    </div>
                    <p className='details writing'>view details</p>
                </div>
                <div id='two' className={`cards evenCards ${this.state.addClassName === 'two' ? 'activeCard': ''}`} onClick={this.toggleClassName}>
                    <div className='topHalf'>
                        <div className='imgWrapper'>
                            <div className='overlayTop'></div>
                            <img src={tile2} className='tileImgs ifitImg' title='Performance Series' alt='Performance Series'/>
                        </div>
                        <div className='workoutWrapper'>
                            <p className='writing overlayText numbers'>9</p>
                            <p className='writing overlayText workout'>workouts</p>
                            <img src={playlist} className='tileImgs ifitImg playlist' title='Playlist' alt='Playlist'/>
                        </div>
                    </div>
                    <div className='bottomHalf'>
                        <p className='title firstTitle writing'>Performance Series</p>
                        <img src={thumbnail2} className='smallImg ifitImg' alt='Performance Series' />
                    </div>
                </div>
                <div id='three' className={`cards oddCards ${this.state.addClassName === 'three' ? 'activeCard': ''}`} onClick={this.toggleClassName}>
                    <div className='topHalf'>
                        <img src={tile3} className='tileImgs ifitImg' title='Slow Pulls and Fast Intervals' alt='Slow Pulls and Fast Intervals'/>
                    </div>
                    <div className='bottomHalf'>
                        <p className='title firstTitle writing'>Slow Pulls and Fast Intervals</p>
                        <img src={thumbnail3} className='smallImg ifitImg' alt='Slow Pulls and Fast Intervals' />
                    </div>
                    <div className='statsWrapper'>
                        <img src={timer} className='icons' alt='timer'/>
                        <p className='stats writing'>44:13</p>
                        <img src={metric} className='icons' alt='metric'/>
                        <p className='stats writing'>9,948 M</p>
                    </div>
                </div>
                <div id='four' className={`cards evenCards lastCard ${this.state.addClassName === 'four' ? 'activeCard': ''}`} onClick={this.toggleClassName}>
                    <div className='topHalf'>
                        <div className='imgWrapper'>
                            <div className='overlayTop'></div>
                            <img src={tile4} className='tileImgs ifitImg' title='20 Minutes to Toned' alt='20 Minutes to Toned'/>
                        </div>
                        <div className='workoutWrapper'>
                            <p className='writing overlayText numbers'>12</p>
                            <p className='writing overlayText workout'>workouts</p>
                            <img src={playlist} className='tileImgs ifitImg playlist' title='Playlist' alt='Playlist'/>
                        </div>
                    </div>
                    <div className='bottomHalf'>
                        <p className='title firstTitle writing'>20 Minutes to Toned</p>
                        <img src={thumbnail4} className='smallImg ifitImg' alt='20 Minutes to Toned' />
                    </div>
                </div>
                {/* // bottom card section */}
                <div className='cardWrapper2'>
                     <div id='five' className={`cards oddCards ${this.state.addClassName === 'five' ? 'activeCard': ''}`} onClick={this.toggleClassName}>
                        <div className='topHalf'>
                            <img src={tile5} className='tileImgs ifitImg' title='Charles Race' alt='Charles Race'/>
                        </div>
                        <div className='bottomHalf'>
                            <p className='title firstTitle writing'>Charles Race, Boston, Massachusetts</p>
                            <img src={thumbnail5} className='smallImg ifitImg' alt='Charles Race' />
                        </div>
                        <div className='statsWrapper'>
                            <img src={timer} className='icons' alt='timer'/>
                            <p className='stats writing'>36:22</p>
                            <img src={metric} className='icons' alt='metric'/>
                            <p className='stats writing'>8,648 M</p>
                        </div>
                    </div>
                     <div id='six' className={`cards evenCards ${this.state.addClassName === 'six' ? 'activeCard': ''}`} onClick={this.toggleClassName}>
                        <div className='topHalf'>
                            <div className='imgWrapper'>
                                <div className='overlayTop'></div>
                                <img src={tile6} className='tileImgs ifitImg' title='Full-Body HIIT Series' alt='Full-Body HIIT Series'/>
                            </div>
                            <div className='workoutWrapper'>
                                <p className='writing overlayText numbers'>12</p>
                                <p className='writing overlayText workout'>workouts</p>
                                <img src={playlist} className='tileImgs ifitImg playlist' title='Playlist' alt='Playlist'/>
                            </div>
                        </div>
                        <div className='bottomHalf'>
                            <p className='title firstTitle writing'>Full-Body HIIT Series</p>
                            <img src={thumbnail6} className='smallImg ifitImg' alt='Full-Body HIIT Series' />
                        </div>
                    </div>
                     <div id='seven' className={`cards oddCards ${this.state.addClassName === 'seven' ? 'activeCard': ''}`} onClick={this.toggleClassName}>
                        <div className='topHalf'>
                            <img src={tile7} className='tileImgs ifitImg' title='Power Stroke Pyramid' alt='Power Stroke Pyramid'/>
                        </div>
                        <div className='bottomHalf'>
                            <p className='title firstTitle writing'>Kafue River, Zambia&mdash; Power Stroke Pyramid</p>
                            <img src={thumbnail7} className='smallImg ifitImg' alt='Power Stroke Pyramid' />
                        </div>
                        <div className='statsWrapper'>
                            <img src={timer} className='icons' alt='timer'/>
                            <p className='stats writing'>22:22</p>
                            <img src={metric} className='icons' alt='metric'/>
                            <p className='stats writing'>4,660 M</p>
                        </div>
                    </div>
                    <div id='eight' className={`cards evenCards lastCard ${this.state.addClassName === 'eight' ? 'activeCard': ''}`} onClick={this.toggleClassName}>
                        <div className='topHalf'>
                            <div className='imgWrapper'>
                                <div className='overlayTop'></div>
                                <img src={tile8} className='tileImgs ifitImg' title='Shred & Burn Series' alt='Shred & Burn Series'/>
                            </div>
                            <div className='workoutWrapper'>
                                <p className='writing overlayText numbers'>16</p>
                                <p className='writing overlayText workout'>workouts</p>
                                <img src={playlist} className='tileImgs ifitImg playlist' title='Playlist' alt='Playlist'/>
                            </div>
                        </div>
                        <div className='bottomHalf'>
                            <p className='title firstTitle writing'>Shred & Burn Series</p>
                            <img src={thumbnail8} className='smallImg ifitImg' alt='Shred & Burn Series' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopCardSection;