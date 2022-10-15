import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getAll().subscribe((result)=>{
      this.employees=result.data
    })
  }

}
