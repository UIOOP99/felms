import { Avatar, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';


interface IClassCardProps {
  title: string,
  Icon?: ReactNode,
  primaryDesc?: string,
  secondaryDesc?: string
}

const ClassCard = ({title, Icon, primaryDesc, secondaryDesc}: IClassCardProps) => {
  return (
    <ListItem alignItems="flex-start" button>
      <ListItemIcon><Avatar>{Icon}</Avatar></ListItemIcon>
      <ListItemText 
        primary={title}
        secondary={
          <>
            <Typography variant="body1">{primaryDesc}</Typography>
            <Typography variant="caption">{secondaryDesc}</Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ClassCard;