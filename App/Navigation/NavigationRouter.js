import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import MenuItemDetails from '../Containers/MenuItemDetails'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='menuItemDetails' component={MenuItemDetails} title='Sprazzo Cucina' renderLeftButton={NavItems.backButton} renderRightButton={NavItems.cartButton}/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
