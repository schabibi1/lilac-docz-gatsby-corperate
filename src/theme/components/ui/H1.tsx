import styled from 'styled-components'

export const H1 = styled.h1`
  position: relative;
  display: table;
  ${p => p.theme.styles.h1};

  &:before {
    position: absolute;
    content: '';
    bottom: 0%;
    left: 0;
    width: 25%;
    height: 8px;
    background: ${p => p.theme.colors.purple};
    background-image: linear-gradient(to right,#8f69b6 0%,#add8e6 100%)
  }
`
