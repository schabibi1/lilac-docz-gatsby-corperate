import * as React from 'react'
import styled from 'styled-components'
import * as colors from '@styles/colors'
import { Link } from 'docz'

import { Container } from '@components/ui'
// import magicWand from '@images/icons/magic-wand.svg'
// import gatsby from '@images/icons/gatsby.svg'
import everyone from '@images/icons/Humaaans-Space.png'
import teacher from '@images/icons/Humaaans-Wireframe.png'
import strong from '@images/icons/strong.svg'
import checked from '@images/icons/checked.svg'
import book from '@images/icons/note-book.svg'
import glasses from '@images/icons/vision.svg'
// import plug from '@images/icons/plug.svg'
// import mdx from '@images/icons/mdx.svg'
// import typescript from '@images/icons/typescript.svg'

const ListItems = styled.div`
  display: grid;
  justify-content: center;

  ${p =>
    p.theme.mq({
      margin: ['30px 0', '60px 0'],
      gridGap: ['30px', '60px'],
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 0.8fr)',
      ],
    })}
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;

  ${p =>
    p.theme.mq({
      padding: ['0 10px', '0 20px', '0 20px', '0 30px'],
      flexDirection: ['column', 'row'],
      textAlign: ['center', 'left'],
    })};
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  height: 150px;

  ${p =>
    p.theme.mq({
      margin: ['0 0 30px', '0 40px'],
    })}
`

const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-family: 'Varela Round';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.02em;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
`

const Anchor = styled.a`
  color: ${colors.purple};
`

export const Features = () => (
  <Container>
    <ListItems>
      <FeatureItem>
        <Image src={everyone} />
        <Info>
          <Title>For everyone!</Title>
          <Text>
          フロントエンド / マークアップエンジニアを目指される方や、ブログ運営に役立てたい方、海外フリーランスエンジニアになりたい方、場所を選ばない働き方を実現したい方などが受講しています。
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={teacher} />
        <Info>
          <Title>Teacher</Title>
          <Text>
          メンター講師歴約3年、40名以上マンツーマン担当した実績のある<Anchor href="https://aiki-developer.com">Arisa</Anchor>が担当します。<br />日本と海外で企業就職された方や、フリーランスエンジニアを8名輩出しました。

          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          <Image src={strong} />
        </a>
        <Info>
          <Title>Goal</Title>
          <Text>
          私自身が客室乗務員から独学でエンジニアになった経験を踏まえ<b>「プログラミングは楽しい」</b>と思っていただけるサポートを大事にしています。
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <a href="https://www.flaticon.com/free-icon/checked_753266?term=check&page=4&position=2" title="Vectors Market">
          <Image src={checked} />
        </a>
        <Info>
          <Title>Hands-on</Title>
          <Text>
          個人個人に合わせたフリーランス案件受注〜納品までのノウハウも含まれています。経歴ゼロから海外フリーランスエンジニアになった、私と卒業生の経験をもとにしたサポート内容です。
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          <Image src={book} />
        </a>
        <Info>
          <Title>Textbook plan</Title>
          <Text>
            テキスト教材購入のみの受講オプションも用意しています。<br /><b>読むだけでわかるプログラミング教材</b>を目指しています。<br />技法や技術ごとに教材を分けているため、必要な技術の教材だけを選ぶことができます。
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          <Image src={glasses} />
        </a>
        <Info>
          <Title>Tutoring plan</Title>
          <Text>
            毎週1回30分〜1時間の講師との通話面談で、練習問題を含むテキスト内容について質問、コードレビューがご利用いただけます。<br />全テキスト教材の無料アクセス権も特典で付きます。<Link to="/docs/components-api">受講受付</Link>
          </Text>
        </Info>
      </FeatureItem>
    </ListItems>
  </Container>
)
