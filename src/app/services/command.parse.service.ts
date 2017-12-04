import { Injectable } from '@angular/core';
import { isUndefined } from 'util';

import { Coordinates } from '../models/coordinates';
import { parseDirection } from '../models/direction.parser';
import { Position } from '../models/position';
import { parseProbeAction } from '../models/probe.action.parser';
import { ProbeData } from '../models/probe.data';

@Injectable()
export class CommandParseService {
    private parseUpperRightLimit(input: string) {
        const splitted = input.split(' ');
        if (splitted.length !== 2) {
            return null;
        }

        const result = new Coordinates();
        result.x = parseInt(splitted[0], 0);
        result.y = parseInt(splitted[1], 0);

        if (isNaN(result.x) || isNaN(result.y)) {
            return null;
        }

        return result;
    }

    private parseProbeData(firstRow: string, secondRow: string): ProbeData {
        const splittedFirstRow = firstRow.split(' ');
        if (splittedFirstRow.length !== 3) {
            return null;
        }
        const initialPosition = new Position();
        initialPosition.coordinates = new Coordinates();
        initialPosition.coordinates.x = parseInt(splittedFirstRow[0], 0);
        initialPosition.coordinates.y = parseInt(splittedFirstRow[1], 0);
        initialPosition.direction = parseDirection(splittedFirstRow[2]);

        if (isNaN(initialPosition.coordinates.x) ||
            isNaN(initialPosition.coordinates.y) ||
            isUndefined(initialPosition.direction)) {
            return null;
        }

        const actions = secondRow.split('').map(c => parseProbeAction(c));

        return { initialPosition, actions };
    }

    public parseCommand(newValue: string) {
        const splitted = newValue.split('\n');

        if (splitted.length !== 5) {
            return null;
        }

        const superiorRightLimit = this.parseUpperRightLimit(splitted[0]);
        if (superiorRightLimit == null) {
            return null;
        }
        const firstProbeData = this.parseProbeData(splitted[1], splitted[2]);
        if (firstProbeData == null) {
            return null;
        }
        const secondProbeData = this.parseProbeData(splitted[3], splitted[4]);
        if (secondProbeData == null) {
            return null;
        }

        const probesData = [firstProbeData, secondProbeData];

        return { superiorRightLimit, probesData };
    }
}
