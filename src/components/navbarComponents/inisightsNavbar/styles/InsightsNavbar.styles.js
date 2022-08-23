import styled from "styled-components"
import { size } from "../../../../utils/breakpoints"
import { NavbarCell } from "./Cell.styles"

export const Container = styled.div`
  color: var(--white);
  padding: 1rem;
`

export const TitleSection = styled.div`
  @media ${size.md} {
    display: inline-flex;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  svg {
    position: relative;
    right: 1.5rem;
  }

  @media ${size.md} {
    margin: 0 0 0 2rem;
  }
`

export const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-weight: bold;

  /* border: 2px solid red; */
`

export const Navbar = styled.div`
  display: ${({ showNavbar }) => (showNavbar ? "initial" : "none")};

  letter-spacing: 0px;
  margin: 1rem 0;

  @media ${size.md} {
    display: flex;
    gap: 1.5rem;
  }
`

export const MoblieCell = styled(NavbarCell)`
  border: 2px solid red;

  @media ${size.md} {
    display: none;
  }
`
