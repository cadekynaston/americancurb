/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';
import Card from '../src/components/Card';
import OptionHeading from '../src/components/OptionHeading';
import Pantone from '../src/components/Pantone';

export default function Options() {
  return (
    <Layout>
      <Section spacing={3}>
        <div sx={{ pt: 7 }}>
          <Styled.h1 sx={{ textAlign: 'center' }}>OUR OPTIONS</Styled.h1>
          <div sx={{ maxWidth: 500, textAlign: 'center', margin: 'auto' }}>
            <Styled.p>We’ve got the selection of styles to fit your needs. If you aren’t sure what to choose we can help you make the best decision to fit your situation.</Styled.p>
          </div>
        </div>
      </Section>
      <Section>

        <div sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
          <OptionHeading title="Curb Styles" text="Lorem Lipsum" />
          <div
            sx={{
              display: 'grid', gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'], gridGap: 35, width: '100%',
            }}
          >
            <Card title="Slant" text="Goes great with a stamp" />
            <Card title="Square" text="Our most popular choice" featured featureText="Most Popular" />
            <Card title="Mower" text="A classic shape" />
          </div>
        </div>

        <div sx={{ display: 'flex', flexDirection: ['column', 'row'], mt: 5 }}>
          <OptionHeading title="Stamps" text="Stamps are a great way to add some unique texture to your yard." />
          <div
            sx={{
              display: 'grid', gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr'], gridGap: 35, width: '100%',
            }}
          >
            <Card title="Cobblestone" text="Goes great with a stamp" />
            <Card title="Random Brick" text="Our most popular choice" />
          </div>
        </div>

        <div sx={{ display: 'flex', flexDirection: ['column', 'row'], mt: 5 }}>
          <OptionHeading title="Colors" text="A dye can make your curbs pop" />
          <div
            sx={{
              display: 'grid', gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr', 'repeat(4, 1fr)'], gridGap: 30, width: '100%',
            }}
          >
            <Pantone title="Bayou" color="#847B63" />
            <Pantone title="Mesa Bluff" color="#9C844A" />
            <Pantone title="Sunset Rose" color="#9C735A" />
            <Pantone title="Cobblestone" color="#5A5A52" />
            <Pantone title="Sangria" color="#9C735A" />
            <Pantone title="Cocoa" color="#7A6953" />
            <Pantone title="Pebble" color="#9C8C73" />
            <Pantone title="Brick Red" color="#8C5239" />

          </div>
        </div>

      </Section>

      <Section bgColor="muted">
        <div sx={{
          textAlign: 'center',
          maxWidth: 620,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >
          <Styled.h2>Installation</Styled.h2>
          <Styled.p sx={{ mb: 4 }}>Bare ground is always easier for installation, but if you have grass we can cut it out. Depending on the size of the job we can typically be finished with the job in one day. Give us a call and we will come by and give you a free bid!</Styled.p>
          <Link to="tel:8014449944" styles={{ display: 'inline-block' }}>
            <Button>
              <PhoneIcon sx={{ mr: 2 }} />
              801.444.9944
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
