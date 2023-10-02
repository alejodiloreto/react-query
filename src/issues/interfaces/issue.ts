
export interface IssueResponse {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: State;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  author_association: AuthorAssociation;
  active_lock_reason: null;
  draft?: boolean;
  pull_request?: PullRequest;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
}

export enum AuthorAssociation {
  Contributor = "CONTRIBUTOR",
  None = "NONE",
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: Color;
  default: boolean;
  description?: string;
}

export enum Color {
  Bfd4F2 = "bfd4f2",
  ColorBFD4F2 = "BFD4F2",
  D4C5F9 = "d4c5f9",
  Ededed = "ededed",
  Fef2C0 = "fef2c0",
  Ffffff = "ffffff",
  The0052Cc = "0052cc",
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: null;
}

export interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export enum State {
  Open = "open",
  Close = "closed"
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum Type {
  User = "User",
}
