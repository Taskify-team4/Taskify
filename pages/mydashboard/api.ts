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
export const getMyDashboards = async (page: number) => {
  try {
    const res = await instance.get(`/dashboards?navigationMethod=pagination&page=${page}`, {
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
export const getMyDashboardsByPagination = async (page: number) => {
  try {
    const res = await instance.get(`/dashboards?navigationMethod=pagination&page=${page}&size=5`, {
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
export const postAddDashboard = async (title: string, color: string) => {
  // temp
  const response = await instance.post('/dashboards', JSON.stringify({ title: title, color: color }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TEMP_TOKEN}`,
    },
  });
  return response;
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
export const postInvitation = async (dashId: number) => {
  try {
    const res = await instance.post(`/dashboards/${dashId}/invitations`, JSON.stringify({ email: 'hsw@test.com' }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TEMP_TOKEN}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
