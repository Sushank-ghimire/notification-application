export interface INotification {
  _id: string;
  title: string;
  body: string;
  type: 'default' | 'form_action';
  recipient: string;
  isRead: boolean;
  createdAt: Date;
}

export interface NotificationStore {
  notifications: INotification[];
  isLoading: boolean;
  fetchNotifications: (userId: string) => Promise<void>;
  markAsRead: (notificationId: string) => void;
  markAsUnread: (notificationId: string) => void;
  error: string | null;
}
