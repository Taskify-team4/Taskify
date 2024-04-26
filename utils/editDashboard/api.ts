import baseAxios from '@node_modules/axios';
import { User } from '@utils/testData';
import { DashBoardMember, DashBoardNameData, Invitations } from '@utils/editDashboard/edit.type';
import { PAGE_SIZE } from '@constants/page';
import {
  CONSISTENT_INVITATION,
  ERROR_400_MESSAGE,
  ERROR_401_MESSAGE,
  ERROR_403_MESSAGE,
  ERROR_404_MESSAGE,
  ERROR_409_MESSAGE,
  INVALID_REQUEST_MESSAGE,
  NETWORK_ERROR,
  NO_AUTHORITY_MESSAGE,
  NO_DASHBOARD_MEMBER_MESSAGE,
  NO_DASHBOARD_MESSAGE,
  NO_INVITATION_MESSAGE,
  NO_USER_MESSAGE,
  NICKNAME_LESS_10,
  WRONG_PASSWORD,
} from '@constants/error';
import { TDashInfo } from '@pages/dashboard/Dashboard.type';

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczMCwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzE0MTIzNDc1LCJpc3MiOiJzcC10YXNraWZ5In0.FB83JcbATwArZzJhSavD6EnD7hUUhKBjMwBGC1Or3aw';
const axios = baseAxios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-4/',
});

export const getDashboard = async (id: string): Promise<DashBoardNameData> => {
  return await axios
    .get(`dashboards/${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_401_MESSAGE) alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
      return { title: null, color: null, createdByMe: false };
    });
};

export const getDashboardInvites = async (id: string, page: number) => {
  return await axios
    .get(`dashboards/${id}/invitations?page=${page}&size=${PAGE_SIZE}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .then((data) => {
      const newInvitees: User[] = [];
      const newInvitations: Invitations[] = [];
      data.invitations.forEach((newData: any) => {
        if (!newInvitees.some((prevData) => prevData.id === newData.invitee.id)) {
          newInvitations.push({ id: newData.id, invitee: newData.invitee });
        }
      });

      return { invitees: newInvitations, totalInvitees: data.totalCount };
    })
    .catch((error: Error) => {
      if (error.message === ERROR_403_MESSAGE) alert(NO_AUTHORITY_MESSAGE);
      else if (error.message === ERROR_404_MESSAGE) alert(NO_DASHBOARD_MESSAGE);
      return { invitees: [], totalInvitees: 0 };
    });
};

export const getDashboardMembers = async (id: string, page: number) => {
  return await axios
    .get(`members?page=${page}&size=${PAGE_SIZE}&dashboardId=${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .then((data) => {
      const newMembers: DashBoardMember[] = [];

      data.members.forEach((newData: any) => {
        if (!newMembers.some((prevData) => prevData.userId === newData.userId)) {
          newMembers.push(newData);
        }
      });

      return { members: newMembers, totalMembers: data.totalCount };
    })
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) alert(NO_DASHBOARD_MEMBER_MESSAGE);
      else if (error.message === ERROR_401_MESSAGE) alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
      return { members: [], totalMembers: 0 };
    });
};

export const getMyData = async (): Promise<DashBoardMember> => {
  return await axios
    .get(`users/me`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) alert(NO_USER_MESSAGE);
      else if (error.message === ERROR_401_MESSAGE) alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 내 정보 수정
export const putMyData = async (nickname: string, profileImageUrl?: string | null) => {
  return await axios
    .put(`users/me`, JSON.stringify({ nickname, profileImageUrl }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then(() => {
      return alert('내 정보가 정상적으로 수정되었습니다.');
    })
    .catch((error: Error) => {
      if (error.message === ERROR_400_MESSAGE) return alert(NICKNAME_LESS_10);
      else if (error.message === ERROR_401_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 이미지 업로드
export const upLoadImg = async (file: any) => {
  const formData = new FormData();
  formData.append('image', file);

  return await axios
    .post(`users/me/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((response) => response.data.profileImageUrl)
    .catch((error: Error) => {
      throw NETWORK_ERROR(error);
    });
};

// 비밀번호 변경
export const changePassword = async (password: string, newPassword: string) => {
  return await axios
    .put(`auth/password`, JSON.stringify({ password, newPassword }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then(() => {
      return alert('비밀번호가 성공적으로 변경되었습니다.');
    })
    .catch((error: Error) => {
      if (error.message === ERROR_400_MESSAGE) return alert(WRONG_PASSWORD);
      else if (error.message === ERROR_404_MESSAGE) return alert(NO_USER_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

export const postDashboardInvites = async (id: string, email: string) => {
  await axios
    .post(`dashboards/${id}/invitations`, JSON.stringify({ email }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      else if (error.message === ERROR_409_MESSAGE) return alert(CONSISTENT_INVITATION);
      else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

export const reactDashboardInvites = async (id: number) => {
  await axios
    .put(`invitations/${id}`, JSON.stringify({ inviteAccepted: true }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_INVITATION_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

export const getDashboardCreate = async () => {
  await axios.post('dashboards', JSON.stringify({ title: 'test', color: '#111111' }), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
};

export const getDashboardList = async (): Promise<TDashInfo[]> => {
  return await axios
    .get(`dashboards?navigationMethod=infiniteScroll`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data.dashboards)
    .catch((error: Error) => {
      if (error.message === ERROR_401_MESSAGE) alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

export const updateDashboard = async (id: string, title: string, color: string) => {
  return await axios
    .put(`dashboards/${id}`, JSON.stringify({ title, color: color }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data.dashboards)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

export const deleteInvite = async (id: string, inviteId: number) => {
  await axios
    .delete(`dashboards/${id}/invitations/${inviteId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

export const deleteMember = async (id: number) => {
  await axios
    .delete(`members/${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

export const deleteDashboard = async (id: string) => {
  await axios
    .delete(`dashboards/${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};
