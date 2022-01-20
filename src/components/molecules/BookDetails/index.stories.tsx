import React from "react";
import BookDetails from './index';
import BringYourHumanToWorkCover from '../../../assets/bookcovers/bringyourhumantowork.png';

export default {
    title: 'Molecules/Book Details'
}

const book = {
    bookimage:BringYourHumanToWorkCover,
    booktitle:'Bring Your Human To Work',
    authorname:'Erica Keswin',
    minutesread:'13-minute read',
    users:'',
    synopsis:'Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.'
}
export const DefaultBookDetails = () => <BookDetails booktitle={book.booktitle} authorname={book.authorname} bookimage={book.bookimage} synopsis={book.synopsis} ></BookDetails>