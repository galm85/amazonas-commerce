import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  imports: [],
  templateUrl: './category-page.html',
  styleUrl: './category-page.scss',
})
export class CategoryPage implements OnInit {

  private route = inject(ActivatedRoute);

  currentCategory:string|null = null;




  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.currentCategory = params.get('category');
      })
  }
}
