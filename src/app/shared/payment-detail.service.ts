import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:53353/api';
  list : PaymentDetail[];

  constructor(public http: HttpClient) { }

  postPaymentDetail(formData: any) { 
    return this.http.post(this.rootURL+'/PaymentDetail/PostPaymentDetail',formData)
  }

  putPaymentDetail(formData: any) { 
    return this.http.put(this.rootURL+'/PaymentDetail/'+ this.formData.PMId, this.formData)
  }

  DeletePaymentDetail(id) { 
    return this.http.delete(this.rootURL+'/PaymentDetail/'+ id)
  }

  refreshList(){
    this.http.get(this.rootURL +'/PaymentDetail')
    .toPromise()
    .then(data => {this.list = data as PaymentDetail[]})
  }

}
