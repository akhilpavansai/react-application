import BookCard from './index';
import Photo from '../../../assets/bookcovers/employee_to_entrepreneur.jpg';

export default {
    title: 'Molecules/Book Card'
}

export const DefaultBookCard = () => <BookCard bookimage={Photo} cardtitle="Employee to Entrepreneur" authorname="Steve Galveski" minutesread="15-minute read" bgcolor="#E1ECFC"></BookCard>