import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  container : {
    marginTop:10, marginLeft:10, marginRight:10, marginBottom:10
  },
  favourite : {
    color:Colors.green, fontSize:Fonts.size.h1
  },
  address : {
    fontSize:Fonts.size.medium, color:Colors.green
  },
  text : {
    fontSize:Fonts.size.medium, color:Colors.text, marginTop:10
  },
  bodyContainer : {
    marginTop:10, marginLeft:20, marginRight:20
  },
  divider : {
    marginTop: 20,
    marginLeft : -10,
    marginRight : -10
  },
  sectionContainer : {
    marginTop:10, marginLeft:10, marginRight:10
  },
  noBorder : {
    borderBottomWidth:0
  },
  bottomContainer : {
    marginTop : 20,
    marginBottom : 20,
    marginLeft:20,
    marginRight:20
  },
  outlineBorder : {
    borderWidth:1, margin:5, padding:10, borderColor:Colors.green,borderRadius:10
  },
  counterValue : {
    fontSize:22, fontWeight:'bold',color:Colors.green
  },
  addCart : {
    fontSize:16, color:Colors.white, margin:5
  }
})
