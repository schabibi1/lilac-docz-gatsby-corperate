import * as React from 'react'
import styled from 'styled-components'
import { Link as BaseLink } from 'docz'

import { btnStyle } from '@components/ui/Button'
import { Container, Pre as BasePre } from '@components/ui'
import pattern from '@images/dark-pattern2.png'
import book from '@images/icons/note-book.svg'
import glasses from '@images/icons/vision.svg'

const Wrapper = styled.div`
  background: url(${pattern});
  color: ${p => p.theme.colors.grayLight};
  text-align: center;

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    ${p =>
      p.theme.mq({
        padding: ['50px 10px', '50px 20px'],
      })};
  }
`

const Title = styled.h2`
  margin: 0;
  font-family: 'Varela Round';
  font-size: 52px;
  font-weight: 600;
  color: white;

  ${p =>
    p.theme.mq({
      lineHeight: ['1', '1', '1.62', '1.62'],
      fontSize: ['38px', '38px', '48px', '52px'],
    })};
`

const Text = styled.p`
  font-size: 20px;
  color: white;
`

const Plans = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;

  ${p =>
    p.theme.mq({
      margin: ['30px 0', '60px 0'],
      gridGap: ['30px', '60px'],
    })}
`

const PriceCard = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px #4a4a4a;
    background-color: #4a4a4a;
    border-radius: 2px;

    ${p =>
      p.theme.mq({
        padding: ['50px 20px', '50px'],
        flexDirection: ['column', 'row'],
        textAlign: ['center', 'left'],
      })};
`

const Image = styled.img`
  height: 150px;

  ${p =>
    p.theme.mq({
      margin: ['0 0 30px', '0 40px'],
    })}
`

const PlanName = styled.h3`
  color: white;
  font-size: 30px;
  font-family: 'Varela Round';
  margin: 5px 0;
  padding: 0 20px;
  border-left: solid 10px #639;
`

const PlanContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Price = styled.h3`
  margin: 5px 0;
  font-weight: 900;
  font-style: italic;
`

// const Pre = styled(BasePre)`
//   width: 100%;
//   max-width: 650px;
//   margin: 10px 0 20px 0;
//   border: 1px solid rgba(255, 255, 255, 0.2);

//   ${p =>
//     p.theme.mq({
//       minWidth: ['100%', '100%', '650px', '650px'],
//     })};
// `

const Link = styled(BaseLink)`
  ${btnStyle};
`

// const mdxExample = `---
// name: Button
// route: /
// ---

// import { Playground, Props } from 'docz'
// import { Button } from './'

// # Button

// <Props of={Button} />

// ## Basic usage

// <Playground>
//   <Button>Click me</Button>
//   <Button kind="secondary">Click me</Button>
// </Playground>
// `

export const HowTo = () => (
  <Wrapper>
    <Container>
      <Title>Plans</Title>
      <Text>Lilac(ライレック)は、2つの学習方法が選べます。</Text>

      <Plans>
        <PriceCard>
          <Image src={book} />
          <PlanContent>
            <PlanName>Textbook Plan</PlanName>
              <Price>2,000円/教材テキスト(税、手数料込)</Price>
              <ul>
                <li>無料公開テキストコンテンツ</li>
                <li>購入した有料テキストコンテンツ</li>
                <li>教材アップデートのサポート</li>
              </ul>
          </PlanContent>
        </PriceCard>

        <PriceCard>
          <Image src={glasses} />
          <PlanContent>
            <PlanName>Tutoring Plan</PlanName>
              <Price>8,000円/週(税、手数料込)</Price>
              <ul>
                <li>全コース無料閲覧アクセス権</li>
                <li>メンター講師のマンツーマンサポート</li>
                <li>無制限コードレビュー(頻度目安: 平日1日1, 2回)</li>
                <li>無制限チャットサポート(頻度目安: 平日1日1, 2回)</li>
                <li>週1回 30分〜1時間の通話面談</li>
                <li>個別案件受注、納品サポート</li>
                <li>ポートフォリオ作成サポート</li>
              </ul>
            </PlanContent>
        </PriceCard>
      </Plans>
      {/* <Pre className="language-bash">$ yarn add docz react react-dom --dev</Pre> */}
      {/* <Pre className="language-markdown">{mdxExample}</Pre> */}
      {/* <Pre className="language-bash">$ yarn docz dev</Pre> */}
      <Link to="/docs/getting-started">Signup!</Link>
    </Container>
  </Wrapper>
)
