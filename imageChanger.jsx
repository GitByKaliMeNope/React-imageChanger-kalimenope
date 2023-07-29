import React from "react";
import PropTypes from 'prop-types';




const getNextString = (Strings, currentString) =>{
    if (currentString === Strings.length - 1){
        return 0;
    }
    return currentString +1;
}
const getNextIndex = (Images, currentIndex) =>{
    if (currentIndex === Images.length -1 ) {
        return 0;
    }
        return currentIndex + 1 ;
    
}


class ImageChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            String :  [''],
            imageIndex:  0,
            stringIndex: 0
            
        };
       this.componentDidMount = (props) => {
        this.intervalId = setInterval(() =>{
            this.changeImage();
        }, this.props.Interval)
       }
       this.componentWillUnmount = (props) => {
        clearInterval(this.props.intervalId);
       }
       this.changeImage = (props) => {
        this.setState((state, props)=> {
            return{
                imageIndex: getNextIndex(this.props.Images, state.imageIndex),
                stringIndex: getNextString(this.props.Strings, state.stringIndex)
            }
        })
       }


    }
    render(){
        const currentImage = this.props.Images[this.state.imageIndex];
        const currentString = this.props.Strings[this.state.stringIndex];
       

        return (
            <>
            <h1>{currentString['String']}</h1>
            <img imageIndex={this.state.imageIndex} 
            src={currentImage.src} alt={currentImage.alt} />
            </>
            );
    }

}
ImageChanger.propTypes = {
 Images: PropTypes.array.isRequired,
 imageIndex: PropTypes.number.isRequired,
 Strings: PropTypes.array.Strings.isRequired,
 String: PropTypes.string.isRequired,
 stringIndex: PropTypes.number.isRequired
};

export default ImageChanger;