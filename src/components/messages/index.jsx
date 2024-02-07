import { notification } from "antd";

export const showSuccessNotification = (message, description) => {
  notification.success({
    message,
    description,
  });
};

export const showErrorNotification = (message, description) => {
  notification.error({
    message,
    description,
  });
};

export const showWarningNotification = (message, description) => {
  notification.warning({
    message,
    description,
  });
};

notification.config({
  placement: "top",
  duration: 2,
});
