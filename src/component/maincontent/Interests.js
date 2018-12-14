import React, {Component} from 'react';

class Interests extends Component {
  render(){
    return(
      <section>
      <div class="section-title">Interests</div>
        <div class="interests-container">
          <img src={require('../../img/guitar.svg')}/>
          <img src={require('../../img/piano.svg')}/>
          <img src={require('../../img/controller.svg')}/>
          <img src={require('../../img/headphones.svg')}/>
          <img src={require('../../img/monitor.svg')}/>
          <img src={require('../../img/camera.svg')}/>
          <img src={require('../../img/video.svg')}/>
          <img src={require('../../img/cutlery.svg')}/>
        </div>
    </section>
    );
  }
}


export default Interests;