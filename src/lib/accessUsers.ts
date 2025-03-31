export type AccessUser = {
  user: string;
  currentDateTime: number;
  payload: string[]; // 무거운 데이터 추가
};

export const access_users: AccessUser[] = [];
