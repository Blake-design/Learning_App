export interface NavIconType {
  icon: string;
  alt: string;
  to: string;
}
export interface MeQueryProps {
  me: {
    _id: string;
    name: string;
    username: string;
    email: string;
    avatar: string;
    bio: string;
    friends: [
      {
        _id: string;
        username: string;
        avatar: string;
      }
    ];
    settings: {
      _id: string;
      theme: string;
      showActive: boolean;
      shareEmail: boolean;
    };
  };
}

export interface ACHeaderProps {
  username: string;
  online: boolean;
}

export interface SignupFormType {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface UpdateFormType {
  bio: string;
  name: string;
}

export interface LoginFormType {
  email: string;
  password: string;
}

export interface UsersQueryProp {
  users: [
    {
      username: string;
      active: boolean;
    }
  ];
  activeUsers?: [{ username: string }];
}

export interface FriendType {
  username: string;
  _id: string;
  avatar: string;
  _typename?: string;
}

export interface BadgeAvatarType {
  src: string;
  alt: string;
}
