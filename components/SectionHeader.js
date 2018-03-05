'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
  StyleSheet,
  View,
  Text,
  NativeModules
} from 'react-native';

const { UIManager } = NativeModules;

export default class SectionHeader extends Component {

  componentDidMount() {
    this.props.updateTag && this.props.updateTag(ReactNative.findNodeHandle(this.refs.view), this.props.sectionId);
  }

  render() {
    const SectionComponent = this.props.component;
    const content = SectionComponent ?
      <SectionComponent {...this.props} /> :
      <Text>{this.props.title}</Text>;

    return (
      <View ref="view">
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ececec'
  },
  text: {
    fontWeight: '700',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2
  }
});
