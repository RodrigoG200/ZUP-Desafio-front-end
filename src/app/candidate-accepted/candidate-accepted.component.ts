import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidate-principal/candidates.service';
import { Candidate } from '../candidate-principal/candidate.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'zup-candidate-accepted',
  templateUrl: './candidate-accepted.component.html'
})
export class CandidateAcceptedComponent implements OnInit {

  candidates: Candidate[] = []


  searchForm: FormGroup
  searchControl: FormControl

  constructor(private candidateService: CandidatesService,
              private fb: FormBuilder ) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm => 
        this.candidateService.candidatesA(searchTerm))
      .subscribe(candidates => this.candidates = candidates)



    this.candidateService.candidatesA()
    .subscribe(candidates => this.candidates = candidates)
  }

  enviarParaLixeira(candidate: Candidate) { 
    console.log(candidate) 
  }

  enviarParaGeral(candidate: Candidate) { 
    console.log(candidate) 
  }

}
