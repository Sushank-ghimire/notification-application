import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Step3Review } from '~/components/form/Review';
import Step2UserCountry from '~/components/form/Step2';
import UserInfo from '~/components/form/UserInfo';
import { useMultistepForm } from '~/store/store';

const { width } = Dimensions.get('window');

const Modal = () => {
  const { step, nextStep, prevStep, handleSubmit } = useMultistepForm();

  const router = useRouter();

  const handleNext = () => {
    nextStep();
  };

  const handleSubmitForm = () => {
    router.push('/notifications');
    handleSubmit();
  };

  return (
    <KeyboardAvoidingView className="absolute bottom-0 left-0 right-0 top-0 flex-1 items-center justify-center bg-black/30 px-4">
      <View>
        <View
          className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          style={{ width: width * 0.9 }}>
          <Text className="mb-4 text-center text-lg font-semibold text-gray-700">
            Step {step} of 3
          </Text>

          {step === 1 && <UserInfo />}
          {step === 2 && <Step2UserCountry />}
          {step === 3 && <Step3Review />}

          <View className="mt-6 flex-row justify-between">
            {step > 1 ? (
              <TouchableOpacity
                className="w-fit rounded-lg bg-gray-200 px-7 py-4 "
                onPress={prevStep}>
                <Text className="font-medium ">Previous</Text>
              </TouchableOpacity>
            ) : (
              <View className="w-[80px]" />
            )}

            {step < 3 ? (
              <TouchableOpacity
                className="w-fit rounded-lg bg-blue-500 px-7 py-4 "
                onPress={handleNext}>
                <Text className="font-medium text-white">Next</Text>
              </TouchableOpacity>
            ) : (
              <View className="w-[80px]" />
            )}

            {step === 3 && (
              <TouchableOpacity
                className="w-fit rounded-lg bg-blue-500 px-7 py-4 "
                onPress={handleSubmitForm}>
                <Text className=" font-bold text-white">Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Modal;
