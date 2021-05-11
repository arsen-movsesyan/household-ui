import {serverHost, serverPort, serverProto} from '../../environments/environment';

const BACKEND_SERVER = serverHost + ':' + serverPort;
const SERVER_ROOT = serverProto + '://' + BACKEND_SERVER + '/';

const prefix = 'passman/';
export const SERVER_API = SERVER_ROOT + prefix;

export const peopleUrl = SERVER_API + 'person/';
export const vehicleUrl = SERVER_API + 'vehicle/';
export const addressUrl = SERVER_API + 'address/';
export const createAddressUrl = SERVER_API + 'address-create/';
export const accountUrl = SERVER_API + 'account/';
export const constantsUrl = SERVER_API + 'constants/';

export const statesAPI = 'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json';
