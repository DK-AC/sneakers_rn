import {Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './delivery.styles.ts';

type Props = {
  delivery: string;
};

export const Delivery = ({delivery}: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Text style={styles.text}>
        {expanded
          ? delivery
          : `${delivery.substring(0, 100)}${
              delivery.length > 100 ? '...' : ''
            }`}
      </Text>
      {delivery.length > 100 && (
        <TouchableOpacity onPress={handleExpand}>
          <Text style={styles.button}>{expanded ? 'less' : 'more'}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};
