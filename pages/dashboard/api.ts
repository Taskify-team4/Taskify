import { TColumnForm } from './Dashboard.type';

const BASE_URL = 'https://sp-taskify-api.vercel.app/4-4';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyNSwidGVhbUlkIjoiNC00IiwiaWF0IjoxNzEzODQ1ODQ5LCJpc3MiOiJzcC10YXNraWZ5In0.TX6XvmAngZjr9geZyBxPISigXYsFmxJK9_B7ydCQ6cU';

// 대시보드 목록 조회
export async function getDashboards() {
  const url = `${BASE_URL}/dashboards?navigationMethod=infiniteScroll`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.json();
}

// 특정 대시보드 상세 조회
export async function getDashboardInfo(id: number) {
  const url = `${BASE_URL}/dashboards/${id}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.json();
}

// 컬럼 목록 조회
export async function getColumns(id: number) {
  const url = `${BASE_URL}/columns?dashboardId=${id}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.json();
}

// 컬럼 생성
export async function postNewColumn(columnData: TColumnForm) {
  const url = `${BASE_URL}/columns`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(columnData),
  });
  return response.json();
}

// 컬럼 삭제
export async function deleteColumn(id: number) {
  const url = `${BASE_URL}/columns/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response;
}

// 컬럼 이름 수정
export async function postChangeColumnTitle(id: number, title: { title: string }) {
  const url = `${BASE_URL}/columns/${id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(title),
  });
  return response;
}

// 카드 목록 조회
export async function getCards(id: number) {
  const url = `${BASE_URL}/cards?columnId=${id}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.json();
}
