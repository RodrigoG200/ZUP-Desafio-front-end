import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate-principal/candidate.model';
import { CandidatesService } from '../candidate-principal/candidates.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'zup-candidate-trash',
  templateUrl: './candidate-trash.component.html'
})
export class CandidateTrashComponent implements OnInit {

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
        this.candidateService.candidatesT(searchTerm))
      .subscribe(candidates => this.candidates = candidates)

    this.candidateService.candidatesT()
    .subscribe(candidates => this.candidates = candidates)
  }


  enviarParaAtendidos(candidate: Candidate) { 
    console.log(candidate) 
  }

  enviarParaGeral(candidate: Candidate) { 
    console.log(candidate) 
  }

  

}
