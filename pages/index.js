/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import Image from 'next/image';

import Hero from '../src/components/Hero';
import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Columns from '../src/components/Columns';
import Column from '../src/components/Columns/Column';

export default function Home() {
  return (
    <Layout>
      <Hero>
        {/* <Columns>
          <Column width="40%"> */}
        <div sx={{ py: 6 }}>

          <Styled.h1 sx={{ textAlign: 'center', fontSize: 8, fontWeight: 'heading' }}>American Curb</Styled.h1>
          <Styled.h4 sx={{ textAlign: 'center' }}>Landscape Curbing professionals serving Utah since 1999.</Styled.h4>
        </div>
        {/* </Column>
          <Column width="60%">
            <div sx={{
              position: 'relative',
              height: '100%',
              width: '100%',
              p: 3,
              '> div': { borderRadius: 20 },
            }}
            >
              <Image
                alt="Mountains"
                src="/yard.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                quality={70}
                loading="eager"
                priority
              />
            </div>
          </Column>
        </Columns> */}

      </Hero>
      <Section>
        <p>What in the ass!</p>
      </Section>
    </Layout>
  );
}
