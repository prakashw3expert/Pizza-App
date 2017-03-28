import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Content, Header, Left, Button, Icon, Body, Title, Right,ListItem, Badge, Container,Grid, Col } from 'native-base'
import { Images,Fonts, Colors } from '../Themes'
import { Actions } from 'react-native-router-flux'
import Hr from 'react-native-hr'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  constructor(props) {
      super(props);
      this.toggleCounter = this.toggleCounter.bind(this);
      this.state = {
          counterValue: 1,
          mushroom : false,
          chicken : false,
          peppers : true,
          mushroomNext : false,
          chickenNext : true,
          peppersNext : false,

      };
  }

  toggleCounter(type) {

    var counter = this.state.counterValue;
    if(counter < 1 && type === 'minus') return;

    (type === "add") ? counter++ : counter--;
    this.setState({counterValue : counter});

  }



  render () {
    return (
        <View style={styles.mainContainer}>
        <ScrollView>
          <Image source={Images.pizzaImage} style={{height:100}} />
          <View style={styles.container}>
            <ListItem icon>
               <Body>
                 <Text style={[Fonts.style.h1, {color:Colors.text}]}>Chicken Pizza
                 <Text> <Icon name="heart" style={{color:Colors.green, fontSize:Fonts.size.h4}} /> </Text>
                 </Text>
               </Body>
               <Right>
                <Text style={{fontSize:Fonts.size.h1, color:Colors.green, fontWeight:'bold'}}>$ 120 </Text>
               </Right>
           </ListItem>
           <View style={styles.bodyContainer}>
              <Text style={styles.address}>ordered on Easty 123 times </Text>
              <Text style={styles.text}>roasted garlic, parmesan cheese sauce, Chicken breats, roasted garlic, parmesan cheese </Text>
           </View>
         </View>
         <View style={styles.divider}>
          <Hr lineColor='#F6EBE1'   />
         </View>

         <View style={[styles.sectionContainer]}>
            <Text style={[Fonts.style.h5, {color:Colors.text, marginBottom : 15, marginTop: 15}]}>Special Instrucations </Text>
                <Content>
                  <ListItem icon>
                       <Left>
                        {this.state.mushroom === true ? <FontAwesome name='circle'  size={28} color={Colors.green} onPress={() => this.setState({mushroom: false})} /> : <FontAwesome name='circle-o'  size={28} color={Colors.green} onPress={() => this.setState({mushroom: true})} />}
                       </Left>
                       <Body style={{borderBottomWidth:0}}>
                         <Text>Mushroom</Text>
                       </Body>
                       <Right style={{borderBottomWidth:0}}>
                        <Text>+</Text>
                        <Text>$1.50</Text>
                       </Right>
                   </ListItem>
                   <ListItem icon>
                        <Left>
                           {this.state.chicken === true ? <FontAwesome name='circle'  size={28} color={Colors.green} onPress={() => this.setState({chicken: false})} /> : <FontAwesome name='circle-o'  size={28} color={Colors.green} onPress={() => this.setState({chicken: true})} />}
                        </Left>
                        <Body style={{borderBottomWidth:0}}>
                          <Text>Chicken</Text>
                        </Body>
                        <Right style={{borderBottomWidth:0}}>

                        </Right>
                    </ListItem>
                    <ListItem icon>
                         <Left>
                            {this.state.peppers === true ? <FontAwesome name='circle'  size={28} color={Colors.green} onPress={() => this.setState({peppers: false})} /> : <FontAwesome name='circle-o'  size={28} color={Colors.green} onPress={() => this.setState({peppers: true})} />}
                         </Left>
                         <Body style={{borderBottomWidth:0}}>
                           <Text>Peppers</Text>
                         </Body>
                         <Right style={{borderBottomWidth:0}}>

                         </Right>
                     </ListItem>

                     <ListItem icon>
                          <Left>
                             {this.state.mushroomNext === true ? <FontAwesome name='circle'  size={28} color={Colors.green} onPress={() => this.setState({mushroomNext: false})} /> : <FontAwesome name='circle-o'  size={28} color={Colors.green} onPress={() => this.setState({mushroomNext: true})} />}
                          </Left>
                          <Body style={{borderBottomWidth:0}}>
                            <Text>Mushroom</Text>
                          </Body>
                          <Right style={{borderBottomWidth:0}}>
                           <Text>+</Text>
                           <Text>$1.50</Text>
                          </Right>
                      </ListItem>
                      <ListItem icon>
                           <Left>
                              {this.state.chickenNext === true ? <FontAwesome name='circle'  size={28} color={Colors.green} onPress={() => this.setState({chickenNext: false})} /> : <FontAwesome name='circle-o'  size={28} color={Colors.green} onPress={() => this.setState({chickenNext: true})} />}
                           </Left>
                           <Body style={{borderBottomWidth:0}}>
                             <Text>Chicken</Text>
                           </Body>
                           <Right style={{borderBottomWidth:0}}>

                           </Right>
                       </ListItem>
                       <ListItem icon>
                            <Left>
                               {this.state.peppersNext === true ? <FontAwesome name='circle'  size={28} color={Colors.green} onPress={() => this.setState({peppersNext: false})} /> : <FontAwesome name='circle-o'  size={28} color={Colors.green} onPress={() => this.setState({peppersNext: true})} />}
                            </Left>
                            <Body style={{borderBottomWidth:0}}>
                              <Text>Peppers</Text>
                            </Body>
                            <Right style={{borderBottomWidth:0}}>

                            </Right>
                        </ListItem>

               </Content>
               </View>

             <View style={styles.divider}>
              <Hr lineColor='#F6EBE1'   />
             </View>

             <View style={[styles.bottomContainer]}>

                 <Grid>
                     <Col style={styles.outlineBorder}>
                     <Grid>
                        <Col style={{ marginLeft: 10 }}><FontAwesome name='minus'  size={22} color={Colors.green} onPress={this.toggleCounter.bind(this, 'minus')} /></Col>
                        <Col style={{ marginLeft: 20 }}><Text style={styles.counterValue}>{this.state.counterValue}</Text></Col>
                        <Col style={{ marginLeft: 10}}><FontAwesome name='plus'  size={22} color={Colors.green} onPress={this.toggleCounter.bind(this, 'add')} /></Col>
                    </Grid>
                    </Col>
                     <Col style={[styles.outlineBorder, {backgroundColor:Colors.green}]} >
                      <Text style={styles.addCart}>Add to My Order</Text>
                     </Col>
                 </Grid>
             </View>


        </ScrollView>
        </View>
    )
  }
}
