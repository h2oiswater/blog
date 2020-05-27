import React from 'react'
import styled from 'styled-components'

export enum TitleActive {
  Index,
  AboutMe
}

type IProps = {
  currentActive: TitleActive
}

type TitleProps = {
  readonly isActive: boolean;
};

const Wrapper = styled.section`
  border-bottom: 1px solid gray;
  height: 2rem;
`
const Title = styled.text<TitleProps>`
  font-size: ${props => props.isActive ? "1.5rem" : "1rem"};
`

export default (params: IProps) => {
  return (
    <Wrapper>
      <Title isActive={params.currentActive === TitleActive.Index}>不是金尊玉杯，也亮晶晶满盏</Title>
      <Title isActive={params.currentActive === TitleActive.AboutMe}>我啊，一个搞开发的</Title>
    </Wrapper>
  )
}
