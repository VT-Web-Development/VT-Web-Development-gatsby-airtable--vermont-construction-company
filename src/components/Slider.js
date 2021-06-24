import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaQuoteRight } from 'react-icons/fa'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import Title from './Title'

const Slider = ({ customers = [] }) => {
  const [index, setIndex] = useState(0)

  const customerSlide = customers.map(item => {
    return item.node.data.body[0].items
  })

  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1
      if (index > customerSlide.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1
      if (index < 0) {
        index = customerSlide.length - 1
      }
      return index
    })
  }
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1
        if (index > customerSlide.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <Wrapper>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <Title title="Client Testimonials" />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          {customers.map(item => {
            return item.node.data.body[0].items.map(
              (customer, customerIndex) => {
                const { image1, name1, title1, quote1 } = customer
                const { alt } = image1
                const customerImage = getImage(image1.gatsbyImageData)

                return (
                  <MDBCol md="4" key={customerIndex}>
                    <FaQuoteRight className="icon" />

                    <article>
                      <GatsbyImage
                        image={customerImage}
                        className="img img-fluid rounded-circle hoverable"
                        alt={alt}
                      />
                      <h4>{name1.text}</h4>
                      <p className="title">{title1.text}</p>
                      <p className="text">{quote1.text}</p>
                    </article>
                  </MDBCol>
                )
              }
            )
          })}
        </MDBRow>
      </MDBContainer>
    </Wrapper>

    // <Wrapper className="section">
    //   <Title title="Client Testimonials" />
    //   <div className="section-center">
    //     {customers.map(item => {
    //       console.log(item.node.data.body[0])
    //       return item.node.data.body[0].items.map((customer, customerIndex) => {
    //         console.log(customer)
    //         const { image1, name1, title1, quote1 } = customer
    //         const { alt } = image1
    //         const customerImage = getImage(image1.gatsbyImageData)
    //         console.log(customerImage)
    //         let position = 'nextSlide'
    //         if (customerIndex === index) {
    //           position = 'activeSlide'
    //         }
    //         if (
    //           customerIndex === index - 1 ||
    //           (index === 0 && customerIndex === customerSlide.length - 1)
    //         ) {
    //           position = 'lastSlide'
    //         }
    //         return (
    //           <article className={position} key={customerIndex}>
    //             <GatsbyImage image={customerImage} className="img" alt={alt} />
    //             <h4>{name1.text}</h4>
    //             <p className="title">{title1.text}</p>
    //             <p className="text">{quote1.text}</p>
    //             <FaQuoteRight className="icon" />
    //           </article>
    //         )
    //       })
    //     })}

    //     <button className="prev" onClick={prevSlide}>
    //       <FiChevronLeft />
    //     </button>
    //     <button className="next" onClick={nextSlide}>
    //       <FiChevronRight />
    //     </button>
    //   </div>
    // </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  margin: 0 auto;
  text-align: center;

  article {
    background: var(--clr-grey-10);
    padding: 2rem;
    border-radius: var(--radius);

    @media (max-width: 800px) {
      margin: 0 0 2rem 0;
    }
  }

  .img {
    border-radius: 50%;
    margin-bottom: 1rem;
    max-width: 150px;
    height: 150px;
  }

  h2 {
    padding: 0 0 2rem 0;
  }

  h4 {
    text-transform: uppercase;
    color: var(--clr-black);
    margin-bottom: 0.25rem;
  }
  .title {
    text-transform: capitalize;
    margin-bottom: 0.75rem;
  }
  .text {
    max-width: 40em;
    margin: 0 auto;
    line-height: 2;
    color: var(--clr-grey-5);
  }
  .icon {
    font-size: 3rem;
    margin-top: 1.5rem;
    color: var(--clr-primary-5);
    position: absolute;
    transform: translate(-47%, -91%);
  }
`
export default Slider
