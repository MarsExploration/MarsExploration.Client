import { ProbeData } from './probe.data';
import { Coordinates } from './coordinates';

export class MoveProbesCommand {
    public superiorRightLimit: Coordinates;
    public probesData: ProbeData[];
}
