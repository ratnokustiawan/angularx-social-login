import { EventEmitter } from '@angular/core';
import { SocialUser } from './social-user';

export interface LoginProvider {
  readonly changeUser?: EventEmitter<SocialUser>;
  initialize(autoLogin?: boolean): Promise<void>;
  getLoginStatus(refreshToken?: boolean): Promise<SocialUser>;
  signIn?(signInOptions?: any): Promise<SocialUser>;
  signOut(revoke?: boolean): Promise<void>;
}
