import { Log } from './../../models/logModel';
import { LogService } from './../../services/log.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      
    </div>
    <div class="modal-body">
      <p>Hello, {{id}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() id: any=0;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logs:Log[]=[];

  constructor(private logService:LogService,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.logService.getAll().subscribe((result)=>{
      this.logs=result.data;
    })
  }

  getBacGroundColor(status:boolean){
  
    return status?'bg-success':'bg-danger'
  }

  open(id:number) {
    console.log(id)
    const modalRef = this.modalService.open(NgbdModalContent,{size: 'lg'});
    modalRef.componentInstance.id = ['World','de'];
  }
  

}
