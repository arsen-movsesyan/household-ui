import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AddressModel} from '../models/address.model';
import {parseISO, getDate, getMonth, getYear} from 'date-fns';

export const cleanPhoneSsnMaskedValue = (rawString: string) => {
  // const phoneRegex = /[^\d]/g;
  return rawString.replace( /[^\d]/g, '');
};

export const formatDateToNgbDateStr = (date: NgbDateStruct) => {
  return date.year + '-' + date.month + '-' + date.day;
};

export const formatAddress = (address: AddressModel) => {
  address.formattedAddress = !!address.apt_suite ? address.formatted_address + ', Apt: ' + address.apt_suite : address.formatted_address;
};

export const getStructFromString = (dateString: string) => {
  const date = parseISO(dateString);
  return {day: getDate(date), month: getMonth(date) + 1, year: getYear(date)};
};
