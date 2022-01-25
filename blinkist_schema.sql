create database blinkist_db;
use blinkist_db;
create table blinkist (
	blink_id int auto_increment primary key,
	book_title varchar(45),
    book_image longblob,
	author_name varchar(45),
	minutes_read varchar(45),
	synopsis varchar(200),
	reading_status varchar(20),
	users varchar(45) default ''); 
    
insert into blinkist(
	book_title,
    book_image,
	author_name,
	minutes_read,
	synopsis,
	reading_status ,
	users) values 
	('Bring Your Human To Work',hex(load_file('/home/akhipsm/Documents/testing-app/src/assets/bookcovers/bringyourhumantowork.png')),'Erica Keswin','13-minute read',"Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today.", 'reading','1.2k reads'),
    ('Employee To Entrepreneur',hex(load_file('/home/akhipsm/Documents/testing-app/src/assets/bookcovers/beyondentrepreneurship.png')),'Steve Galveski','15-minute read',"Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today.",'reading','2.5k reads')
    ;