import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import symbol from '@images/symbol.png'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const dash = keyframes`
  to {
    stroke-dashoffset: 1000;
  }
`

const Lines = styled.path<{ delay: string }>`
  stroke: ${p => p.theme.colors.primary};
  stroke-width: 3px;
  stroke-dasharray: 100;
  animation: ${dash} 5s ${p => p.delay}s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    infinite;
`

const Path = styled.path`
  fill: ${p => p.theme.colors.primary};
`

const Spinner = ({ size = 60 }) => (
  <img width={size} height={size * 0.79} src={symbol} />
)

export const Loading = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
)
