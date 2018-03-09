import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

export default class MoreContent extends React.Component {
  render() {
    return (
        <Container fluid className='content-moar'>
          <Grid columns={5} container className='menugrid'>
            <Grid.Row centered style={{ fontSize: '32px', fontWeight: 300 }}>
              Lightning-Quick SSD Servers for Only&nbsp;<span style={{ fontWeight: 400 }}>$5/mo.</span>
            </Grid.Row>
            <Grid.Row centered>
              <a href="#" style={{ fontFamily: '"Helvetica", "Arial", sans-serif', fontSize: '19.8px', fontWeight: 300 }}>View Plans & Pricing</a>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
