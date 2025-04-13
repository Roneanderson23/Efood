import { styled } from 'styled-components'
import { Botao, cores } from '../../styles'

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-top: 34px;
  margin-left: 120px;
  margin: auto;
  max-width: 820px;

`
export const Card = styled.div`
  padding: 8px;
  border: 1px solid ${cores.rosaEscuro};
  background-color: ${cores.rosaEscuro};
`

export const Profile = styled.img`
  width: 100%;
`
export const Title = styled.h2`
  font-weight: 900;
  font-size: 14px;
  line-height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${cores.rosaClaro};
`

export const Paragrafo = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 8px;
  color: ${cores.rosaClaro};
`
export const LinkBotao = styled(Botao)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  color: ${cores.rosaEscuro};
`
