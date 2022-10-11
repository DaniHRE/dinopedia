import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    div: {
      paddingTop: 80,
      paddingBottom: 80,
      height: "70vh",
      display: "flex",
      alignItems: "center",
    },
  
    title: {
      fontWeight: 900,
      fontSize: 34,
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 32,
      },
    },
  
    control: {
      [theme.fn.smallerThan('sm')]: {
        width: '100%',
      },
    },
  
    mobileImage: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    desktopImage: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  }));