type AccessUser = {
  user: string;
  currentDateTime: number;
};

const access_users: AccessUser[] = [];

export default async function Home() {
  const currentDateTime = Date.now();

  access_users.push({
    user: `user-${Math.round(Math.random() * 100000)}`,
    currentDateTime,
  });

  return <>{currentDateTime}</>;
}
