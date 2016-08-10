import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  View
} from 'native-base';

export default class Markets extends Component {
  render(){
    console.log("FROM MARKETS COMPONENET: ", this.props.marketData)
    return (
      <Container>
        <Content>
          {this.props.marketData.map((market, id)=>{
            return (
              <Card key={id} style={styles.margin}>
                <CardItem header>
                  <Text>
                    {market.market_name}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text>{market.operation_hours}</Text>
                  <Text>{market.address_line_1}</Text>
                  <Text>{market.city}, {market.state}</Text>
                </CardItem>
                <CardItem header>
                  <Text>{market.operation_season}</Text>
                </CardItem>
              </Card>
            )
          })}
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  margin: {
    margin:10
  }
})
