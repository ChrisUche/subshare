import { ViewStyle } from 'react-native';

export interface CustomButtonProps {
    title?: string;
    smtitle?: string;
    subtitle?: string;
    containerStyles?: ViewStyle;
    onPress?: () => void; // Use onPress for the touch event
    btnType?: "button" | "submit";
    textStyles? : string;
    appIcon?: string;
    playstoreIcon?: string;
    isDisabled?: boolean;
}

