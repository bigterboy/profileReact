import React from 'react';
import ImgInfor from './maincontent/ImgInfor';
import Skill from './maincontent/Skill';
import Experience from './maincontent/Experience';
import Education from './maincontent/Education';
import Skills from './maincontent/Skills';
import Interests from './maincontent/Interests';
import '../App.css'

export function Main() {
  return (
    <main>
      <div class="container">
        <ImgInfor/>
        <Skill/>
        <Experience/>
        <Education/>
        <Skills/>
        <Interests/>
      </div>
    </main>
  );
}
