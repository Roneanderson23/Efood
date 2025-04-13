import { styled } from 'styled-components'
import { cores } from '../../styles'

export const ImgPerfil = styled.div`
  display: flex;
  justify-content: space-around;
  height: 186px;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
`
export const EfoodImg = styled.img`
  height: 57.5px;
  width: 125px;
  margin-left: 100px;
`
export const ImgDolce = styled.img`
  background-size: 100%;
  width: 100%;
  height: 286px;
`
export const LinkItem = styled.a`
  text-align: right;
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
  text-decoration: none;
  color: ${cores.rosaClaro};
`

