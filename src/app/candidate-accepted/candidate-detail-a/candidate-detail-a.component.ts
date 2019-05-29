import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatesService } from 'src/app/candidate-principal/candidates.service';
import { Candidate } from 'src/app/candidate-principal/candidate.model';

@Component({
  selector: 'zup-candidate-detail-a',
  templateUrl: './candidate-detail-a.component.html'
})
export class CandidateDetailAComponent implements OnInit {

  candidate: Candidate

  constructor(private candidatesService: CandidatesService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.candidatesService.candidatesByIdA(this.route.snapshot.params['id'])
    .subscribe(candidate => this.candidate = candidate)
  }

}
