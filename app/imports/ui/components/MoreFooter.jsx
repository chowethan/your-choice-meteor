import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

export default class MoreFooter extends React.Component {
  render() {
    return (
        <Container fluid className='footer-moar'>
          <Grid columns={5} container className='menugrid'>
            <Grid.Column>
              © 2018 Linode, LLC
            </Grid.Column>
            <Grid.Column>
              <a href="#">Terms of Service</a>
            </Grid.Column>
            <Grid.Column>
              <a href="#">Privacy Policy</a>
            </Grid.Column>
            <Grid.Column>
              <a href="#">Security</a>
            </Grid.Column>
            <Grid.Column>
              <a href="#">Standards & Compliance</a>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
