export interface NavIconType {
  icon: string;
  alt: string;
  to: string;
}

export interface BadgeAvatarType {
  src: string;
}

// function types

type SelectConvoFn = (convo: ConvoType) => void;

type FormatTimeFn = (time: number) => string;

type SubscribeToMessagesFn = () => void;

// form types

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

/// Graphql base type

interface User {
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
  createdAt?: string;
  bio?: string;
  active?: Boolean;
  avatar?: string;
  settings?: Settings;
  friends?: FriendType[];
  requests?: RequestObj[];
}

interface Settings {
  _id: string;
  theme: string;
  showActive: Boolean;
  shareEmail: Boolean;
}

export interface FriendType {
  username: string;
  _id: string;
  avatar: string;
  _typename?: string;
}
export interface RequestObj {
  _id: string;
  sender: User;
  reciever: User;
}

export type ConvoType = {
  _id: string;
  roomName: string;
};

export interface Message {
  text: string;
  senderId: User;
  convoId: string;
  createdAt: string;
}

interface Conversation {
  _id: string;
  roomName: string;
  participants: User[];
  lastMessage: Message;
  groupAdmin: User;
  isGroupChat: Boolean;
}

interface ActiveUsers {
  active: [User];
}

interface Auth {
  token: string;
  user: User;
}

/// Graphql query base types

interface QueryUsers {
  username: string;
  active: boolean;
}

interface QueryMe {
  _id: string;
  name: string;
  username: string;
  email: string;
  bio: string;
  avatar: string;
  settings: Settings;
  friends: FriendType[];
}

///// graphQL  top level

export interface QueryMeData {
  me: QueryMe;
}

export interface QueryUsersData {
  users: QueryUsers[];
}

export interface QuerySingleUserData {
  user: User;
}

export interface QueryConvos {
  convos: Conversation[];
}

/////  props

export interface UsersQueryProp {
  users: [
    {
      username: string;
      active: boolean;
    }
  ];
  activeUsers?: [{ username: string }];
}

export interface ACHeaderProps {
  username: string;
  online: boolean;
}

export interface NotificationProp {
  username: string;
  event: string;
}

export interface ActiveChatProp {
  currentConvo: string;
  me: QueryMe;
}

export interface CurrentConvoProp {
  currentConvo: string;
}

export interface FriendsProp {
  friends: FriendType[];
}

export interface ChatSidebarProp {
  me: QueryMe;
  selectConvo: SelectConvoFn;
}

export interface SelectConvoProp {
  selectConvo: SelectConvoFn;
}

export interface ConvosProp {
  convos: Conversation[];
  selectConvo: SelectConvoFn;
}
export interface ConvoTypeProp {
  convo: ConvoType;
}

export interface TextBubbleProp {
  text: string;
  time: number;
  formatTime: FormatTimeFn;
}

export interface MessagesProp {
  messages: Message[];
  me: QueryMe;
  subscribeToMessages: SubscribeToMessagesFn;
}
