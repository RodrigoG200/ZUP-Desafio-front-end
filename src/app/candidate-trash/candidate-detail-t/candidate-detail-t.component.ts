import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/candidate-principal/candidate.model';
import { CandidatesService } from 'src/app/candidate-principal/candidates.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zup-candidate-detail-t',
  templateUrl: './candidate-detail-t.component.html'
})
export class CandidateDetailTComponent implements OnInit {

  candidate: Candidate

  constructor(private candidatesService: CandidatesService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.candidatesService.candidatesByIdT(this.route.snapshot.params['id'])
    .subscribe(candidate => this.candidate = candidate)
  }

}
