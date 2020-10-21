import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { partners } from '../redux/partners';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
      partners: state.partners
  };
};


function Mission() {
  return (
    <Card title={"Mission"}>
      <Text>
                We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness.We increase access to
         dventure for the public while promoting safe and respectful use of
         esources.The expert wilderness trekkers on our staff personally verify
          ch campsite to make sure that they are up to our standards.We also
           sent a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: partners
    }
  }

  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subTitle={item.description}
          leftAvatar={{source: {uri: baseUrl + item.image}}}
        />
      );
    };

    return (
      <ScrollView>
        <Mission />
        <Card title="Community Partners">
        <FlatList 
                        data={this.props.partners.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
        </Card>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(About);
