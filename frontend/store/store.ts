import { Alert } from 'react-native';
import { create } from 'zustand';
import { IFormStore, INotification, NotificationStore } from '~/types';
import api from '~/utils/axios';

const useNotification = create<NotificationStore>((set, get) => ({
  notifications: [],
  unreadedNotifications: [],
  readedNotifications: [],
  isLoading: false,
  error: null,
  fetchNotifications: async (userId) => {
    set({ isLoading: true });
    try {
      const res = await api.get(`/notification/get/${userId}`);

      const data = res.data.data as INotification[];

      const unreadedNotifications = data.filter((notification) => notification.isRead === false);

      const readedNotifications = data.filter((notification) => notification.isRead === true);

      set({
        notifications: data,
        unreadedNotifications,
        readedNotifications,
      });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
      console.log('Error occured while fetching notifications : ', error);
    } finally {
      set({ isLoading: false });
    }
  },
  markAsRead: async (notificationId) => {
    try {
      const filteredNotifications = get().notifications.map((item) => {
        if (item._id === notificationId) {
          return {
            ...item,
            isRead: true,
          };
        } else {
          return item;
        }
      });
      set({ notifications: filteredNotifications });
      await api.patch(`/notification/${notificationId}/read`);
      get().fetchNotifications('user123');
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
      console.log('Error occured : ', error);
    }
  },
  markAsUnread: async (notificationId) => {
    try {
      const filteredNotifications = get().notifications.map((item) => {
        if (item._id === notificationId) {
          return {
            ...item,
            isRead: false,
          };
        } else {
          return item;
        }
      });
      set({ notifications: filteredNotifications });
      await api.patch(`/notification/${notificationId}/unread`);
      get().fetchNotifications('user123');
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
      console.log('Error occured : ', error);
    }
  },
}));

const useMultistepForm = create<IFormStore>((set, get) => ({
  step: 1,
  data: {
    gender: '',
    country: '',
    email: '',
    username: '',
    password: '',
  },
  nextStep: () => {
    if (get().step === 1) {
      const { email, username, password } = get().data;
      const isEmailValid = /\S+@\S+\.\S+/.test(email);
      const isUsernameValid = username.trim().length > 0;
      const isPasswordValid = password.length >= 6;
      if (!isEmailValid || !isUsernameValid || !isPasswordValid) {
        Alert.alert(
          'Invalid Input',
          `${
            !isUsernameValid ? '• Username is required\n' : ''
          }${!isEmailValid ? '• Enter a valid email\n' : ''}${
            !isPasswordValid ? '• Password must be at least 6 characters' : ''
          }`
        );
      } else {
        set((state) => ({ step: state.step + 1 }));
      }
    } else if (get().step === 2) {
      const { country, gender } = get().data;

      const isCountryValid = country.trim().length > 0;
      const isGenderValid = gender.trim().length > 0;
      if (!isCountryValid || !isGenderValid) {
        Alert.alert(
          'Missing Information',
          `${!isCountryValid ? '• Country is required\n' : ''}${
            !isGenderValid ? '• Gender is required' : ''
          }`
        );
      } else {
        set((state) => ({ step: state.step + 1 }));
      }
    } else {
      set((state) => ({ step: state.step + 1 }));
    }
  },
  prevStep: () => {
    set((state) => ({ step: state.step - 1 }));
  },
  setData: (fields) => set((state) => ({ data: { ...state.data, ...fields } })),
  reset: () =>
    set({
      step: 1,
      data: { username: '', email: '', password: '', country: '', gender: '' },
    }),
  handleSubmit: async () => {
    const { country, email, username, gender, password } = get().data;
    get().reset();
  },
}));

export { useNotification, useMultistepForm };
