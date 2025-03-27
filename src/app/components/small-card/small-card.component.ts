import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = "https://blog.newville.com.br/wp-content/uploads/2024/02/vida-noturna-Recife.jpeg";

  @Input()
  cardTitle: string = "Exemplo1";

  @Input()
  id: string = "0";

  constructor() {}

  ngOnInit(): void {}
}
