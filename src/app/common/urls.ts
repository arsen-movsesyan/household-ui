import {serverHost, serverPort, serverProto} from '../../environments/environment';

const BACKEND_SERVER = serverHost + ':' + serverPort;
const SERVER_ROOT = serverProto + '://' + BACKEND_SERVER + '/';

const prefix = 'passman/';
export const SERVER_API = SERVER_ROOT + prefix;

export const peopleUrl = SERVER_API + 'person/';
