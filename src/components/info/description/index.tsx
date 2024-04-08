import {Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './description.styles.ts';

export const Description = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        consectetur, delectus.
        {!expanded
          ? '...'
          : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos est maiores neque omnis quisquam sequi tempora? Eaque exercitationem magnam provident sequi sint suscipit voluptate! Aliquam aliquid commodi consequuntur culpa!'}
      </Text>
      {expanded ? (
        <TouchableOpacity onPress={handleExpand}>
          <Text style={styles.button}>less</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleExpand}>
          <Text style={styles.button}>more</Text>
        </TouchableOpacity>
      )}
    </>
  );
};
