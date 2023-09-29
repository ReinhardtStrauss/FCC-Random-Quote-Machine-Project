import React, {useState} from 'react'; 
import quotes from './assets/quotes.json';
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from 'react-icons/fa';
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

const randQuote = (): Quote => {
  return quotes[Math.floor(quotes.length * Math.random())];
};



const selectRandColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let r = 0; r < 6; r++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color += '4D';

}


function App() {
  const [quote, setQuote] = useState<Quote>(randQuote());

  const [randColor, calcrandColor] = useState<string>(selectRandColor());

  const changeQuote = () => {
    setQuote(randQuote());
    
    calcrandColor(selectRandColor());
selectRandColor
  };

  const transition = 'all 1s';


  
  return (
    <>
      <div className='overlay' style={{ backgroundColor: randColor, transition }}>
        <h1 id='MDText'>FCC Random Quote Machine</h1>
        <div id='quote-box'>
          <div className='innerquote'>
            <h2 id='text'>
              <FaQuoteLeft className='dquotes' />
              {quote.quote}
              <FaQuoteRight className='dquotes' />
            </h2>
            <h3 id='author'>- {quote.author}</h3>
          </div>

          <div>
            <button className='quotebutton' id='new-quote' onClick={changeQuote} style={{ backgroundColor: randColor, transition }}>
              New Quote
            </button>

            <button className='quotebutton' style={{ backgroundColor: randColor, transition }}>
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
              id='tweet-quote'
              style={{
                
                marginRight: '10px',
                transition,
                
              }}
              target='_blank'
            >
              

                <FaTwitter color='#b3b3b3' />
                </a>
              </button>
           
          </div>
        </div>
<br />
<br />
      <table>
        <tbody>
          <tr>
            <th>
              <a href='https://react.dev' target='_blank'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                  className='reactlogo logo'
                  alt='React logo'
                />
              </a>
            </th>
            <th>
              <a href='https://vitejs.dev' target='_blank'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg'
                  className='vitelogo logo'
                  alt='Vite logo'
                />
              </a>
            </th>
            <th>
              <a href='https://fontawesome.com' target='_blank'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Font_Awesome_logomark_blue.svg'
                  className='css3logo logo'
                  alt='CSS3 logo'
                />
              </a>
            </th>
          </tr>
          <tr>
            <td>
              <h1 className='techstack'>React</h1>
            </td>
            <td>
              <h1 className='techstack'>Vite</h1>
            </td>
            <td>
              <h1 className='techstack'>Font A.</h1>
            </td>
          </tr>
        </tbody>
      </table>

      </div>
      
      <footer>
        <br />
        <br />
        Designed by:{' '}
        <a id='rs' href='https://www.codedesk.co.za' target='_blank'>
          Reinhardt Strauss 2023
        </a>{' '}
        |{' '}
        <a href='https://www.pexels.com/photo/elderly-man-thinking-while-looking-at-a-chessboard-8438918/' target='_blank'>
          BG Image:
        </a>  |{' '}
        <a href='https://github.com/JamesFT/Database-Quotes-JSON' target='_blank'>
          Quotes:
        </a>
      </footer>
    </>
  );
}

export default App;
