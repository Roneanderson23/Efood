import Perfil from '../../components/Perfil'
import { Link } from 'react-router'
import margueritaPerfil from '../../assets/marguerita_1.2x.png'

import { Header, Card, Paragrafo, Title, Profile, LinkBotao } from './styles'

const product = () => (
  <>
    <Perfil />
    <div>
      <Header>
        <Card>
          <Profile src={margueritaPerfil} />
          <Title>Pizza Marguerita</Title>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Link to={''}>
            <LinkBotao>Adicionar ao carrinho</LinkBotao>
          </Link>
        </Card>
        <Card>
          <Profile src={margueritaPerfil} />
          <Title>Pizza Marguerita</Title>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Link to={''}>
            <LinkBotao>Adicionar ao carrinho</LinkBotao>
          </Link>
        </Card>
        <Card>
          <Profile src={margueritaPerfil} />
          <Title>Pizza Marguerita</Title>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Link to={''}>
            <LinkBotao>Adicionar ao carrinho</LinkBotao>
          </Link>
        </Card>
        <Card>
          <Profile src={margueritaPerfil} />
          <Title>Pizza Marguerita</Title>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Link to={''}>
            <LinkBotao>Adicionar ao carrinho</LinkBotao>
          </Link>
        </Card>
        <Card>
          <Profile src={margueritaPerfil} />
          <Title>Pizza Marguerita</Title>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Link to={''}>
            <LinkBotao>Adicionar ao carrinho</LinkBotao>
          </Link>
        </Card>
        <Card>
          <Profile src={margueritaPerfil} />
          <Title>Pizza Marguerita</Title>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Link to={''}>
            <LinkBotao>Adicionar ao carrinho</LinkBotao>
          </Link>
        </Card>
      </Header>
    </div>
  </>
)

export default product
