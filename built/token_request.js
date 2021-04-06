"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRequest = exports.GRANT_TYPE_REFRESH_TOKEN = exports.GRANT_TYPE_AUTHORIZATION_CODE = void 0;
exports.GRANT_TYPE_AUTHORIZATION_CODE = 'authorization_code';
exports.GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';
/**
 * Represents an Access Token request.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-4.1.3
 */
var TokenRequest = /** @class */ (function () {
    function TokenRequest(request) {
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
    TokenRequest.prototype.toJson = function () {
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
    };
    TokenRequest.prototype.toStringMap = function () {
        var map = {
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
    };
    TokenRequest.prototype.mergeExtras = function (map, extras) {
        if (extras) {
            for (var extra in extras) {
                if (extras.hasOwnProperty(extra) && !map.hasOwnProperty(extra)) {
                    // check before inserting to requestMap
                    map[extra] = extras[extra];
                }
            }
        }
    };
    return TokenRequest;
}());
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbl9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7OztBQUlVLFFBQUEsNkJBQTZCLEdBQUcsb0JBQW9CLENBQUM7QUFDckQsUUFBQSx3QkFBd0IsR0FBRyxlQUFlLENBQUM7QUFnQnhEOzs7O0dBSUc7QUFDSDtJQVVFLHNCQUFZLE9BQXlCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUFNLEdBQU47UUFDRSxPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUNoQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtTQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxJQUFJLEdBQUcsR0FBYztZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVztTQUMvQixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUM7UUFFRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRS9DLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQW9CLEdBQWMsRUFBRSxNQUFrQjtRQUNwRCxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO2dCQUN4QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM5RCx1Q0FBdUM7b0JBQ3ZDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzVCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFyRUQsSUFxRUM7QUFyRVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZVxuICogTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtTdHJpbmdNYXB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgR1JBTlRfVFlQRV9BVVRIT1JJWkFUSU9OX0NPREUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJztcbmV4cG9ydCBjb25zdCBHUkFOVF9UWVBFX1JFRlJFU0hfVE9LRU4gPSAncmVmcmVzaF90b2tlbic7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgVG9rZW4gUmVxdWVzdCBhcyBKU09OLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuUmVxdWVzdEpzb24ge1xuICBncmFudF90eXBlOiBzdHJpbmc7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIHJlZnJlc2hfdG9rZW4/OiBzdHJpbmcsIHJlZGlyZWN0X3VyaTogc3RyaW5nO1xuICBjbGllbnRfaWQ6IHN0cmluZztcbiAgY2xpZW50X3NlY3JldD86IHN0cmluZztcbiAgZXh0cmFzPzogU3RyaW5nTWFwO1xuICByZXF1ZXN0VG9rZW5FeHRyYXM/OiBTdHJpbmdNYXA7XG59XG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEFjY2VzcyBUb2tlbiByZXF1ZXN0LlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gbG9vayBhdDpcbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNC4xLjNcbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuUmVxdWVzdCB7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIGNsaWVudF9zZWNyZXQ/OiBzdHJpbmc7XG4gIHJlZGlyZWN0VXJpOiBzdHJpbmc7XG4gIGdyYW50VHlwZTogc3RyaW5nO1xuICBjb2RlOiBzdHJpbmd8dW5kZWZpbmVkO1xuICByZWZyZXNoVG9rZW46IHN0cmluZ3x1bmRlZmluZWQ7XG4gIGV4dHJhczogU3RyaW5nTWFwfHVuZGVmaW5lZDtcbiAgcmVxdWVzdFRva2VuRXh0cmFzOiBTdHJpbmdNYXB8dW5kZWZpbmVkOyAgLy8gIEdvb2dsZSBuZWVkcyBjbGllbnRfc2VjcmV0IGp1c3QgaW4gdGhlIHRva2VuIHJlcXVlc3RcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiBUb2tlblJlcXVlc3RKc29uKSB7XG4gICAgdGhpcy5jbGllbnRJZCA9IHJlcXVlc3QuY2xpZW50X2lkO1xuICAgIHRoaXMucmVkaXJlY3RVcmkgPSByZXF1ZXN0LnJlZGlyZWN0X3VyaTtcbiAgICB0aGlzLmdyYW50VHlwZSA9IHJlcXVlc3QuZ3JhbnRfdHlwZTtcbiAgICB0aGlzLmNvZGUgPSByZXF1ZXN0LmNvZGU7XG4gICAgdGhpcy5yZWZyZXNoVG9rZW4gPSByZXF1ZXN0LnJlZnJlc2hfdG9rZW47XG4gICAgdGhpcy5leHRyYXMgPSByZXF1ZXN0LmV4dHJhcztcbiAgICB0aGlzLnJlcXVlc3RUb2tlbkV4dHJhcyA9IHJlcXVlc3QucmVxdWVzdFRva2VuRXh0cmFzO1xuICAgIHRoaXMuY2xpZW50X3NlY3JldCA9IHJlcXVlc3QuY2xpZW50X3NlY3JldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgVG9rZW5SZXF1ZXN0IHRvIGEgSmF2YVNjcmlwdCBvYmplY3QuXG4gICAqL1xuICB0b0pzb24oKTogVG9rZW5SZXF1ZXN0SnNvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyYW50X3R5cGU6IHRoaXMuZ3JhbnRUeXBlLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgcmVmcmVzaF90b2tlbjogdGhpcy5yZWZyZXNoVG9rZW4sXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RVcmksXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNsaWVudF9zZWNyZXQsXG4gICAgICBleHRyYXM6IHRoaXMuZXh0cmFzLFxuICAgICAgcmVxdWVzdFRva2VuRXh0cmFzOiB0aGlzLnJlcXVlc3RUb2tlbkV4dHJhc1xuICAgIH07XG4gIH1cblxuICB0b1N0cmluZ01hcCgpOiBTdHJpbmdNYXAge1xuICAgIGxldCBtYXA6IFN0cmluZ01hcCA9IHtcbiAgICAgIGdyYW50X3R5cGU6IHRoaXMuZ3JhbnRUeXBlLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxuICAgICAgcmVkaXJlY3RfdXJpOiB0aGlzLnJlZGlyZWN0VXJpLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5jb2RlKSB7XG4gICAgICBtYXBbJ2NvZGUnXSA9IHRoaXMuY29kZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWZyZXNoVG9rZW4pIHtcbiAgICAgIG1hcFsncmVmcmVzaF90b2tlbiddID0gdGhpcy5yZWZyZXNoVG9rZW47XG4gICAgfVxuXG4gICAgLy8gY29weSBvdmVyIGV4dHJhc1xuICAgIHRoaXMubWVyZ2VFeHRyYXMobWFwLCB0aGlzLmV4dHJhcyk7XG4gICAgdGhpcy5tZXJnZUV4dHJhcyhtYXAsIHRoaXMucmVxdWVzdFRva2VuRXh0cmFzKTtcblxuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICBwcml2YXRlIG1lcmdlRXh0cmFzKG1hcDogU3RyaW5nTWFwLCBleHRyYXM/OiBTdHJpbmdNYXApIHtcbiAgICBpZiAoZXh0cmFzKSB7XG4gICAgICBmb3IgKGxldCBleHRyYSBpbiBleHRyYXMpIHtcbiAgICAgICAgaWYgKGV4dHJhcy5oYXNPd25Qcm9wZXJ0eShleHRyYSkgJiYgIW1hcC5oYXNPd25Qcm9wZXJ0eShleHRyYSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBiZWZvcmUgaW5zZXJ0aW5nIHRvIHJlcXVlc3RNYXBcbiAgICAgICAgICBtYXBbZXh0cmFdID0gZXh0cmFzW2V4dHJhXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19