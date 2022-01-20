import AddToLibraryCard from './index';
import Photo from '../../../assets/bookcovers/employee_to_entrepreneur.jpg';

export default {
    title: 'Organisms/Add To Library Card'
}

export const DefaultNewCard = () => <AddToLibraryCard bookimage={Photo} cardtitle="Employee to Entrepreneur" authorname="Steve Galveski" minutesread="15-minute read" bgcolor="#E1ECFC"></AddToLibraryCard>