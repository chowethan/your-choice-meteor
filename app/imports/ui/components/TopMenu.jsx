import React from 'react';
import { Menu, Container, Image, Icon, Dropdown, Divider, Button } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu className='topmenu' borderless>
          <Container>
            <Image src="https://www.linode.com/media/images/header/linode-logo.svg" className="nav-logo" />
            <Menu.Item position='right' href='#'>
              <Icon name="home" />
            </Menu.Item>
            <Menu.Item href='#'>Features</Menu.Item>
            <Menu.Item href='#'>Pricing</Menu.Item>
            <Menu.Item href='#'>Add-ons</Menu.Item>
            <Dropdown item text="Resources">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Started</Dropdown.Item>
                <Dropdown.Item>Migrating to Linode</Dropdown.Item>
                <Dropdown.Item>Hosting a Website</Dropdown.Item>
                <Divider style={{ padding: 0 }}/>
                <Dropdown.Item>Guides & Tutorials</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="divider">|</div>
            <Menu.Item href='#'>Log in <Icon name="caret right" style={{ fontSize: '12px', color: '#3bb878' }}/></Menu.Item>
            <Menu.Item href='#'><Button>Sign up</Button></Menu.Item>
          </Container>
          <a href="https://www.linode.com/careers"><Image src="https://www.linode.com/media/images/home/hiring_banner.png" style={{ position: 'absolute', top: 0, right: 0 }} /></a>
        </Menu>
    );
  }
}
