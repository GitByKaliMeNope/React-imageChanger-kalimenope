import React from "react";

const Images = [
    {   
        
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFZN1C5pJ0WpFbrtY3CNhFvhyhiDEzlBRqw&usqp=CAU',
        alt:'fuckYou'
    },
    {
       
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yLWlhkn4jj3xufMaHayS7keZ0Ary2KfNmA&usqp=CAU',
        alt:'fuckYou2'
    },
    {
      
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6y_fltB6Mn2NtTbdRcmphZg-h_TTDUZqrGA&usqp=CAU',
        alt:'fuckYou3'
    }
]

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
            Welcome :  ['Welcome to: '],
            imageIndex:  0,
           
            
        };
       
        setInterval(() =>{

            this.setState({Welcome: ['KaliMeNope.de']})
                
            this.setState({imageIndex: 
                getNextIndex(Images, this.state.imageIndex)})
            
            
        
        }, 3000)
        

    }
    render(){
        const currentImage = Images[this.state.imageIndex];
        
       

        return (
            <>
            <h1>{this.state.Welcome}</h1>
            <img imageIndex={this.state.imageIndex} 
            src={currentImage.src} alt={currentImage.alt} />
            </>
            );
    }

}
export default ImageChanger;