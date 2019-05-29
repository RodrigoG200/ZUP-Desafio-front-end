import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatePrincipalComponent } from './candidate-principal/candidate-principal.component';
import { CandidateAcceptedComponent } from './candidate-accepted/candidate-accepted.component';
import { CandidateTrashComponent } from './candidate-trash/candidate-trash.component';
import { CandidatesDatailComponent } from './candidate-principal/candidates-datail/candidates-datail.component';
import { CandidateDetailAComponent } from './candidate-accepted/candidate-detail-a/candidate-detail-a.component';
import { CandidateDetailTComponent } from './candidate-trash/candidate-detail-t/candidate-detail-t.component';


export const routes: Routes = [
  {path: '', component: CandidatePrincipalComponent},
  {path: 'candidates', component: CandidatePrincipalComponent},
  {path: 'candidates/:id', component: CandidatesDatailComponent},
  {path: 'accepted', component: CandidateAcceptedComponent},
  {path: 'accepted/:id', component: CandidateDetailAComponent},
  {path: 'trash', component: CandidateTrashComponent},
  {path: 'trash/:id', component: CandidateDetailTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
