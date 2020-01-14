import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';
import { ImageUploadModule } from "angular2-image-upload";
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin-Redcrix',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Admin-Redcrix' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes),ImageUploadModule],
  declarations: [StarterComponent]
})
export class StarterModule {}
