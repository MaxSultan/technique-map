export type RolesEnum = 'admin' | 'base+' | 'base';

export type TeamUserType = { uid: string; role: RolesEnum };

export type TeamRequestType = TeamUserType & { userEmail: string };

export type GoalType = {
  moveId: string;
  startDate: typeof Date;
  endDate: typeof Date;
  practicePlanPercentage: number;
};

export type TeamType = {
  users: TeamUserType[];
  userIds: string[];
  joinRequests: TeamRequestType[];
  name: string;
  state: string;
  id: string;
  goals: GoalType[];
};
