import { Component, OnInit, ViewChild } from '@angular/core';
import { MemoService } from 'src/app/services/memo.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { faPrint } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class MemoViewComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject()

  faPrint = faPrint;

  dataT = [{ id: 3, name: "khalil", lname: "harar" }, { id: 3, name: "khalil", lname: "harar" }, { id: 3, name: "khalil", lname: "harar" }, { id: 3, name: "khalil", lname: "harar" }, { id: 3, name: "khalil", lname: "harar" }, { id: 3, name: "khalil", lname: "harar" }]

  memos: any = []
  constructor(private memoService: MemoService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 5,
      lengthMenu: [
        [5, 10, 15, -1],
        [5, 10, 15, 'All']],
      pagingType: 'full_numbers',
      displayStart: 5

    };
    this.memoService.getMemos().subscribe({
      next: resp => {
        this.memos = resp;
        //  this.dtTrigger.next(this.memos);

        setTimeout(() => {
          $('#datatableexample').DataTable({
            pagingType: 'full_numbers',
            pageLength: 3,
            processing: true,
            lengthMenu: [3, 5, 10]
          });
          $('#dataT').DataTable({
            pagingType: 'full_numbers',
            pageLength: 3,
            processing: true,
            lengthMenu: [3, 5, 10]
          })
        }, 1);
      },
      error: err => {
        this.dtTrigger.next(this.memos);

        setTimeout(() => {
          $('#datatableexample').DataTable({
            pagingType: 'full_numbers',
            pageLength: 3,
            processing: true,
            lengthMenu: [3, 5, 10]
          });
        }, 1);
      }
    })
  }

  printMemo(data: any) {
    return this.memoService.generateMemo(data).subscribe({
      next: resp => {
        // console.log(resp)
      },
      error: err => {
        // console.log(err)
      }
    })
  }

}
