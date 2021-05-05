import React from 'react';
import {TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const NewInput = ({
  takeNumberFromKeyboard,
  label,
  fontSize,
  fontColor,
  placeholder,
  numberOfLines,
  iconName,
  iconSize,
  iconcolor,
  rightIconOn,
  rightIconName,
  rightIconSize,
  rightIconColor,
  handleRigntIconClick,
  password,
  location,
  showMap,
  value,
  valueHandle,
}) => {
  const [secure, setSecure] = React.useState(true);
  const inputStyle = {
    fontSize: fontSize ? fontSize : 16,
    color: fontColor ? fontColor : 'black',
  };

  return (
    <TextInput
      style={inputStyle}
      onChangeText={v => valueHandle(v)}
      value={value}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      onFocus={location ? showMap : undefined}
      secureTextEntry={password ? secure : undefined}
      multiline={numberOfLines ? true : false}
      keyboardType={takeNumberFromKeyboard ? 'numeric' : 'default'}
      numberOfLines={numberOfLines}
      left={
        <TextInput.Icon
          name={() => (
            <FontAwesome name={iconName} size={iconSize} color={iconcolor} />
          )}
        />
      }
      right={
        password || rightIconOn ? (
          <TextInput.Icon
            name={() => (
              <FontAwesome
                name={
                  rightIconOn ? rightIconName : secure ? 'eye-slash' : 'eye'
                }
                size={rightIconSize ? rightIconSize : iconSize}
                color={rightIconColor ? rightIconColor : iconcolor}
                onPress={
                  password ? () => setSecure(!secure) : handleRigntIconClick
                }
              />
            )}
          />
        ) : undefined
      }
    />
  );
};

export default NewInput;
