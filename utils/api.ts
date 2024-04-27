import baseAxios from '@node_modules/axios';
import { User } from '@utils/testData';
import { DashBoardMember, Invitations } from '@utils/editDashboard/edit.type';
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
} from '@constants/error';
import {
  TCard,
  TCardForm,
  TColumn,
  TColumnForm,
  TComment,
  TCommentForm,
  TDashInfo,
} from '@pages/dashboard/Dashboard.type';

const ACCESS_TOKEN =
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc0NSwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNDUyNTc5LCJpc3MiOiJzcC10YXNraWZ5In0.xYXQqIeyqeE-FQw7z7w4P9I430xL277-Dm22VoLVx3I';
  // 성욱's 토큰
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyNSwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzNTk5NjAzLCJpc3MiOiJzcC10YXNraWZ5In0.LEYdnW0mcRvx9mAKczvnJWXGqZrQBA3ALmmqdM7iMq0';

const axios = baseAxios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-4/',
});

// 대시보드 상세정보 조회
export const getDashboardInfo = async (id: string): Promise<TDashInfo> => {
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
    });
};

// 내 대시보드에 초대한 목록 조회
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

// 대시보드의 구성원 조회
export const getDashboardMembers = async (
  id: string,
  page = 1,
): Promise<{
  members: DashBoardMember[];
  totalMembers: number;
}> => {
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

// 내 정보 조회
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

// 대시보드 초대 보내기
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

// 대시보드 초대 응답하기
// export const reactDashboardInvites = async (id: number, check: boolean): Promise<any> => {
//   await axios
//     .put(`/invitations/${id}`, JSON.stringify({ inviteAccepted: check }), {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//       },
//     })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((error: Error) => {
//       if (error.message === ERROR_404_MESSAGE) return alert(NO_INVITATION_MESSAGE);
//       else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
//       else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
//       throw NETWORK_ERROR(error);
//     });
// };
export const reactDashboardInvites = async (id: number, check: boolean) => {
  try {
    const res = await axios.put(`/invitations/${id}`, JSON.stringify({ inviteAccepted: check }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return res;
  } catch (error: any) {
    if (error.message === ERROR_404_MESSAGE) return alert(NO_INVITATION_MESSAGE);
    else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
    else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
  }
};

// // 새로운 대시보드 생성하기
// export const postNewDashboard = async (title: string, color: string): Promise<any> => {
//   await axios
//     .post('/dashboards', JSON.stringify({ title: title, color: color }), {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//       },
//     })
//     .then((res) => {
//       console.log(res.data);
//       return res.data;
//     })
//     .catch((error) => alert('대시보드 생성 실패'));
// };

// 새로운 대시보드 생성하기
export const postAddDashboard = async (title: string, color: string) => {
  // temp
  try {
    const response = await axios.post('/dashboards', JSON.stringify({ title: title, color: color }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response;
  } catch (error) {
    alert('대시보드 생성 실패');
  }
};

// 대시보드 목록 조회
export const getDashboardList = async (): Promise<TDashInfo[]> => {
  return await axios
    .get(`dashboards?navigationMethod=infiniteScroll`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .then((data) => data.dashboards)
    .catch((error: Error) => {
      if (error.message === ERROR_401_MESSAGE) alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 대시보드 정보 수정
export const updateDashboard = async (id: string, title: string, color: string) => {
  return await axios
    .put(`dashboards/${id}`, JSON.stringify({ title, color: color }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .then((data) => data.dashboards)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 내가 보낸 초대 취소하기
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

// 대시보드 구성원 삭제하기
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

// 특정 대시보드 삭제하기
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

// 컬럼 목록 조회
export const getColumns = async (id: number): Promise<TColumn[]> => {
  return await axios
    .get(`columns?dashboardId=${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data);
};

// 컬럼 생성
export const postNewColumn = async (columnData: TColumnForm): Promise<TColumn> => {
  return await axios.post(`columns`, JSON.stringify(columnData), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
};

// 컬럼 삭제
export const deleteColumn = async (id: number): Promise<any> => {
  return await axios
    .delete(`columns/${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 컬럼 이름 수정
export const updateColumnTitle = async (id: number, title: { title: string }): Promise<any> => {
  return await axios
    .put(`columns/${id}`, JSON.stringify(title), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 할 일 카드 목록 조회
export const getCards = async (id: number): Promise<TCard[]> => {
  return await axios
    .get(`cards?columnId=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .then((data) => data.cards);
};

// 할 일 카드 삭제
export const deleteCard = async (id: number) => {
  return await axios
    .delete(`cards/${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 할 일 카드 생성
export const postNewCard = async (cardData: TCardForm): Promise<any> => {
  return await axios
    .post('cards', JSON.stringify(cardData), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => alert('카드 생성 실패'));
};

// 할 일 카드 수정
export const updateCard = async (cardData: TCardForm, id: number | undefined): Promise<any> => {
  return await axios
    .put(`cards/${id}`, JSON.stringify(cardData), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 할 일 카드 이미지 업로드
export const postCardImage = async (id: number, formData) => {
  return await axios
    .post(`columns/${id}/card-image`, formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .then((data) => data.imageUrl)
    .catch((error) => alert('댓글 생성 실패'));
};

// 댓글 생성
export const postNewComment = async (commentData: TCommentForm): Promise<any> => {
  return await axios
    .post('comments', JSON.stringify(commentData), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => alert('댓글 생성 실패'));
};

// 댓글 수정
export const updateComment = async (commentData: TCommentForm, id: number) => {
  return await axios
    .put(`comments/${id}`, JSON.stringify(commentData), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error: Error) => {
      if (error.message === ERROR_404_MESSAGE) return alert(NO_DASHBOARD_MESSAGE);
      else if (error.message === ERROR_403_MESSAGE) return alert(NO_AUTHORITY_MESSAGE);
      else if (error.message === ERROR_400_MESSAGE) return alert(INVALID_REQUEST_MESSAGE);
      throw NETWORK_ERROR(error);
    });
};

// 댓글 조회
export const getComments = async (id: number): Promise<TComment[]> => {
  return await axios
    .get(`comments?size=10&cardId=${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .then((data) => data.comments);
};

// 내 대시보드 목록 조회
export const getMyDashboards = async (page: number) => {
  return await axios
    .get(`/dashboards?navigationMethod=pagination&page=${page}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => alert(error));
};

// 페이지네이션으로 내 대시보드 목록 조회
export const getMyDashboardsByPagination = async (page: number) => {
  return await axios
    .get(`/dashboards?navigationMethod=pagination&page=${page}&size=5`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => alert(error));
};

// 초대받은 목록 조회
// export const getInvitations = async (cursorId?: number) => {
//   if (cursorId === undefined) {
//     return await axios
//       .get('/invitations', {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//         },
//       })
//       .then((res) => res.data)
//       .then((data) => data.invitations)
//       .catch((error) => alert(error));
//   } else {
//     return await axios
//       .get(`/invitations?cursorId=${cursorId}`, {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//         },
//       })
//       .then((res) => res.data)
//       .then((data) => data.invitations)
//       .catch((error) => alert(error));
//   }
// };
export const getInvitations = async (cursorId?: number, title?: string) => {
  const titleStr = cursorId === undefined ? `?title=${title}` : `&title=${title}`;
  try {
    const res = await axios.get(`/invitations${cursorId ? `?cursorId=${cursorId}` : ''}${title ? titleStr : ''}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const products = res.data.invitations;
    console.log(res.data);
    return products;
  } catch (error) {
    console.error(error);
  }
};