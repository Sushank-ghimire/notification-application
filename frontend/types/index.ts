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
  unreadedNotifications: INotification[];
  readedNotifications: INotification[];
  listenToSocket: (id: string) => void;
}

interface MultiStepFormData {
  username: string;
  email: string;
  password: string;
  country: string;
  gender: string;
}

export interface IFormStore {
  step: number;
  data: MultiStepFormData;
  nextStep: () => void;
  prevStep: () => void;
  setData: (fields: Partial<MultiStepFormData>) => void;
  reset: () => void;
  handleSubmit: () => Promise<void>;
}
