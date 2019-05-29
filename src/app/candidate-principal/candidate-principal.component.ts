import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate.model';
import { CandidatesService } from './candidates.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'


@Component({
  selector: 'zup-candidate-principal',
  templateUrl: './candidate-principal.component.html'
})
export class CandidatePrincipalComponent implements OnInit {


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
        this.candidateService.candidates(searchTerm))
      .subscribe(candidates => this.candidates = candidates)

    this.candidateService.candidates()
    .subscribe(candidates => this.candidates = candidates)
  }


  enviarParaAtendidos(candidate: Candidate) { 
    console.log(candidate) 
  }

  enviarParaLixeira(candidate: Candidate) { 
    console.log(candidate) 
  }



}
