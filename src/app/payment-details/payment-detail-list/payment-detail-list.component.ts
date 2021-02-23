import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailService, public toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pds: PaymentDetail){
    this.service.formData = Object.assign({},pds);
  }

  onDelete(PMId){
    if(confirm('Estas seguro que quieres eliminar este registro?')){
      
      this.service.DeletePaymentDetail(PMId)
      .subscribe(res =>{
      this.service.refreshList();
      this.toastr.warning('Eliminado Correctamente','Payment Detail Register')
      },
      err =>{
        console.log(err)
      })    
    }
  }
}
