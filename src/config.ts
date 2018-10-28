import { InjectionToken } from '@angular/core';

export { API_ENDPOINT } from './environments/environment';
export const API_ENDPOINT_TOKEN: InjectionToken<string> = new InjectionToken('API_ENDPOINT');
