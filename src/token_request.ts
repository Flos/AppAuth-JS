/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {StringMap} from './types';

export const GRANT_TYPE_AUTHORIZATION_CODE = 'authorization_code';
export const GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';

/**
 * Represents the Token Request as JSON.
 */
export interface TokenRequestJson {
  grant_type: string;
  code?: string;
  refresh_token?: string, redirect_uri: string;
  client_id: string;
  client_secret?: string;
  extras?: StringMap;
  requestTokenExtras?: StringMap;
}


/**
 * Represents an Access Token request.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-4.1.3
 */
export class TokenRequest {
  clientId: string;
  client_secret?: string;
  redirectUri: string;
  grantType: string;
  code: string|undefined;
  refreshToken: string|undefined;
  extras: StringMap|undefined;
  requestTokenExtras: StringMap|undefined;  //  Google needs client_secret just in the token request

  constructor(request: TokenRequestJson) {
    this.clientId = request.client_id;
    this.redirectUri = request.redirect_uri;
    this.grantType = request.grant_type;
    this.code = request.code;
    this.refreshToken = request.refresh_token;
    this.extras = request.extras;
    this.requestTokenExtras = request.requestTokenExtras;
    this.client_secret = request.client_secret;
  }

  /**
   * Serializes a TokenRequest to a JavaScript object.
   */
  toJson(): TokenRequestJson {
    return {
      grant_type: this.grantType,
      code: this.code,
      refresh_token: this.refreshToken,
      redirect_uri: this.redirectUri,
      client_id: this.clientId,
      client_secret: this.client_secret,
      extras: this.extras,
      requestTokenExtras: this.requestTokenExtras
    };
  }

  toStringMap(): StringMap {
    let map: StringMap = {
      grant_type: this.grantType,
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
    };

    if (this.code) {
      map['code'] = this.code;
    }

    if (this.refreshToken) {
      map['refresh_token'] = this.refreshToken;
    }

    // copy over extras
    this.mergeExtras(map, this.extras);
    this.mergeExtras(map, this.requestTokenExtras);

    return map;
  }

  private mergeExtras(map: StringMap, extras?: StringMap) {
    if (extras) {
      for (let extra in extras) {
        if (extras.hasOwnProperty(extra) && !map.hasOwnProperty(extra)) {
          // check before inserting to requestMap
          map[extra] = extras[extra];
        }
      }
    }
  }
}
