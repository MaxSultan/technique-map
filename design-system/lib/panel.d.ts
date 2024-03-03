import { ReactNode, MutableRefObject } from 'react';
export declare const PanelList: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const PanelItem: import("styled-components").StyledComponent<({ className, children, addToPracticePlan }: any) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
type PanelProps = {
    children: ReactNode;
    className?: string;
    passedRef: MutableRefObject<HTMLDialogElement>;
    title: string;
};
export declare const Panel: import("styled-components").StyledComponent<({ children, className, passedRef, title }: PanelProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export {};
