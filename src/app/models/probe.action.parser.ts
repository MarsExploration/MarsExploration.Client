import { ProbeAction } from './probe.action';

export function parseProbeAction(input: string) {
    switch (input) {
        case 'R': return ProbeAction.TurnRight;
        case 'L': return ProbeAction.TurnLeft;
        case 'M': return ProbeAction.Move;
        default: return undefined;
    }
}
