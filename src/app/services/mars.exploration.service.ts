import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoveProbesCommand } from '../models/move.probes.command';

@Injectable()
export class MarsExplorationService {

    public moveProbes(command: MoveProbesCommand) {
        return this.httpClient.post('https://mars-exploration-api.herokuapp.com/api/probe', command);
    }

    constructor(private httpClient: HttpClient) {

    }
}
