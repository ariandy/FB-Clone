import React, { Component } from 'react';
import { Image , View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { Container, Header,    Title,  Content, Input,
         Footer,    FooterTab, Button, Left,
         Right,     Body,      Icon,   Text } from 'native-base';
export default class Profile extends Component {
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
            <Button transparent>
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

        <Header style={{height:60, backgroundColor:"white"}}>
          <Body>
            <ImageBackground source={require('./junji-ito.png')} style={{width:38, height:38, borderRadius:50,}}/>
          </Body>
          <Body>
            <Button bordered rounded style={{width:270}}>
              <Text>Apa?</Text>
            </Button>
          </Body>
          <Right>
            <View style={{marginRight:10}}>
              <Icon name='file-image' type='FontAwesome5' style={{color:"blue",}}/>
            </View>
          </Right>
        </Header>

        <Content>
          <ScrollView horizontal={true}>
            <View style={{flex:1, flexDirection:'row'}}>
              <View style={styles.storyStyle}>
                <Image source={require('./moses.jpg')} style={styles.storyProfile}/>
              </View>
              <View style={styles.storyStyle} />
              <View style={styles.storyStyle} />
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

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