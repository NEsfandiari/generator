import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

AOS.init();

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      topTxt: '', 
      botTxt: '', 
      img: '',
      id: 0,
      memes: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideElement = this.hideElement.bind(this);
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    const {topTxt, botTxt, img, id} = this.state
    alert('A meme was submitted')
    this.setState({
      memes: [...this.state.memes, {topTxt: topTxt.toUpperCase(), botTxt: botTxt.toUpperCase(), img: img, id: id}]
    })
    this.setState({
      topTxt: '', 
      botTxt: '', 
      img: '',
      id: id + 1
    })
    event.preventDefault();
  }
  
  hideElement(e){
    e.target.parentNode.style = 'display: none';
  }
 
  
  render() {
    const memeList = this.state.memes.map((meme)=>{
        return(
            <div className='meme' data-aos="zoom-in" data-aos-duration="500" onClick={this.hideElement}  id={meme.id.toString()}>
              <div className='topTxt'>{meme.topTxt}</div>
              <img src={meme.img} alt='The medium is the Massage'/>
              <div className='botTxt'>{meme.botTxt}</div>
            </div>
          )
        })
    return (
     <div className="App">
     <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Blogger+Sans:300,400,500,700,300i,400i,500i,700i"/>
        <header>
          <h1>Meme Generation App</h1>
          <h4>Kilroy Was Here - Kilroy</h4>
        </header>
        <div className='form'>
          <div className="labels">
            <h2>Image Url</h2>
            <h2>Text on Top</h2>
            <h2>Text on Bottom </h2>
            <h2>Submit</h2>
          </div>
          <form className='inputs' onSubmit={this.handleSubmit}>
             <input type='url' size="100" placeholder='What Will you Create?!?!' value ={this.state.img} onChange={this.handleChange} name='img'/>
             <input type='text' size="100" placeholder='(Optional)' value={this.state.topTxt} onChange={this.handleChange} name='topTxt'/>
             <input type='text' size="100" placeholder='(Optional)' value={this.state.botTxt} onChange={this.handleChange} name='botTxt'/>
             <input id='submit' type='submit' value='%^)->-<' onClick={this.handleSubmit}/>
          </form>
        </div>
        <hr/>
        <p>Click Images to Delete!</p>
        <div className='memes'>
          {memeList}
        </div>
      </div>
    );
  }
}

export default App;
