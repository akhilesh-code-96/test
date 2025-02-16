import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import {
  Employee,
  IApiResponse,
  IChildDept,
  IParentDept,
} from '../../models/Employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  parentDeptList: IParentDept[] = [];
  childDeptList: IChildDept[] = [];
  deptId: number = 0;

  employeeObj: Employee = new Employee();

  masterService = inject(MasterService);

  ngOnInit() {
    this.getParentDept();
  }

  getParentDept() {
    this.masterService.getParentDept().subscribe((res: IApiResponse) => {
      this.parentDeptList = res.data;
    });
  }

  onDeptChange() {
    this.masterService
      .getChildDeptByParentId(this.deptId)
      .subscribe((res: IApiResponse) => {
        this.childDeptList = res.data;
      });
  }
}
