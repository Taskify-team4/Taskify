import axios from 'axios';
import { Dashboard } from '@components/sidemenu/Sidemenu.type';

const instance = axios.create({ baseURL: 'https://sp-taskify-api.vercel.app/4-4' });

export const getMyDashboards = async () => {
  try {
    const res = await instance.get('/dashboards?navigationMethod=infiniteScroll', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyNSwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNTk5NjAzLCJpc3MiOiJzcC10YXNraWZ5In0.LEYdnW0mcRvx9mAKczvnJWXGqZrQBA3ALmmqdM7iMq0',
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
    const res = await instance.get(
      `/dashboards?navigationMethod=pagination&cursorId=${tempNumber}&page=${tempNumber}&size=${tempNumber}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyNSwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNTk5NjAzLCJpc3MiOiJzcC10YXNraWZ5In0.LEYdnW0mcRvx9mAKczvnJWXGqZrQBA3ALmmqdM7iMq0',
        },
      },
    );
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
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyNSwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNTk5NjAzLCJpc3MiOiJzcC10YXNraWZ5In0.LEYdnW0mcRvx9mAKczvnJWXGqZrQBA3ALmmqdM7iMq0',
    },
  });
};
export const getInvitations = async () => {
  try {
    const res = await instance.get('invitations', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyNSwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNTk5NjAzLCJpc3MiOiJzcC10YXNraWZ5In0.LEYdnW0mcRvx9mAKczvnJWXGqZrQBA3ALmmqdM7iMq0',
      },
    });
    const products = res.data.invitations;
    return products;
  } catch (error) {
    console.error(error);
  }
};
