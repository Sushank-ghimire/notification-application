import { View, Text } from 'react-native';
import { useMultistepForm } from '~/store/store';
import { Picker } from '@react-native-picker/picker';

const countries = [
  'Nepal',
  'India',
  'United States',
  'United Kingdom',
  'Australia',
  'Germany',
  'Japan',
];

const Step2UserCountry = () => {
  const { setData } = useMultistepForm();

  return (
    <View className="w-full gap-4">
      <Text className="text-sm text-gray-600">Select your country:</Text>
      <Picker selectedValue={'Select country'} onValueChange={(val) => setData({ country: val })}>
        {countries.map((country) => (
          <Picker.Item label={country} value={country} key={country} />
        ))}
      </Picker>

      <Text className="text-sm text-gray-600">Select your gender:</Text>
      <Picker selectedValue={'Select Gender'} onValueChange={(val) => setData({ gender: val })}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
    </View>
  );
};

export default Step2UserCountry;
