import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Datafake } from '../../data/datafake';
import { RouterModule } from '@angular/router'; // 👈 ADICIONE isso aqui



@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule], // 👈 E isso aqui
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('ID da rota:', this.id);

      if (this.id) {
        this.setValuesToComponent(this.id);
      }
    });
  }

  setValuesToComponent(id: string) {
    const result = Datafake.find(article => article.id.toString() === id);

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    }
  }
}
