type TabsProps = {
    tabs: ('top' | 'bottom' | 'neutral')[];
    currentTab: string;
    setCurrentTab: (arg0: 'top' | 'bottom' | 'neutral') => void;
    className?: string;
};
export declare const Tabs: import("styled-components").StyledComponent<({ tabs, currentTab, setCurrentTab, className }: TabsProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export {};
