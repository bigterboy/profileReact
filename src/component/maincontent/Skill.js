import React, {Component} from 'react';



class Skill extends Component {
  render() {
    return (
      <section>
        <div class="section-title">SKILL</div>
        <div class="skills">
          <li>
            <h3>HTML</h3><span class="bar"><span class="html"></span></span>
          </li>
          <li>
            <h3>CSS3</h3><span class="bar"><span class="css3"></span></span>
          </li>
          <li>
            <h3>JQUERY</h3><span class="bar"><span class="jquery"></span></span>
          </li>
          <li>
            <h3>JAVASCIPT</h3><span class="bar"><span class="javascipt"></span></span>
          </li>
        </div>
    </section>
    );
  }
}

export default Skill;