import get from 'lodash/get';
import Notification from '../components/Notification';

export const handleApiError = (res) => {
  const { status, statusText } = get(res, 'data', {
    status: status || 500,
    statusText: statusText || 'Try again after sometime',
  });

  switch (status) {
    case 400:
      Notification('error', 'Request failed', statusText);
      break;
    default:
      Notification('error', 'Server Error', statusText);
  }
};
