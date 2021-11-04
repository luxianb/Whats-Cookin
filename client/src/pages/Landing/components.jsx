import styled from "styled-components"
import Logo from '../../assets/Logo.svg'

const BannerImg = styled.img`
  border-radius: 0 0 12px 12px;
  height: 400px;
  opacity: .5;
`

const LogoContainer = styled.div`
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30px; // used to control height of logo
`
const BannerContainer = styled.div`
  position: relative;
`

export const Banner = () => (
  <BannerContainer>
    <BannerImg 
      src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80"
      alt="banner"
    />
    <LogoContainer>
      <img src={Logo} alt="What's Cooking" style={{height: '100%', width: '100%'}} />
    </LogoContainer>
  </BannerContainer>
)