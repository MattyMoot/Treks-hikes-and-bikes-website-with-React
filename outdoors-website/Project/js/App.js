import React, { Component } from "react"
import ReactDom from "reactdom"
import ReactPlayer from 'react-player'


class video extends Component {
    state = {
        url: 'https://www.youtube.com/watch?v=t3rKhEETmlk',
        pip: false,
        playing: true,
        controls: false,
        light: false,
        muted: true,
        played: 0,
        loaded: 100,
        playbackRate: 1.0,
        loop: true,
    }
    
    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    }

    handleProgress = state => {
        console.log('onProgress', state)
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    ref = player => {
        this.player = player
    }

    render() {
        const { url, pip, playing, controls, light, muted, played, loaded, playbackRate, loop } = this.state
        const SEPARATOR = ' . '

        return (
            <div className='video'>
                <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='100%'
                    height='100%'
                    url={url}
                    />
            </div>
        )
    }
}


class navigation extends Component {
    render() {
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    }
}

class nameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: '', Counrty: '', description: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('Thank you for Submiting the form' + this.state.Name, 'from' + this.state.Counrty, 'your favourite place in New Zealand is:' + this.state.description)
        event.preventDefault();
    }

    render() {
    }
}


const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}


export default all 

const container = document.getElementById('video')
render(<video />, container)

const domContainer = document.querySelector('#like_button_container');

ReactDom.render(navigation)
