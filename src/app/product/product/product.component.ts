import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
productColor: string = "pink"
productReviews: string[] = ["Good Product", "Amazing","Hated it", "Will order again"]
showReviews: boolean = true
}
