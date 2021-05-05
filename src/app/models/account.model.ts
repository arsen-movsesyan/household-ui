import {AccountExtraModel} from './account-extra.model';

export interface AccountModel {
  id: number;
  account_name: string;
  account_url: string;
  created_date: string;
  username_value: string;
  description: string;
  password_value: string;
  extra_fields: AccountExtraModel[];
}
