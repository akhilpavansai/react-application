import TextWithIcon from './index';
import DropDownIcon from '../../../assets/icons/dropdown.jpg';


export default {
    title: 'Molecules/TextWithIcon',
    component: TextWithIcon
}

export const DefaultTextWithIcon = () => <TextWithIcon icon={DropDownIcon} iconwidth="10.61px" iconheight="6.48px" type="body1" customstyle={{tp:{color:"#03314B", fontWeight:500,padding:"0px 6.7px 0px 0px"}}}>Explore</TextWithIcon>