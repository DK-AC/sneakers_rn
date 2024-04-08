import {View} from 'react-native';
import React, {useState} from 'react';
import {Description} from './description';
import {styles} from './info.styles.ts';
import {InfoTitleLink} from './info-title-link';
import {Delivery} from './delivery';
import {Reviews} from './reviews';
import {InfoSneaker} from '../../constants';

type Props = {
  description: InfoSneaker;
};

export const Info = ({description}: Props) => {
  const {DESCRIPTION, REVIEWS, DELIVERY} = InfoSneaker;

  const [activeTab, setActiveTab] = useState<InfoSneaker>(DESCRIPTION);

  const handleTabChange = (tab: InfoSneaker) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <InfoTitleLink activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === DESCRIPTION && <Description description={description} />}
      {activeTab === REVIEWS && <Reviews description={description} />}
      {activeTab === DELIVERY && <Delivery description={description} />}
    </View>
  );
};
