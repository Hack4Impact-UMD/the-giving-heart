export interface StrapiEventData {
  [eventId: string]: {
    event: {
      id: string;
      title: string;
      description: string;
      location: string;
      eventDateStart: string;
      eventDateEnd: string;
      eventCheckInKey: string;
      signUpOpenDate: string;
      signUpEndDate: string;
    };
    volunteerRoles: {
      title: string;
      description: string;
      eventRoleShiftTimeStart: string;
      eventRoleShiftTimeEnd: string;
      eventRoleShiftDate: string;
      capacity: number;
      eventRoleShiftDescription: string;
      shiftId: string;
      volunteerRoleId: string;
    }[];
  };
}

export interface EventSignUpData {
  event: {
    id: string;
    title: string;
    description: string;
    location: string;
    eventDateStart: string;
    eventDateEnd: string;
    eventCheckInKey: string;
    signUpOpenDate: string;
    signUpEndDate: string;
  };
  volunteerRoles: {
    title: string;
    description: string;
    eventRoleShiftTimeStart: string;
    eventRoleShiftTimeEnd: string;
    eventRoleShiftDate: string;
    capacity: number;
    eventRoleShiftDescription: string;
    shiftId: string;
    volunteerRoleId: string;
  }[];
}

export interface UserAttendsData {
  userAttend: {
    id: number,
    checkIn: boolean;
    checkOut: boolean;
    users_permissions_user: {
      data: {
        id: number;
        attributes: {
          username: string;
        };
      };
    };
    event_role_shifts: {
      data: {
        id: number;
      };
    };
  }[];
}
