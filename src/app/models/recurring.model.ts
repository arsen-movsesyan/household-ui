export interface RecurringModel {
  account_id: number;
  frequency: number;
  extra_params: any;
  acknowledge_required: boolean;
  comment: string;
}
