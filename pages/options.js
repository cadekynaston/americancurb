/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';
import GalleryImage from '../src/components/GalleryImage';

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
        <div sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '1fr 1fr 1fr'],
          gridGap: 3,
        }}
        >
          <GalleryImage src="/gallery-images/gallery-1.jpg" loading="eager" />
          <GalleryImage src="/gallery-images/gallery-2.jpg" />
          <GalleryImage src="/gallery-images/gallery-3.jpg" />
          <GalleryImage src="/gallery-images/gallery-4.jpg" />
          <GalleryImage src="/gallery-images/gallery-5.jpg" />
          <GalleryImage src="/gallery-images/gallery-6.jpg" />
          <GalleryImage src="/gallery-images/gallery-7.jpg" />

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
