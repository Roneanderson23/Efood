import Tag from '../Tag'
import {
  Titulo,
  Card,
  Descricao,
  Infos,
  SubTitulo,
  Paragrafo,
  Img,
  Botao
} from './styles'

import nota from '../../assets/nota.png'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  title: string
  paragraph: string
  infos: string[]
}

const Listagem = ({ title, paragraph, image, infos }: Props) => (
  <Card>
    <img src={image} alt="imagem do macarrao" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Descricao>
      <SubTitulo>
        <Titulo>{title}</Titulo>
        <Img src={nota} alt="nota" />
      </SubTitulo>
      <Paragrafo>{paragraph}</Paragrafo>
      <Link to={'product'}>
        <Botao>Saiba mais</Botao>
      </Link>
    </Descricao>
  </Card>
)

export default Listagem

