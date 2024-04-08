import {Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './delivery.styles.ts';

type Props = {
  description: string;
};

export const Delivery = ({description}: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Text style={styles.text}>
        {expanded
          ? description
          : `${description.substring(0, 100)}${
              description.length > 100 ? '...' : ''
            }`}
      </Text>
      {description.length > 100 && (
        <TouchableOpacity onPress={handleExpand}>
          <Text style={styles.button}>{expanded ? 'less' : 'more'}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};
