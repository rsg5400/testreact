import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import HelpDeskCard from '../Components/Card';
import { CardProps } from '../Components/Card';


const cards:CardProps[] = [

  {
    title: "Email Users",
    description: "descriptio here",
    imgSrc: "../Images/logo.webp",
    link: "email"

  },
  {
    title: "Phone Log",
    description: "descriptio here",
    imgSrc: "../Images/logo.webp",
    link: "phonelog"

  },
  {
    title: "Account Requests",
    description: "descriptio here",
    imgSrc: "../Images/logo.webp",
    link: "account"

  },
  {
    title: "User Infromation",
    description: "descriptio here",
    imgSrc: "../Images/logo.webp",
    link: "info"

  },
  {
    title: "Application POC's",
    description: "descriptio here",
    imgSrc: "../Images/logo.webp",
    link: "application"

  },
  {
    title: "Meterics",
    description: "descriptio here",
    imgSrc: "../Images/logo.webp",
    link:"meterics"

  },
  {
    title: "User Guides",
    description: "descriptio here",
    imgSrc: "../Images/logo.webp",
    link:"guide"

  },
  {
    title: "FAQ's",
    description: "descriptio here",
    imgSrc: "../Images/logo.webp",
    link:"faq"

  }
  
]

export default function HelpDesk() {
    return (
    <div className='body'>
      <Grid container spacing={2} rowSpacing={1} style={{ padding: '32px' }}>

        {cards.map((card, index) => (
          <Grid item key={index} xs={10} md={6}>
            <HelpDeskCard
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              link={card.link}
            />
          </Grid>
        ))}
      </Grid>
      
        
      
    </div>
  );
}

