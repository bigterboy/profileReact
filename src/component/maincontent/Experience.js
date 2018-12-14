import React,{Component} from 'react';

class Experience extends Component{
  render(){
    return(
      <section>
      <div class="section-title">Experience</div>
      <div>
        <div class="job">
          <div class="job-title-container">

            <div>
              <div class="job-company">Facebook</div>
              <div class="job-title">Back-End Web Developer</div>
            </div>

            <div>
              Jan 2013 - Jan 2014
            </div>

           </div>  {/*--end job-title container--*/}

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime.</p>
        </div>{/*-- end job -- */}


        <div class="job">
          <div class="job-title-container">
            <div>
              <div class="job-company">Facebook123</div>
              <div class="job-title">Back-End Web Developer123</div>
            </div>
            <div>
              Jan 2014 - Jan 2015
            </div>
          </div> {/*--end job-title container--*/}
          <p>123Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime.</p>
        </div> {/*-- end job -- */}



      </div>
    </section>
    );
  }
}


export default Experience;