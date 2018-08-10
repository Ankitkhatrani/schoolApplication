import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


let apiUrl="http://rahat.truelinelabs.in/api/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(type,credential)
  {
    // let hdrs = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded','Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbnVzZXJJRCI6IjQiLCJuYW1lIjoiQS5SYW1hZG9zIiwiZW1haWwiOiJSYW1hZG9zQHh4eC5jb20iLCJ1c2VydHlwZUlEIjoiNCIsInVzZXJ0eXBlIjoiUGFyZW50cyIsInVzZXJuYW1lIjoiUmFtYWRvcyIsInBob3RvIjoiMjMxNmEyNDk1MGY0YzlmMzlhOWM1NmJhOTc1MjBjNGM0NmJjZmQwZjU0ZWY0NTEwZDU3YTczOWJhMDQwNDA5M2ZjODRhNWE1ZTc1NDhhZjJmNjY1ZjZiNWI0MDUzYTYzZjljZDUxZTc2NDYxYTU2N2JmMGM0NmVhYzk4NzUwOWMuanBnIiwiZGVmYXVsdHNjaG9vbHllYXJJRCI6IjEiLCJsb2dnZWRpbiI6dHJ1ZX0.gtOdHlT-B0WKVOYD-Wn7LQveI_YDwCJX9vKmA5nzqEg' });
    let hdrs = new HttpHeaders();
  	return this.http.post(apiUrl+type,credential,{ headers : hdrs});
  }

  
  
    getData(type)
    {
       let hdrs = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbnVzZXJJRCI6IjQiLCJuYW1lIjoiQS5SYW1hZG9zIiwiZW1haWwiOiJSYW1hZG9zQHh4eC5jb20iLCJ1c2VydHlwZUlEIjoiNCIsInVzZXJ0eXBlIjoiUGFyZW50cyIsInVzZXJuYW1lIjoiUmFtYWRvcyIsInBob3RvIjoiMjMxNmEyNDk1MGY0YzlmMzlhOWM1NmJhOTc1MjBjNGM0NmJjZmQwZjU0ZWY0NTEwZDU3YTczOWJhMDQwNDA5M2ZjODRhNWE1ZTc1NDhhZjJmNjY1ZjZiNWI0MDUzYTYzZjljZDUxZTc2NDYxYTU2N2JmMGM0NmVhYzk4NzUwOWMuanBnIiwiZGVmYXVsdHNjaG9vbHllYXJJRCI6IjEiLCJsb2dnZWRpbiI6dHJ1ZX0.gtOdHlT-B0WKVOYD-Wn7LQveI_YDwCJX9vKmA5nzqEg' });
       return this.http.get(apiUrl+type,{ headers : hdrs});
    }
}
