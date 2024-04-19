import baseAxios from '@node_modules/axios';
import { User } from '@utils/testData';
import { DashBoardMember, DashBoardNameData, Invitations } from '@utils/editDashboard/edit.type';
import { dashboard } from '@components/sidemenu/Sidemenu.type';
import { PAGE_SIZE } from '@constants/page';

const axios = baseAxios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-4/',
});

export const getDashboard = async (id: string): Promise<DashBoardNameData> => {
  const res = await axios.get(`dashboards/${id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
  return res.data;
};

export const getDashboardInvites = async (id: string, page: number) => {
  const res = await axios.get(`dashboards/${id}/invitations?page=${page}&size=${PAGE_SIZE}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
  const data = res.data.invitations;
  const newInvitees: User[] = [];
  const newInvitations: Invitations[] = [];

  data.forEach((newData: any) => {
    if (!newInvitees.some((prevData) => prevData.id === newData.invitee.id)) {
      newInvitations.push({ id: newData.id, invitee: newData.invitee });
    }
  });

  return { invitees: newInvitations, totalInvitees: res.data.totalCount };
};

export const getDashboardMembers = async (id: string, page: number) => {
  const res = await axios.get(`members?page=${page}&size=${PAGE_SIZE}&dashboardId=${id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
  const data = res.data.members;

  const newMembers: DashBoardMember[] = [];

  data.forEach((newData: any) => {
    if (!newMembers.some((prevData) => prevData.userId === newData.userId)) {
      newMembers.push(newData);
    }
  });

  return { members: newMembers, totalMembers: res.data.totalCount };
};

export const getMyData = async (): Promise<DashBoardMember[]> => {
  const res = await axios.get(`users/me`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });

  return res.data;
};

export const postDashboardInvites = async (id: string, email: string) => {
  await axios.post(`dashboards/${id}/invitations`, JSON.stringify({ email }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
};

export const reactDashboardInvites = async (id: number) => {
  await axios.put(`invitations/${id}`, JSON.stringify({ inviteAccepted: true }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMywidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDYwOTg1LCJpc3MiOiJzcC10YXNraWZ5In0.buN9b0vinYtRXVKYcylLuJUO-MKqNrTuJ1K-xjv6uQ0',
    },
  });
};

export const getDashboardCreate = async () => {
  await axios.post('dashboards', JSON.stringify({ title: 'test', color: '#111111' }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
};

export const getDashboardList = async (): Promise<dashboard[]> => {
  const res = await axios.get(`dashboards?navigationMethod=infiniteScroll`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });

  return res.data.dashboards;
};

export const updateDashboard = async (id: string, title: string, color: string) => {
  const res = await axios.put(`dashboards/${id}`, JSON.stringify({ title, color: color }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });

  return res.data.dashboards;
};

export const deleteInvite = async (id: string, inviteId: number) => {
  await axios.delete(`dashboards/${id}/invitations/${inviteId}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
};

export const deleteMember = async (id: number) => {
  await axios.delete(`members/${id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
};

export const deleteDashboard = async (id: string) => {
  await axios.delete(`dashboards/${id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
};
