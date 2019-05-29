import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidates.service';
import { Candidate } from '../candidate.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zup-candidates-datail',
  templateUrl: './candidates-datail.component.html'
})
export class CandidatesDatailComponent implements OnInit {

  candidate: Candidate

  constructor(private candidatesService: CandidatesService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.candidatesService.candidatesById(this.route.snapshot.params['id'])
     .subscribe(candidate => this.candidate = candidate)
     
  }

}
