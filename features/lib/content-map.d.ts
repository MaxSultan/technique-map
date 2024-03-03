import { MoveType } from './map';
type ContentMapProps = {
    area: 'top' | 'bottom' | 'neutral';
    addToPracticePlan: (id: string) => void;
    showPanel: (arg0: Function) => void;
    content: string[];
    className?: string;
    moves: MoveType[];
    setPanelTitle: (arg0: string) => void;
};
export declare const ContentMap: import("styled-components").StyledComponent<({ className, content, showPanel, addToPracticePlan, area, moves, setPanelTitle, }: ContentMapProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export {};
