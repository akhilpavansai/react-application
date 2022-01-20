import React from "react";
import LogoButton from './index';
import BlinkistLogo from '../../../assets/logos/blinkistlogo.png';

export default {
    title: 'Atoms/Logo Button',
    component: LogoButton
}

export const DefaultLogoButton = () => <LogoButton image={BlinkistLogo}></LogoButton>