import { notification } from 'antd';

const descriptionQueue = [];

const Notification = (type, message, description) => {
  if (!descriptionQueue.includes(description)) {
    notification[type]({
      message,
      description,
      onClose: () => {
        const index = descriptionQueue.indexOf(description);
        descriptionQueue.splice(index, 1);
      },
    });
    descriptionQueue.push(description);
  }
};

export default Notification;
