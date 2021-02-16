/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState } from 'react';

import LeftQuote from '../../images/LeftQuote';
import LeftArrow from '../../images/LeftArrow';
import RightArrow from '../../images/RightArrow';

const quotes = [
  { quote: 'Called them Thursday morning and they had it installed by Friday afternoon! Turned out exactly how we envisioned it! Very professional and would highly recommend for your curbing install! Great customer service and price!', author: 'Jaime Forbes' },
  { quote: 'Had gotten on 3 different curbing schedules before I found American Curb. Nobody else would show up or call me. American curb was very responsive, good price and looks great. In and out in about 90 minutes for 120 feet of curb.', author: 'Brandon Florence' },
  { quote: 'Everyone worked very hard even in the heat of the day. They did an excellent job and did not waste any time to complete the project. They were very professional and they cleaned up when they were finished.  I would call them again!!!', author: 'Teresa Crapo' },
  // { quote: 'Great work, I called on a Friday and they had curbing in our yard by Tuesday. Pricing is great too.', author: 'Nick Adamson' },
  { quote: 'Our curbing looks amazing as well as the curbing American Curb did at several of our neighbors homes. We are a new neighborhood and Kirt has been out here a lot lately. We are keeping him busy because of his fair pricing, strait forward honest professional approach and quality of work. You really can\'t ask for more than that. Thanks guys! Bonus stars for coming back to fix the curbing after someone stepped in it while it was drying. I was devastated that their beautiful work had been ruined but they fixed it like new! Thank you,  thank you! We will keep recommending you guys!', author: 'Suzy Thacker' },
];

const QuoteCarousel = () => {
  const [itemNumber, setItemNumber] = useState(0);

  return (
    <div sx={{
      position: 'relative',
      px: [50, 100],
      mt: 40,
      minHeight: 150,
    }}
    >
      <LeftQuote sx={{
        position: 'absolute', left: [0, 40], height: [24, 39], width: [31, 46], top: -20,
      }}
      />
      <LeftArrow
        sx={{
          position: 'absolute',
          left: [10, 50],
          top: 0,
          bottom: 0,
          margin: 'auto',
          cursor: 'pointer',
          fill: itemNumber > 0 ? 'primary' : 'gray',
        }}
        onClick={() => itemNumber > 0 && setItemNumber(itemNumber - 1)}
      />
      <LeftQuote sx={{
        position: 'absolute', right: [0, 40], height: [24, 39], width: [31, 46], bottom: -10, transform: 'rotate(180deg)',
      }}
      />
      <RightArrow
        sx={{
          position: 'absolute',
          right: [10, 50],
          top: 0,
          bottom: 0,
          margin: 'auto',
          cursor: 'pointer',
          fill: itemNumber < quotes.length - 1 ? 'primary' : 'gray',
        }}
        onClick={() => itemNumber < quotes.length - 1 && setItemNumber(itemNumber + 1)}
      />
      <Styled.p sx={{ fontSize: 1 }}>{quotes[itemNumber].quote}</Styled.p>
      <Styled.p sx={{ fontSize: 1, position: 'absolute', right: [50, 100] }}>
        -
        {' '}
        {quotes[itemNumber].author}
      </Styled.p>

    </div>
  );
};

export default QuoteCarousel;
