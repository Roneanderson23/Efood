import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaClaro: ' #FFEBD9',
  rosaEscuro: ' #E66767',
  corDeFundo: ' #FFF8F2',
  corDoCard: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Robot, sans-serif;
      list-style: none;
      text-decoration: none;
    }

      body {
      background-color: ${cores.corDeFundo}
      }

    .container {
      max-width: 1024px;
      margin: 0 auto;
    }
`
export const Botao = styled.button`
  width: 100%;
  height: 24px;
  margin-bottom: 8px;
  border: none;
  background-color: ${cores.rosaClaro};
`
