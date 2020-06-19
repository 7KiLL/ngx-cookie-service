export interface CookieOptions {
  name: string;
  value: string;
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite: 'Lax' | 'None' | 'Strict';
}
