import React, { Component } from 'react';
import { Image , View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { Container, Header,    Title,  Content, 
         Footer,    FooterTab, Button, Left,
         Right,     Body,      Icon,   Text, 
         Input,     Thumbnail, Card,   CardItem} from 'native-base';
import Status from './components/Status.js'

class FeedsScreen extends Component {

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
            <Input
              placeholder="Search"
              placeholderTextColor="white"
              style={{color:"white"}}
            />
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
            <Button transparent onPress={()=>this.props.navigation.navigate("Profile")}>
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
            <Thumbnail small source={require('./assets/junji-ito4.jpg')}/>
          </Body>
          <Body>
            <Button bordered rounded style={{width:270}}>
              <Text>What's on your mind?</Text>
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
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('./assets/moses.jpg')}
                  style={styles.storyProfile}
                />
              </View>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('./assets/angel1.jpg')}
                  style={styles.storyProfile}
                />
              </View>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('./assets/angel2.jpg')}
                  style={styles.storyProfile}
                />
              </View>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('./assets/balpro.jpg')}
                  style={styles.storyProfile}
                />
              </View>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('./assets/angel3.jpg')}
                  style={styles.storyProfile}
                />
              </View>
            </View>
          </ScrollView>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./assets/plankton.jpg')} />
                <Body>
                  <Text>Plankton</Text>
                  <Text note>22 hours ago</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('./assets/gait.jpg')} style={{height: 280, width:360, flex: 1}}/>
                <Status notes="With my quadrupedal, I'll try to steal the secret recipe of Krabby Patty."/>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>43 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>0 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>

            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./assets/junji-ito4.jpg')} />
                <Body>
                  <Text>Ariandy</Text>
                  <Text note>2 days ago</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('./assets/graph.jpg')} style={{height: 280, width:360, flex: 1}}/>
                <Status notes="I making a graph as Data Scientist at Krusty Krab"/>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>43 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>0 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>

            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default FeedsScreen

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