import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DivisionService } from 'src/app/services/division.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { MemoService } from 'src/app/services/memo.service';

export interface Employee {
  givenName: string,
  fatherName: string,
  grandFatherName: string,
  email: string,
  phoneNumber: string,
  division: any,
  position: string
}

@Component({
  selector: 'app-memo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class MemoCreateComponent implements OnInit {

  constructor(private memoservice: MemoService, private divisionservices: DivisionService, private empservices: EmployeeService, private router: Router) { }

  divisions: any = []
  employees: any = []

  form: any = {
    name: null,
    subject: null,
    from: null,
    to: null,
    cc: null,
    requestedBy: null,
    signiture: null
  };

  ngOnInit(): void {

    this.divisionservices.getDivisions().subscribe({
      next: resp => {
        this.divisions = resp
      },
      error: err => {

      }
    })
    this.empservices.getEmployees().subscribe({
      next: resp => {
        this.employees = resp
        this.employees.map((i: { fullName: string; givenName: string; fatherName: string; grandFatherName: string; }) => { i.fullName = i.givenName + ' ' + i.fatherName + ' ' + i.grandFatherName; return i; });
      },
      error: err => {

      }
    })

  }

  createMemo() {
    console.log(this.form)
    return this.memoservice.createMemo(this.form).subscribe({
      next: resp => {
        alert(resp.message)
        this.router.navigate(["memo"])

      },
      error: err => {

      }
    })
  }

}
