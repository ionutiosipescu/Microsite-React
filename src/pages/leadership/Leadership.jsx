import React, { useState, useEffect } from "react"
import { HeroSection, ProfessionalsCardSmall } from "../../components/cards"
import styled from "styled-components"
import { tags, leadersList, arr, links } from "../../utils/data"

import YellowButton from "../../components/buttons/YellowButton"
import DOMPurify from "dompurify"
import { useDocumentTitle } from "../../hook"
import { Spinner } from "../../components"

import { useDispatch, useSelector } from "react-redux"
import { fetchHLSLeaders, fetchHLSPersons } from "../../store/actions/leaders"

export const LeaadersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
`

const Leadership = () => {
  const dispatch = useDispatch()

  const leaders = useSelector(state => state.leaders.filteredLeaders)
  const persons = useSelector(state => state.leaders.industryPersons)

  const [openedState, setOpenedState] = useState(
    Array.from(leaders ?? [], () => false)
  )
  const [openedStatePersons, setOpenedStatePersons] = useState(
    Array.from(persons ?? [], () => false)
  )

  const handleDisplay2 = (index, array, state, setState) => {
    if (!state[index]) {
      let arr = Array.from(array, () => false)
      arr[index] = true
      setState([...arr])
    } else {
      setState(Array.from(array, () => false))
    }
  }

  let arr = [<YellowButton />, <ProfessionalsCardSmall />]

  useEffect(() => {
    dispatch(fetchHLSLeaders())
    dispatch(fetchHLSPersons())
  }, [])

  let dirty = `<h1><a href="#" onClick="alert(${openedState});">Click Me</a>  </h1>   `
  let clean = DOMPurify.sanitize(dirty)

  useDocumentTitle("Leadership | Alvarez & Marsal")
  // console.log(leaders);
  return (
    <LeadershipContainer>
      <HeroSection
        title={"helthcare & live sciences leaders"}
        className="heroContainer"
        backgroundUrl={
          "https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />

      <h1 className="p-4"> Leaders</h1>
      {leaders?.length === 0 ? (
        <Spinner />
      ) : (
        <div className="m-4">
          <LeaadersContainer>
            {leaders?.map((cardInfo, index) => {
              return (
                <ProfessionalsCardSmall
                  className="col-lg-4"
                  key={index}
                  cardInfo={cardInfo}
                  index={index}
                  openedState={openedState}
                  handleDisplay={() =>
                    handleDisplay2(
                      index,
                      leadersList,
                      openedState,
                      setOpenedState
                    )
                  }
                  showDetails={openedState[index]}
                />
              )
            })}
          </LeaadersContainer>
          <h1 className="p-4"> Leaders</h1>
          <LeaadersContainer>
            {persons?.map((cardInfo, index) => {
              return (
                <ProfessionalsCardSmall
                  key={index}
                  cardInfo={cardInfo}
                  index={index}
                  openedState={openedState}
                  handleDisplay={() =>
                    handleDisplay2(
                      index,
                      persons,
                      openedStatePersons,
                      setOpenedStatePersons
                    )
                  }
                  showDetails={openedStatePersons[index]}
                />
              )
            })}
          </LeaadersContainer>
        </div>
      )}
    </LeadershipContainer>
  )
}

export default Leadership

const LeadershipContainer = styled.div`
  .heroContainer {
    h1 {
      width: 75%;
    }
  }
`
