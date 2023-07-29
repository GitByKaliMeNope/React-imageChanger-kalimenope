import './App.css';
import ImageChanger from './imageChanger';
import PropTypes  from 'prop-types';

const Images = [
  {   
      
      src:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CO-LNiUayQer2VfMfYvoFAHaEf%26pid%3DApi&f=1&ipt=9e5b709427c50c94e6b3adfcdf82199861284099ebcb6b83b8b93d349f744644&ipo=images',
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
const Strings = [
  {
      String: ['Welcome to']
  },{
      String: ['KaliMeNope.de']
  },{
      String: ['Website about development']
  },{
      String: ['and nice Stuff like Hacker-Gadgets']
  }
]



function App() {
 
  
  return (
    <div className="App">
      <header className="App-header">
        <ImageChanger Images={Images} Strings={Strings} interval={3000} />
      
      </header>
    </div>
  );
}
App.propTypes = {
  Images: PropTypes.array.isRequired,
  Strings: PropTypes.array.strings.isRequired,
  interval: PropTypes.number.isRequired
}

export default App;
