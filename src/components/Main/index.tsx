import * as S from './styles'

const Main = ({
  title = 'Custom Next Typescript',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of an Atom and Advanced React written on the side"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/illustration.svg"
      alt="Illustration of a user in front of the computer"
    />
  </S.Wrapper>
)

export default Main
