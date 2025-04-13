import { Link } from 'react-router-dom'

import { LinkItem, EfoodImg, ImgDolce, ImgPerfil } from './styles'

import imgHeader from '../../assets/logo.png'
import imgApresentacao from '../../assets/apresentacao.png'

const Perfil = () => (
  <>
    <ImgPerfil>
      <LinkItem>Restaurante</LinkItem>
      <Link to={'/'}>
        <EfoodImg src={imgHeader} alt="logo Efood" />
      </Link>
      <LinkItem>0 produto(s) no carrinho</LinkItem>
    </ImgPerfil>
    <ImgDolce src={imgApresentacao} alt="logo apresentação" />
  </>
)

export default Perfil
