import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getParentDept() {
    return this.http.get<IApiResponse>(
      'https://projectapi.gerasim.in/api/Complaint/GetParentDepartment'
    );
  }

  getChildDeptByParentId(parentDeptId: number): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      'https://projectapi.gerasim.in/api/Complaint/GetChildDepartmentByParentId?parentDeptId=' +
        parentDeptId
    );
  }
}
