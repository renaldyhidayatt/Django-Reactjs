import React, { Component } from "react";
import {
    Grid,
    Container,
    Typography,
    Link,
    Box
}from "@material-ui/core"

import { withStyles } from "@material-ui/core/styles";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          HunterRk
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const styles = theme => ({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]:{
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        }
    }
});

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations']
    },
    {
        title: 'Features',
        description: ['Team', 'History', 'Contact us', 'Locations']
    },
    {
        title: 'Resources',
        description: ['Team', 'History', 'Contact us', 'Locations']
    },
    {
        title: 'Legal',
        description: ['Team', 'History', 'Contact us', 'Locations']
    },
]

class Footer extends Component{
    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Container maxWidth="md" component="footer" className={classes.footer}>
                    <Grid container spacing={4} justify="space-evenly">
                    {footers.map(footer => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map(item => (
                            <li key={item}>
                                <Link href="#" variant="subtitle1" color="textSecondary">
                                {item}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </Grid>
                    ))}
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Footer);