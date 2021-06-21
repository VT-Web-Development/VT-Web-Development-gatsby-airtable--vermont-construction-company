import React from 'react'
import styled from 'styled-components'

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  const [index, setIndex] = React.useState(0)

  console.log(projects)
  const projectDatas = projects.map(projectData => {
    console.log(projectData)
    return projectData.node.data.body[0].items
  })
  console.log(projectDatas)

  const tempTypes = [
    ...new Set(
      projectDatas.map(projectData => {
        console.log(projectData)

        return projectData.map(item => {
          console.log(item.type.text)
          return item.type.text
        })
      })
    ),
  ]

  const types = tempTypes.map(item => {
    console.log(item)
    return ['all', ...item]
  })
  console.log(types)

  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex)
    if (type === 'all') {
      setBackToAll()
    } else {
      const tempProjects = projectDatas.map(projectData => {
        return projectData.map(item => {
          return item.type.text === type
        })
      })
      setProjects(tempProjects)
      console.log(tempProjects)
    }
  }

  return (
    <Wrapper>
      {types.map(item => {
        console.log(item)
        return item.map((type, typeIndex) => {
          console.log(type)
          return (
            <button
              key={typeIndex}
              className={index === typeIndex ? 'active' : undefined}
              onClick={() => showProjects(type, typeIndex)}
            >
              {type}
            </button>
          )
        })
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export default SearchButtons
