import React from 'react';
import {TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const NewInput = ({
  label,
  numberOfLines,
  iconName,
  iconSize,
  iconcolor,
  password,
  value,
  valueHandle,
}) => {
  const [secure, setSecure] = React.useState(true);
  return (
    <TextInput
      onChangeText={v => valueHandle(v)}
      value={value}
      mode="outlined"
      label={label}
      secureTextEntry={password ? secure : undefined}
      multiline={numberOfLines ? true : false}
      numberOfLines={numberOfLines}
      left={
        <TextInput.Icon
          name={() => (
            <FontAwesome name={iconName} size={iconSize} color={iconcolor} />
          )}
        />
      }
      right={
        password ? (
          <TextInput.Icon
            name={() => (
              <FontAwesome
                name={secure ? 'eye-slash' : 'eye'}
                size={iconSize}
                color={iconcolor}
                onPress={() => setSecure(!secure)}
              />
            )}
          />
        ) : undefined
      }
    />
  );
};

export default NewInput;
