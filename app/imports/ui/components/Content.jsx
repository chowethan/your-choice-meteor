import React from 'react';
import { Container, Grid, Form, Button } from 'semantic-ui-react';

export default class Content extends React.Component {
  render() {
    return (
        <Container fluid className="background" style={{ paddingBottom: '100px' }}>
          <Container className="background-image" style={{ padding: '60px 0 0 0' }}>
            <Grid>
              <Grid.Row centered>
                <div style={{ fontSize: '45px', color: '#FFF' }}>Cloud Hosting for</div>
              </Grid.Row>
              <Grid.Row centered>
                <div style={{ fontSize: '80px', lineHeight: 1.1, color: '#FFF' }}>You.</div>
              </Grid.Row>
              <Grid.Row centered>
                <div style={{ padding: '0 20%', fontFamily: '"Helvetica", "Arial", sans-serif', fontSize: '26px', fontWeight: 300, lineHeight: 1.2, color: '#FFF' }}>High performance SSD Linux servers for all of your infrastructure needs.</div>
              </Grid.Row>
            </Grid>
            <Grid columns={2}>
              <Grid.Column />
              <Grid.Column>
                <Form style={{ padding: '20px 10%' }}>
                  <Form.Field>
                    <input placeholder="Your email" />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder="Choose a username" />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder="Choose a password" />
                  </Form.Field>
                  <Button fluid className="create" style={{ background: '#2D8EC6', color: '#FFF' }}>Create Account</Button>
                </Form>
              </Grid.Column>
            </Grid>
          </Container>
        </Container>
    );
  }
}
