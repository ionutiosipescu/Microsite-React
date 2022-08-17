import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import FooterNew from "./FooterNew"
import {
  fetchHLSIndustries,
  fetchHlsExpertises,
} from "../../store/actions/hls/hlsHome"

const Page = styled.div`
  margin: 0 auto;
  background-color: white;
  max-width: 100%;
  width: 100%;
  width: 100%;
`
const Container = styled.div`
  background: var(--gray1);
`

const Layout = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHLSIndustries())
    dispatch(fetchHlsExpertises())
  }, [])

  return (
    <Container>
      <Page>
        <div {...props}>{props.children}</div>
        <FooterNew className="my-2" />
      </Page>
    </Container>
  )
}

export default Layout
