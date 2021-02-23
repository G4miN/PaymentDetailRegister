import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDetailService, 
    public toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(){

    this.service.formData ={
      PMId:0,
      CardOwnerName:'',
      CardNumber: '',
      ExpirationDate:'',
      CVV:'',
    }
  }

  EnviarData(ngForm){
    this.OnSubmit(ngForm);
}

  OnSubmit(form: any){
    if(this.service.formData.PMId==0)
    this.insertRecord(form)
    else
    this.updateRecord(form)
  }

  insertRecord(form: any){
    this.service.postPaymentDetail(form.formData).subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Enviado Correctamente','Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err)
      }
    )
  }

  updateRecord(form: any){
    this.service.putPaymentDetail(form.formData).subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Enviado Correctamente','Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err)
      }
    )
  }
}
