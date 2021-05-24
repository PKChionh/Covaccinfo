import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const items = [
  { text: 'Status', icon: 'k-i-inbox', selected: true, route: '/' },
  { separator: true },
  { text: 'Locations', icon: 'k-i-calendar', route: '/locations' },
  { separator: true },
  { text: 'Chat', icon: 'k-i-hyperlink-email', route: '/chat' },
  { separator: true },
  { text: 'Map', icon: 'k-i-star-outline', route: '/map' },
  { separator: true },
];

class DrawerRouterContainer extends React.Component {
    state = { expanded: true }

    handleClick = () => { this.setState((e) => ({ expanded: !e.expanded })); }

    onSelect = (e) => {
        this.setState({ expanded: false });
        this.props.history.push(e.itemTarget.props.route);
    }

    setSelectedItem = (pathName) => {
        let currentPath = items.find(item => item.route === pathName);
        if (currentPath.text) {
            return currentPath.text;
        }
    }

    render() {
        let selected = this.setSelectedItem(this.props.location.pathname);
        return (
          <div>
            <div className="custom-toolbar">
              <Button icon="menu" look="flat" onClick={this.handleClick} />
              <span className="mail-box">Covid-19 Vaccination Info</span>
            </div>
            <Drawer
              expanded={true}
              position={'start'}
              mode={'push'}
              mini={true}
              items={items.map(
                        (item) => ({ ...item, selected: item.text === selected }))}
              onSelect={this.onSelect}
              width={150}
                >
              <DrawerContent>
                {this.props.children}
              </DrawerContent>
            </Drawer>
          </div >
        );
    }
};

export default withRouter(DrawerRouterContainer);
