import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Observable, of, Subject, from } from 'rxjs';

import { Candidate } from './candidate.model';

import { ZUP_API } from '../app.api'
import { ErrorHandler } from '../app.error-handler';


@Injectable()
export class CandidatesService {



    constructor(private http: Http){}

    candidates(search?: string): Observable<Candidate[]> {
        return this.http.get(`${ZUP_API}/candidates`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    candidatesById(id: string): Observable<Candidate>{
        return this.http.get(`${ZUP_API}/candidates/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }


    candidatesA(search?: string): Observable<Candidate[]> {
        return this.http.get(`${ZUP_API}/candidatesA`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    candidatesByIdA(id: string): Observable<Candidate>{
        return this.http.get(`${ZUP_API}/candidatesA/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    candidatesT(search?: string): Observable<Candidate[]> {
        return this.http.get(`${ZUP_API}/candidatesT`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    candidatesByIdT(id: string): Observable<Candidate>{
        return this.http.get(`${ZUP_API}/candidatesT/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }




}