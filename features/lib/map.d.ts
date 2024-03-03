type Area = 'top' | 'bottom' | 'neutral';
export type PlanType = {
    date: Date;
    moves: string[];
};
type NeutralPositions = 'open' | 'short offense' | 'underhook' | 'overhook' | 'collar tie' | 'high crotch - defense' | 'double leg - defense' | 'single leg - defense' | 'single leg on feet - defense';
type TopPositions = 'base' | 'belly' | 'on feet' | 'back';
type Positions = NeutralPositions | TopPositions;
export type MoveType = {
    name: string;
    position: Positions;
    area: Area;
    level: 'JV' | 'Varsity' | 'State Qualifier' | 'State Placer';
    id: string;
};
export declare const findMoves: (moves: MoveType[], ids: string[]) => MoveType[];
export declare const aggregateMovesByPosition: (moves: MoveType[]) => {
    neutral: never[];
    top: never[];
    bottom: never[];
};
export declare const Map: import("styled-components").StyledComponent<({ className }: any) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export {};
