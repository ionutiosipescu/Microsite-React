import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import Footer from "./Footer"
import {
  fetchHLSIndustries,
  fetchHlsExpertises,
} from "../../store/actions/hls/hlsHome"
import { ScrollToTop } from "../buttons"

const Container = styled.div`
  background: white;
`

const Layout = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHLSIndustries())
    dispatch(fetchHlsExpertises())
  }, [])

  return (
    <Container>
      <ScrollToTop />
      <div {...props}>{props.children}</div>
      <Footer />
    </Container>
  )
}

export default Layout
