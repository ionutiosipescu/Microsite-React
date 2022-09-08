import styled from "styled-components/macro"
import { sizem } from "../../../../utils/breakpoints"
export const FilterCell = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  padding: 0.25rem;
  font-size: 20px;

  transition: all 0.2s ease-in-out;

  border: 1px solid var(--hover-blue);

  span {
    color: ${props => props.filtercolor || "var(--white)"};
  }

  svg {
    transition: all 0.2s ease-in-out;

    fill: var(--hover-blue);
    margin-left: 0.5rem;
  }

  :hover {
    color: var(--yellowCategory);
    border: 1px solid var(--yellowCategory);

    svg {
      fill: var(--yellowCategory);
    }
  }
  @media ${sizem.mdm_m} {
    /* border: 2px solid red; */

    margin-top: 5px;
    margin-bottom: 5px;
    span {
      width: 98%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* display: block; */
  }
  @media ${sizem.smm} {
    /* border: 2px solid red; */

    margin-top: 5px;
    margin-bottom: 5px;
    span {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* display: block; */
  }
`
