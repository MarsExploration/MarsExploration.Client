import { Direction } from './direction';

export function parseDirection(input: string) {
    switch (input) {
        case 'N': return Direction.North;
        case 'E': return Direction.East;
        case 'W': return Direction.Weast;
        case 'S': return Direction.South;
        default: return undefined;
    }
}
