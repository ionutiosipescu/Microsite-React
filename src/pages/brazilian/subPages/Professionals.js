import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row } from "react-bootstrap"

//images

//data
import { leadersList, links, arr } from "../../../utils/data"

// costum components
import { StyledContainer } from "../../../components/layout/Rows&Collumns/Rows&Collumns.style"
import TranslateButton from "../../../components/buttons/TranslateButton"
import { LeaadersContainer } from "../../leadership/Leadership"
import { ProfessionalsCardSmall } from "../../../components/cards"
import {
  FiltrationNavbar,
  NavbarDropdown,
} from "../../../components/navbarComponents"
import FilterBy from "../../../components/FilterBy"
import { useDocumentTitle } from "../../../hook"
import {
  fetchBrazilLeaders,
  fetchBrazilPersons,
} from "../../../store/actions/brazilian/brazilLeaders"
import { Spinner } from "../../../components"

const Professionals = () => {
  const dispatch = useDispatch()
  const leaders = useSelector(state => state?.brazilLeaders?.filteredLeaders)
  const persons = useSelector(state => state?.brazilLeaders?.industryPersons)
  const cities = useSelector(state => state?.brazilLeaders?.cities)
  const expertises = useSelector(state => state?.brazilLeaders?.expertises)
  const industries = useSelector(state => state?.brazilLeaders?.industries)

  useEffect(() => {
    dispatch(fetchBrazilLeaders())
    dispatch(fetchBrazilPersons())
  }, [])
  //state of modal
  const [openedState, setOpenedState] = useState(
    Array.from(leadersList ?? [], () => false)
  )
  const [openedStatePersons, setOpenedStatePersons] = useState(
    Array.from(persons ?? [], () => false)
  )

  const [filterByTags, setFilterByTags] = useState([])
  //handle position of modal
  const handleDisplay2 = (index, array, state, setState) => {
    if (!state[index]) {
      let arr = Array.from(array, () => false)
      arr[index] = true
      setState([...arr])
    } else {
      setState(Array.from(array, () => false))
    }
  }

  useDocumentTitle("Brazil | Leadership | Alvarez & Marsal")

  return (
    <>
      <StyledContainer>
        <TranslateButton text1={"English"} text2={"Portuguese"} />
        <h2>
          Qui excepteur aute dolore proident adipisicing ullamco laborum.
          consectetur.
        </h2>
        <p>
          Et enim ex magna aliqua deserunt aliqua nisi cupidatat. Sit irure
          aliqua aute aliquip ea nisi culpa aliqua nisi quis nostrud cillum
          culpa nulla. Cillum do incididunt eu cupidatat. Velit reprehenderit
          eiusmod anim amet id aliquip enim eiusmod culpa. Consequat quis ut
          incididunt duis nulla magna eiusmod est nulla eiusmod elit laborum do.
        </p>
      </StyledContainer>
      {/* <FiltrationNavbar
        searchBar={{ placeholder: "enter search here" }}
        filterByTags={filterByTags}
        setFilterByTags={setFilterByTags}
      >
        <NavbarDropdown data={expertises}>Exprertise</NavbarDropdown>
        <NavbarDropdown data={industries}>Industry</NavbarDropdown>

        <NavbarDropdown data={cities}>City</NavbarDropdown>
       
      </FiltrationNavbar> */}
      {/* <FilterBy filterByTags={filterByTags} setFilterByTags={setFilterByTags} /> */}

      <h3 className="m-3">Leaders</h3>
      {leaders?.length === 0 || persons === 0 ? (
        <Spinner />
      ) : (
        <>
          <div className="m-4">
            <LeaadersContainer>
              {leaders?.map((cardInfo, index) => {
                return (
                  <ProfessionalsCardSmall
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
          </div>
          <h3 className="m-3">Leaders</h3>
          <div className="m-4">
            <LeaadersContainer>
              {persons?.map((cardInfo, index) => {
                return (
                  <ProfessionalsCardSmall
                    key={index}
                    cardInfo={cardInfo}
                    index={index}
                    openedState={openedStatePersons}
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
        </>
      )}
    </>
  )
}

export default Professionals
