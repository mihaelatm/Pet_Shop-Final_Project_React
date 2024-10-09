import { notification } from "antd";

const NotificationHandler = {
  success: (message, description) => {
    notification.success({
      message: message,
      description: description,
      placement: "topRight",
    });
  },

  error: (message, description) => {
    notification.error({
      message: message,
      description: description,
      placement: "topRight",
    });
  },
};

export default NotificationHandler;
