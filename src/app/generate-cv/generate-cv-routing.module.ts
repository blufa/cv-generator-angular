import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInformationsComponent } from './basic-informations/basic-informations.component';

const routes: Routes = [
  { path: '', component: BasicInformationsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateCvRoutingModule { }
