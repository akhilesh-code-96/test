import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'department', 'email', 'actions'];
  employees: Employee[] = [];

  ngOnInit(): void {
    // For demonstration, pre-populate with sample data
    this.employees = [
      { id: 1, name: 'Alice Johnson', role: 'Software Engineer', department: 'Development', email: 'alice.johnson@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Bob Smith', role: 'Product Manager', department: 'Product', email: 'bob.smith@example.com', phone: '987-654-3210' }
    ];
  }

  openAddEmployee(): void {
    // Implementation for adding an employee
    alert('Opening add employee dialog...');
  }

  openEditEmployee(employee: Employee): void {
    // Implementation for editing an employee's information
    alert(`Editing employee: ${employee.name}`);
  }

  deleteEmployee(employeeId: number): void {
    // Implementation for deleting an employee
    this.employees = this.employees.filter(emp => emp.id !== employeeId);
    alert('Employee deleted.');
  }
}
