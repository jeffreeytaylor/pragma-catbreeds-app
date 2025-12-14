import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CatBreed } from 'src/app/core/models/cat-breed.model';
import { CatService } from 'src/app/core/services/cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})

export class HomePage implements OnInit {

  breeds: CatBreed[] = [];
  filteredBreeds: CatBreed[] = [];
  isLoading = false;

  constructor(
    private catService: CatService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadBreeds();
  }

  loadBreeds() {
    this.isLoading = true;

    this.catService.getBreeds().subscribe({
      next: (data) => {
        this.breeds = data;
        this.filteredBreeds = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  onSearch(event: any) {
    const value = event.detail.value?.toLowerCase() || '';

    this.filteredBreeds = this.breeds.filter(breed =>
      breed.name.toLowerCase().includes(value)
    );
  }


  goToDetail(breed: CatBreed) {
    this.router.navigate(['/detail', breed.id], {
      state: { breed }
    });
  }
  
}
