export interface UserState {
  first_name: string;
  last_name: string;
  id: number | null;
  email: string;
  avatar: string;
  loading: boolean;
  error: string | null;
}
