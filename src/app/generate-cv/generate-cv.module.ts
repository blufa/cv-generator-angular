import { BasicInformationsComponent } from './basic-informations/basic-informations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { CompetencesComponent } from './competences/competences.component';
import { FormationsComponent } from './formations/formations.component';
import { LanguesComponent } from './langues/langues.component';
import { CentreInteretsComponent } from './centre-interets/centre-interets.component';
import { CertificationsComponent } from './certifications/certifications.component';




@NgModule({
  declarations: [
    BasicInformationsComponent,
    ExperienceComponent,
    CompetencesComponent,
    FormationsComponent,
    LanguesComponent,
    CentreInteretsComponent,
    CertificationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GenerateCvModule { }
