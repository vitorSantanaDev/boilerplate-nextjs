import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React JS, Next JS and Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/logo.svg"
        alt="Imagem de um atômo e React Avançado ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="/images/hero-illustration.svg"
        alt="Ilustração do site, com um desenvolvedor de frente pro código "
      />
    </S.Wrapper>
  )
}

export default Main
