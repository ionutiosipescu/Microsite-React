import styled from "styled-components";
import { sizem } from "../../../utils/breakpoints";

export const PageContainer = styled.div`
  .textCategory {
    color: #0085ca;
  }

  h6 img {
    width: 13px;
    color: #0085ca;
    margin: 0px 10px;
  }
  .link {
    font-size: 14px;
  }
  .link img {
    font-size: 12px;
    border-radius: 50%;
  }

  @media ${sizem.mdm} {
    .secondSection {
      text-align: center;
    }
    .link {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center !important;
    }
  }
  .nameAuthor {
    text-transform: uppercase;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: #000;
  }
  .positionAutho {
    text-transform: uppercase;
    font-size: 1rem;
    color: #666666;
    line-height: 1rem;
  }

  .link {
    text-decoration: none;
    color: #000;
    :hover {
      .image {
        cursor: pointer;
        background-color: var(--hover-blue);
        img {
          filter: grayscale(1) invert(1);
        }
        /* background-color: red; */
        /* background-color: var(--hover-blue); */
      }
      .textLinks {
        cursor: pointer;
        color: var(--hover-blue);
      }
    }
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--gray3);

    /* border: 2px solid red; */
    img {
      width: 20px;
    }
  }

  .textLinks {
    :hover {
      cursor: pointer;
      color: var(--hover-blue);
    }
  }
`;
