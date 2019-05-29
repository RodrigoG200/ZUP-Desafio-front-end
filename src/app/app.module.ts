import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';

import { routes } from './app-routing.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CandidatePrincipalComponent } from './candidate-principal/candidate-principal.component';
import { CandidateAcceptedComponent } from './candidate-accepted/candidate-accepted.component';
import { CandidateTrashComponent } from './candidate-trash/candidate-trash.component';
import { RouterModule } from '@angular/router';
import { CandidatesService } from './candidate-principal/candidates.service';
import { CandidatesDatailComponent } from './candidate-principal/candidates-datail/candidates-datail.component';
import { CandidateDetailAComponent } from './candidate-accepted/candidate-detail-a/candidate-detail-a.component';
import { CandidateDetailTComponent } from './candidate-trash/candidate-detail-t/candidate-detail-t.component';
import { ReactiveFormsModule } from '@angular/forms'  
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CandidatePrincipalComponent,
    CandidateAcceptedComponent,
    CandidateTrashComponent,
    CandidatesDatailComponent,
    CandidateDetailAComponent,
    CandidateDetailTComponent,
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
