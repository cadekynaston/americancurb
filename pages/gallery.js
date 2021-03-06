/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';
import GalleryImage from '../src/components/GalleryImage';

export default function Gallery() {
  return (
    <Layout title="American Curb - Gallery" description="American Curb landscape curbing image gallery. Landscape curbing professionals serving Utah for over 25 years.">
      <Section spacing={3}>
        <div sx={{ pt: 7 }}>
          <Styled.h1 sx={{ textAlign: 'center' }}>GALLERY</Styled.h1>
        </div>
      </Section>
      <Section>
        <div sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '1fr 1fr'],
          gridGap: 3,
        }}
        >
          <div>
            <GalleryImage src="/gallery-images/gallery-3.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-6.jpg" />
            <GalleryImage src="/gallery-images/gallery-2.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-8.jpg" />
            <GalleryImage src="/gallery-images/gallery-5.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-7.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-11.jpg" />
          </div>
          <div>
            <GalleryImage src="/gallery-images/gallery-1.jpg" />
            <GalleryImage src="/gallery-images/gallery-4.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-9.jpg" />
            <GalleryImage src="/gallery-images/gallery-10.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-13.jpg" />
            <GalleryImage src="/gallery-images/gallery-12.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-14.jpg" />
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
          <Styled.h2>Like What You See?</Styled.h2>
          <Styled.p sx={{ mb: 4 }}>We’d love to make your yard look beautiful too! Give us a call and schedule a time for us to come and give you a free bid.</Styled.p>
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
