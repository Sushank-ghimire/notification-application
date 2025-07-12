import { create } from 'zustand';
import { INotification, NotificationStore } from '~/types';
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
      await api.patch(`/notification/${notificationId}/read`);
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
      console.log('Error occured : ', error);
    }
  },
  markAsUnread: async (notificationId) => {
    try {
      await api.patch(`/notification/${notificationId}/unread`);
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
      console.log('Error occured : ', error);
    }
  },
}));

export { useNotification };
