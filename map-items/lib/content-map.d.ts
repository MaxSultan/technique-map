type PositionProps = {
    name: string;
    moves: {
        name: string;
    }[];
};
export type AddToPracticePlanArgs = {
    position: string;
    move: string;
    area: 'top' | 'bottom' | 'neutral';
};
type ContentMapProps = {
    area: 'top' | 'bottom' | 'neutral';
    addToPracticePlan: ({ position, move, area }: AddToPracticePlanArgs) => void;
    showPanel: (arg0: Function) => void;
    content: PositionProps[];
    className: string;
};
export declare const ContentMap: import("styled-components").StyledComponent<({ className, content, showPanel, addToPracticePlan, area, }: ContentMapProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export {};
