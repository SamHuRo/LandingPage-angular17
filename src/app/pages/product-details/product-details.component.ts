import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  loading: boolean = true;
  public product?: IProduct;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
      this._route.params.subscribe(params =>{
        this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
          this.product = data;
          this.loading = false;
        })
      })
  }
}
