import React from 'react'
import about from '../assets/images/about.jpg'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro_inner">
        <h1 className='intro_tittle'>김수 웹,앱퍼블리셔</h1>
        <div className="intro_lines" aria-hidden="true">
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>
        <div className="intro_text">
            <div className="text">
                <div>talent is</div>
                <div>found at the end of the</div>
                <div>effort</div>
            </div>
            <div className="img">
                    <img src={about} alt="둥빈 코트"/>
                </div>
        </div>
        <div className="intro_lines bottom" aria-hidden="true">
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default Intro
