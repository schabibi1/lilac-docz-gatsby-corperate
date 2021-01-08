import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
//import GitHubButton from 'react-github-button'
import { Link as BaseLink } from 'docz'

import { Container, Logo } from '@components/ui'
import { btnStyle } from '@components/ui/Button'
import pattern from '@images/pattern.png'
import image from '@images/Humaaans-3Characters.png'

const Wrapper = styled.div`
  width: 100%;
  background: url(${pattern});
  background-position: center;
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  ${p =>
    p.theme.mq({
      padding: ['10px 0', '20px 0'],
    })}
`

const HeroWrapper = styled.div`
  display: grid;
  padding: 0 5px;

  ${p =>
    p.theme.mq({
      margin: ['50px 0 0 0', '100px 0 0 0'],
      gridAutoRows: ['minmax(300px, auto)', 'minmax(300px, auto)', 'minmax(500px, auto)'],
      gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
    })}
`

const HeroLeft = styled.div`
  text-align: center;

  ${p =>
    p.theme.mq({
      display: ['block', 'block', 'grid'],
      gridAutoRows: ['minmax(auto, 190px)'],
      gridTemplateColumns: ['1fr'],
    })}
`

const Subtitle = styled.p`
  font-weight: 100;
  ${p =>
    p.theme.mq({
      margin: ['5px auto', '50px auto', '0 30px', '0 10px'],
      textAlign: ['center', 'center', 'left'],
      maxWidth: ['80%', '80%', '100%'],
    })}
`

const Image = styled.img`
  margin: 0;
  max-width: 100%;
`

const Buttons = styled.div`
  display: flex;
`

const Link = styled(BaseLink)`
  ${btnStyle};
`

export const Hero = () => {
  return (
    <Wrapper>
      <Helmet>
        <script
          src="https://fast.wistia.com/embed/medias/cl69p284xk.jsonp"
          async
        />
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
      </Helmet>
      <Container>
        {/* <GitHubButton
          type="stargazers"
          size="large"
          namespace="doczjs"
          repo="docz"
        /> */}
        <HeroWrapper>
          <HeroLeft>
            <Logo 
              height={130}
              style={{ maxWidth: '100%', padding: '0 10px' }} />
            <Subtitle>Lilac(ライレック)は、オーダーメイド感覚プログラミング学習をコンセプトにした、プログラミング学習サービスです。</Subtitle>
          </HeroLeft>
          <Image src={image} alt="Built-in components" />
        </HeroWrapper>
        <Buttons>
          <Link kind="primary" scale="big" to="/docs/getting-started">
            Tutoring Plan
          </Link>
          <Link kind="primary" scale="big" to="/docs/introduction">
            Textbook Plan
          </Link>
        </Buttons>
      </Container>
    </Wrapper>
  )
}
