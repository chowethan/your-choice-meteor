import React from 'react';
import TopMenu from '../components/TopMenu';
import Content from '../components/Content';
import MoreContent from '../components/MoreContent';
import Footer from '../components/Footer';
import MoreFooter from '../components/MoreFooter';

export default class Linode extends React.Component {
  render() {
    return (
        <div>
          <Content />
          <MoreContent />
        </div>
    );
  }
}
