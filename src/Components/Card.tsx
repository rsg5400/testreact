import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react' 

import { Link } from 'react-router-dom';

export interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
}

const HelpDeskCard:FC<CardProps> = ({ title, description, imgSrc, link }) => {
  return (
    <Link to={link}>
    <Card>
      <CardMedia
        component="img"
        height="100"
        image={imgSrc} // Make sure to import or require the image properly
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

export default HelpDeskCard;
