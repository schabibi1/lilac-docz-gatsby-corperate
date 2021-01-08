import * as React from 'react'
import styled from 'styled-components'
import gatsby from '@images/icons/gatsby.svg'
import doczlogo from '@images/icons/docz.svg'
import netlify from '@images/icons/netlify.svg'

import { Logo as BaseLogo } from '@components/ui'

const Wrapper = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`

const Copyrights = styled.div`
  font-size: 14px;
  text-align: center;

  ${p =>
    p.theme.mq({
      display: ['block', 'flex'],
    })}
`

const Logo = styled(BaseLogo)`
  margin: 0 10px;
`

const Image = styled.img`
  height: 20px;

  ${p =>
    p.theme.mq({
      margin: ['2px 5px 0 5px'],
    })}
`

export const Footer = () => (
  <Wrapper>
    <Copyrights>
      <Logo height={30} />
    </Copyrights>
    <Copyrights>
      <div>Powered By</div>
      <Image src={gatsby} />
      <Image src={doczlogo} />
      <Image src={netlify} />
    </Copyrights>
  </Wrapper>
)
