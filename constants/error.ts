export const ERROR_400_MESSAGE = 'Request failed with status code 400';
export const ERROR_409_MESSAGE = 'Request failed with status code 409';
export const ERROR_404_MESSAGE = 'Request failed with status code 404';
export const ERROR_401_MESSAGE = 'Request failed with status code 404';
export const ERROR_403_MESSAGE = 'Request failed with status code 403';

export const NO_AUTHORITY_MESSAGE = '권한이 없습니다.';
export const NO_DASHBOARD_MESSAGE = '대시보드가 존재하지 않습니다.';
export const NO_DASHBOARD_MEMBER_MESSAGE = '대시보드의 멤버가 아닙니다.';
export const NO_USER_MESSAGE = '존재하지 않는 유저입니다';
export const NO_INVITATION_MESSAGE = '존재하지 않는 초대입니다';
export const INVALID_REQUEST_MESSAGE = '올바른 입력값이 아닙니다.';
export const CONSISTENT_INVITATION = '이미 대시보드에 초대된 멤버입니다.';

export const NETWORK_ERROR = (error: Error) => {
  return new Error(`NETWORK 에러 - ${error.message}`);
};
