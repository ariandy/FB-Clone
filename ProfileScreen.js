import React, { Component } from 'react';
import { Image , View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { Container, Header,    Title,  Content,
         Footer,    FooterTab, Button, Left,
         Right,     Body,      Icon,   Text, 
         Input,     Thumbnail, Card,   CardItem} from 'native-base';

class ProfileScreen extends Component {

  static navigationOptions ={header:null}

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome5" name='camera-retro' />
            </Button>
          </Left>
          <Body>
            <Input placeholder="Search" placeholderTextColor="white" style={{color:"white"}}/>
          </Body>

          <Right>
            <Button transparent>
              <Icon type="FontAwesome5" name='comment-dots' />
            </Button>
          </Right>
        </Header>
        
        <Header style={{backgroundColor:"white"}}>
          <Body>
            <Button transparent onPress={()=>this.props.navigation.navigate("Feeds")}>
              <Icon name='newspaper' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='users' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='store' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='user' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='bell' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='menu' style={{color:"blue"}}/>
            </Button>
          </Body>
        </Header>

        <Content padder>
          <Image source={require('./assets/junji-ito3.jpg')} style={{height: 200, width: null,}}/>
          <Image source={require('./assets/junji-ito4.jpg')} style={{height: 200, width: 200, borderRadius:100, alignSelf:"center", marginTop:-100}}/>  
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen

const styles = StyleSheet.create({
  storyStyle : {
    width:130,
    height:230,
    backgroundColor:"grey",
    borderRadius:20,
    marginTop: 10,
    marginLeft: 10,
  },
    storyProfile : {
    width:130,
    height:230,
    backgroundColor:"grey",
    borderRadius:20,
  },
});