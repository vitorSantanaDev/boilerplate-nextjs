import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/logo.svg"
        alt="Imagem de um atômo e React Avançado ao lado"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, React JS, Next JS and Styled Components
      </S.Description>
      <S.Ilustration
        src="/images/hero-illustration.svg"
        alt="Ilustração do site, com um desenvolvedor de frente pro código "
      />
    </S.Wrapper>
  )
}

export default Main
