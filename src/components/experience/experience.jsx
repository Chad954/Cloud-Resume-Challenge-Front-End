import React from 'react'
import "./experience.css"
import {BsCloudCheck} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCloudCheck classname='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheck classname='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheck classname='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheck classname='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
          
        </div>
{/* END OF FRONTEND */}
        <div className="experience__backend_cloud">
        <h3>Cloud / Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCloudCheck classname='experience__details-icon' />
              <div>
                <h4>AWS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheck classname='experience__details-icon' />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheck classname='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheck classname='experience__details-icon' />
              <div>
                <h4>Terraform</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience