import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  movies = ['The Manchurian Candidate', 'Oceans 8', 'The Incredibles', 'Hidden Figures'];
  constructor() { }

}
