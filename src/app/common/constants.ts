export type ContextColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export const DEFAULT_SPINNER_TIMEOUT = 10;

export const TABLE_ITEMS_PER_PAGE = [
  {value: 10, display: '10'},
  {value: 25, display: '25'},
  {value: 50, display: '50'},
  {value: 100, display: '100'},
];

export const briefDisplaySize = 40;
export const urlRegEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

export interface Frequency {
  [identifier: number]: string;
}

export interface ConstantsModel {
  extras: string[];
  frequencies: Frequency[];
}
