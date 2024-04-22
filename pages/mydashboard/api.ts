import axios from 'axios';
import { Dashboard } from '@components/sidemenu/Sidemenu.type';

const TEMP_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyNSwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNTk5NjAzLCJpc3MiOiJzcC10YXNraWZ5In0.LEYdnW0mcRvx9mAKczvnJWXGqZrQBA3ALmmqdM7iMq0';

const instance = axios.create({ baseURL: 'https://sp-taskify-api.vercel.app/4-4' });

export const getMyInfo = async () => {
  try {
    const res = await instance.get('/users/me', {
      headers: {
        Authorization: `Bearer ${TEMP_TOKEN}`,
      },
    });
    const products = await res.data;
    return products;
  } catch (error) {
    console.error(error);
  }
};
export const getMyDashboards = async () => {
  try {
    const res = await instance.get('/dashboards?navigationMethod=infiniteScroll', {
      headers: {
        Authorization: `Bearer ${TEMP_TOKEN}`,
      },
    });
    const products = await res.data.dashboards;
    return products;
  } catch (error) {
    console.error(error);
  }
};
export const getMyDashboardsByPagination = async (tempNumber: number) => {
  try {
    const res = await instance.get(`/dashboards?navigationMethod=pagination&cursorId=1&page=1&size=${tempNumber}`, {
      headers: {
        Authorization: `Bearer ${TEMP_TOKEN}`,
      },
    });
    const products = await res.data;
    return products;
  } catch (error) {
    console.error(error);
  }
};
export const postAddDashboard = async () => {
  // temp
  await instance.post('/dashboards', JSON.stringify({ title: 'test123', color: '#111111' }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TEMP_TOKEN}`,
    },
  });
};
export const getInvitations = async () => {
  try {
    const res = await instance.get('/invitations', {
      headers: {
        Authorization: `Bearer ${TEMP_TOKEN}`,
      },
    });
    const products = res.data.invitations;
    return products;
  } catch (error) {
    console.error(error);
  }
};
