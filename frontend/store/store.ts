import { create } from 'zustand';
import { NotificationStore } from '~/types';
import api from '~/utils/axios';

const useNotification = create<NotificationStore>((set) => ({
  notifications: [],
  isLoading: false,
  error: null,
  fetchNotifications: async (userId) => {
    try {
      const res = await api.get('/notification/', {
        data: { id: userId },
      });
      const data = await res.data.data;
      set({ notifications: data });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
      console.log('Error occured while fetching notifications : ', error);
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
