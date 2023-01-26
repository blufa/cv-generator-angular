import { BasicInformationsComponent } from './basic-informations/basic-informations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { CompetencesComponent } from './competences/competences.component';
import { FormationsComponent } from './formations/formations.component';
import { LanguesComponent } from './langues/langues.component';
import { CentreInteretsComponent } from './centre-interets/centre-interets.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GenerateCvComponent } from './generate-cv.component';
import { RouterModule } from '@angular/router';
import { GenerateCvRoutingModule } from './generate-cv-routing.module';




@NgModule({
  declarations: [
    GenerateCvComponent,
    BasicInformationsComponent,
    ExperienceComponent,
    CompetencesComponent,
    FormationsComponent,
    LanguesComponent,
    CentreInteretsComponent,
    CertificationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    
    RouterModule,
    GenerateCvRoutingModule
  ],
  exports: [GenerateCvComponent]
})
export class GenerateCvModule { }
