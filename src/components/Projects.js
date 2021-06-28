import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SRLWrapper } from 'simple-react-lightbox'
import { useLightbox } from 'simple-react-lightbox'

import PageHeaderTitle from './PageHeaderTitle'
import Title from './Title'

const Projects = ({ projects: data, page }) => {
  const [projects, setProjects] = useState(data)
  const { openLightbox, closeLightbox } = useLightbox()

  // const setBackToAll = () => {
  //   setProjects(data)
  // }

  const projectTitle = projects.map(projectData => {
    // console.log(projectData.node.data.title)
    return projectData.node.data.title.text
  })

  // console.log(projectTitle)
  const projectDatas = projects.map(projectData => {
    return projectData.node.data.body[0].items.map(item => {
      // console.log(item)
      return item
    })
  })

  // console.log(projectDatas)
  return (
    <Wrapper className="section">
      {!page ? (
        <Title title={projectTitle || 'projects'} />
      ) : (
        <PageHeaderTitle pageHeaderTitle={projectTitle || 'projects'} />
      )}

      {/* {page && (
        <SearchButtons
          projects={data}
          setProjects={setProjects}
          setBackToAll={setBackToAll}
        />
      )} */}
      <SRLWrapper>
        <div className="section-center">
          {projectDatas.map(projectData =>
            projectData.map(item => {
              {
                /* console.log(item) */
              }
              const { alt } = item.image
              const image = item.image.gatsbyImageData

              return (
                <button key={alt} onClick={() => openLightbox()}>
                  <article>
                    <div className="image-container">
                      <GatsbyImage
                        image={getImage(image)}
                        alt={alt}
                        className="img"
                        srl_gallery_image="true"
                      />
                      <div className="info">
                        <h3>{alt}</h3>
                      </div>
                    </div>
                  </article>
                </button>
              )
            })
          )}
        </div>

        {!page && (
          <button className="custom-button">
            <Link to="/projects">all projects</Link>
          </button>
        )}
      </SRLWrapper>
      {/* <div className="footer-section"> */}
      {/* {!page && (
        <button className="call-to-action">
          <Link to="/projects">all projects</Link>
        </button>
      )} */}
      {/* </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    /* max-width: var(--max-width); */
    display: grid;
    /* gap: 2rem; */
    /* safari workaround */
    /* grid-gap: 2rem; */
    .img {
      height: 100%;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .image-container {
      height: 15rem;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);

      @media (max-width: 800px) {
        margin: 0 0 2rem 0;
      }

      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .container {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .container {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .container {
        height: 15rem;
      }
    }
  }

  button.custom-button {
    margin-top: 5rem;
    width: 10rem;
    font-size: 1.2rem;

    button.custom-button > a {
      display: block;
      width: 9rem;
      text-align: center;
      margin: 0 auto;
    }
  }
`
export default Projects
