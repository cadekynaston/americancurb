/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import Image from 'next/image';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Separator from '../src/components/Separator';
import QuoteCarousel from '../src/components/QuoteCarousel';

export default function Home() {
  return (
    <Layout>
      <Section spacing={0}>
        <div sx={{ position: 'relative' }}>
          <div sx={{
            textAlign: 'right', pt: 7, pb: 6, width: '45%',
          }}
          >
            <Styled.h1>
              AMERICAN
              <br />
              CURB
            </Styled.h1>
            <Styled.p sx={{ letterSpacing: 3, color: 'rgba(34,34,34, .75)' }}>Landscape Curbing Professionals</Styled.p>
          </div>
          <div
            sx={{
              position: 'absolute',
              top: 0,
              right: -50,
              width: '60%',
            }}
          >
            <Image
              alt="Mountains"
              src="/hero-image-trimmy.png"
              layout="responsive"
              height={751}
              width={740}
              objectFit="cover"
              objectPosition="center center"
              quality={70}
            />
          </div>
        </div>
      </Section>

      <Section bgColor="muted">

        <div sx={{
          pt: 7,
          pb: 5,
          maxWidth: 800,
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >

          <Styled.h2>
            Serving Utah for Over 25 Years
          </Styled.h2>
          <Styled.p>American Curb is Utah’s premier landscape curbing business. We pride ourselves on providing the greatest quality product at an affordable price.</Styled.p>
          <Separator
            styles={{
              mt: 4,
              mb: 4,
              ml: 'auto',
              mr: 'auto',
            }}
          />

          <QuoteCarousel />

        </div>
      </Section>
      <Section spacing={5}>
        <p>Hello world</p>
      </Section>
    </Layout>
  );
}
