import baseAxios from '@node_modules/axios';
import { User } from '@utils/testData';
import { DashBoardMember, DashBoardNameData } from '@utils/editDashboard/edit.type';

const axios = baseAxios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-4/',
});

export const getDashboard = async (): Promise<DashBoardNameData> => {
  const res = await axios.get(`dashboards/${6029}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
  return res.data;
};

export const getDashboardInvites = async () => {
  const res = await axios.get(`dashboards/${6029}/invitations`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
  const data = res.data.invitations;
  const newInvitees: User[] = [];

  data.forEach((newData: any) => {
    if (!newInvitees.some((prevData) => prevData.id === newData.invitee.id)) {
      newInvitees.push(newData.invitee);
    }
  });
  return newInvitees;
};

export const getDashboardMembers = async (): Promise<DashBoardMember[]> => {
  const res = await axios.get(`members?dashboardId=${6029}`, {
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

  return newMembers;
};

export const postDashboardInvites = async () => {
  const res = await axios.post(`dashboards/${6029}/invitations`, JSON.stringify({ email: 'asdf1234@naver.com' }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
};

export const getDashboardCreate = async () => {
  const res = await axios.post('dashboards', JSON.stringify({ title: 'test', color: '#111111' }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMiwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDI5OTU1LCJpc3MiOiJzcC10YXNraWZ5In0.1la3IrwbTBb9QjVdSl-1YpLnr64Fq74XXQpa_tqQp0A',
    },
  });
};
