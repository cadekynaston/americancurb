/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';

export default function Contact() {
  return (
    <Layout title="American Curb - Contact Us" description="Get in touch with us for a free quote.">
      <Section spacing={3}>
        <div sx={{ pt: 7 }}>
          <Styled.h1 sx={{ textAlign: 'center' }}>CONTACT US</Styled.h1>
        </div>
      </Section>

      <Section>

        <div sx={{ display: 'flex', flexDirection: ['column-reverse', 'row'], alignItems: 'center' }}>

          <iframe sx={{ width: ['100%', '50%'] }} title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212160.03568983535!2d-112.02805413431791!3d41.05966143427785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc02d9195fc6a8957!2sAmerican%20Curb!5e0!3m2!1sen!2sus!4v1610747920849!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" ariahidden="false" />

          <div sx={{ pl: [null, 4], width: ['100%', '50%'], mb: [4, null] }}>
            <Styled.p sx={{ mb: 3 }}>We would love to work with you. Give us a call and we will schedule a time to come and give you a free bid. If we aren’t available, leave us a message and we will get back to you quickly.</Styled.p>
            <Styled.p sx={{ mb: 3 }}>We generally serve Weber and Davis counties, but it depends on the job that you want done.</Styled.p>
            <Styled.p sx={{ mb: 4 }}>Thank you for your support!</Styled.p>
            <Link to="tel:8014449944" styles={{ display: 'inline-block' }}>
              <Button>
                <PhoneIcon sx={{ mr: 2 }} />
                801.444.9944
              </Button>
            </Link>
          </div>
        </div>
      </Section>

    </Layout>
  );
}
