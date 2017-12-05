import { Component } from '@angular/core';
import { isUndefined } from 'util';

import { Coordinates } from './models/coordinates';
import { parseDirection } from './models/direction.parser';
import { MoveProbesCommand } from './models/move.probes.command';
import { Position } from './models/position';
import { parseProbeAction } from './models/probe.action.parser';
import { ProbeData } from './models/probe.data';
import { CommandParseService } from './services/command.parse.service';
import { MarsExplorationService } from './services/mars.exploration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Mars Exploration - Web App';

  public input: string;
  public parsedInput: MoveProbesCommand;
  public result: any;
  public isDimmed = false;

  public submitData() {
    this.isDimmed = true;

    this.marsExplorationService
      .moveProbes(this.parsedInput)
      .subscribe(
      response => {
        this.isDimmed = false;
        this.result = response;
        this.input = null;
      },
      error => {
        alert(error);
        this.isDimmed = false;
      }
      );
  }

  public printDirection(input: number) {
    switch (input) {
      case 0: return 'N';
      case 270: return 'W';
      case 180: return 'S';
      case 90: return 'E';
      default: return undefined;
    }
  }

  public assignParsedInput(newValue: string) {
    this.parsedInput = this.commandParseService.parseCommand(newValue);
  }

  constructor(private marsExplorationService: MarsExplorationService,
    private commandParseService: CommandParseService) { }
}
