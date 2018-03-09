import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
        <Container fluid className='footer'>
          <Grid container className='menugrid'>
            <Grid.Row centered>
              <Grid columns={4}>
                <Grid.Column>
                  <a href="#" className="heading">Overview</a><br />
                  <a href="#">Plans & Pricing</a><br />
                  <a href="#">Features</a><br />
                  <a href="#">Add-Ons</a><br />
                  <a href="#">Managed</a><br />
                  <a href="#">Professional Services</a>
                </Grid.Column>
                <Grid.Column>
                  <a href="#" className="heading">Resources</a><br />
                  <a href="#" >Guides & Tutorials</a><br />
                  <a href="#" >Speed Test</a><br />
                  <a href="#" >Forum</a><br />
                  <a href="#" >Chat</a><br />
                  <a href="#" >System Status</a>
                </Grid.Column>
                <Grid.Column>
                  <a href="#" className="heading">Company</a><br />
                  <a href="#">About Us</a><br />
                  <a href="#">Blog</a><br />
                  <a href="#">Press</a><br />
                  <a href="#">Referral System</a><br />
                  <a href="#">Careers</a>
                </Grid.Column>
                <Grid.Column>
                  <a href="#" className="heading">Contact Us</a><br />
                  <a href="tel:+18554546633">855-4-LINODE</a><br />
                  <a href="tel:+18554546633">(855-454-6633)</a><br />
                  <a href="tel:+16093807100">Intl.: +1 609-380-7100</a><br />
                  <a href="mailto:support@linode.com">Email us</a>
                </Grid.Column>
              </Grid>
            </Grid.Row>
            <Grid.Row centered>
              <a href="https://facebook.com/linode"><Icon name="facebook f" /></a>
              <a href="https://twitter.com/linode"><Icon name="twitter" /></a>
              <a href="https://plus.google.com/+linode/"><Icon name="google plus" /></a>
              <a href="https://linkedin.com/company/linode"><Icon name="linkedin" /></a>
              <a href="https://github.com/linode/"><Icon name="github" /></a>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
