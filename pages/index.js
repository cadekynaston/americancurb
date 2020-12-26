/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import Image from 'next/image';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Separator from '../src/components/Separator';
import QuoteCarousel from '../src/components/QuoteCarousel';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

export default function Home() {
  return (
    <Layout>
      <Section spacing={0}>
        <div sx={{ position: 'relative' }}>
          <div sx={{
            textAlign: ['left', 'right'], pt: 7, pb: 6, width: ['100%', '45%'],
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
              display: ['none', 'block'],
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
              loading="eager"
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
        <div
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
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
            loading="eager"
          />
        </div>
        <div sx={{ pl: ['0', '0', '55%'] }}>
          <div sx={{ maxWidth: 420 }}>
            <Styled.h2 sx={{ mb: 4 }}>
              Take Your Yard to
              <br />
              the Next Level
              {' '}
            </Styled.h2>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Durability</Styled.p>
            <Styled.p sx={{ mb: 3 }}>Concrete curbing is extremely durable and can last many years. You won’t need to worry about rust, warp, or rot.</Styled.p>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Design</Styled.p>
            <Styled.p sx={{ mb: 3 }}>With our options in curb styles, colors and stamps, your yard will look just the way you want it. See the gallery for inspiration. </Styled.p>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Functionality</Styled.p>
            <Styled.p sx={{ mb: 3 }}>Concrete curbing will keep your grass from growing into your flower beds as well as keep your top soil where it should be and prevent runoff.</Styled.p>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Maintenance</Styled.p>
            <Styled.p sx={{ mb: 3 }}>Curbing requires zero maintenance and can help you save time trimming your edges</Styled.p>
            <Link to="/options">
              <Button outline>See Our Options</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section bgColor="muted">
        <div sx={{
          textAlign: 'center', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
        }}
        >
          <Styled.h2>Get In Touch</Styled.h2>
          <Styled.p sx={{ mb: 4 }}>We would love to hear from you. Give us a call and we can schedule a time for us to check out your property and give you a free bid.</Styled.p>
          <Button>801.678.7997</Button>
        </div>
      </Section>
    </Layout>
  );
}
