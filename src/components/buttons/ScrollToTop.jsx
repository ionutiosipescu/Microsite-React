import React, {useState} from "react"
import { ChevronUpWhite } from "../../assets/icons"
import * as S from "./styles/ScrollToTop.styles"

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900){
      setVisible(true)
    } 
    else if (scrolled <= 900){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   })
  // }

  return (
    <S.Container onClick={scrollToTop} 
    style={{display: visible ? 'inline' : 'none'}}>
      <div className="box">
        <ChevronUpWhite />
      </div>
    </S.Container>
  )
}

export default ScrollToTop
