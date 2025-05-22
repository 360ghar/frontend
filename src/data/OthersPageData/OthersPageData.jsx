import React from 'react';

// ============================== Property Sidebar Page Data Start ==============================
export const propertyTypes = [
    {
        text: 'House',
        value: 'Houses',
    },
    {
        text: 'Apartment',
        value: 'Apartments',
    },
    {
        text: 'Office',
        value: 'Office',
    },
    {
        text: 'Villa',
        value: 'Villa',
    },
    {
        text: 'Single Family',
        value: 'Single Family',
    },
    {
        text: 'Luxury Home',
        value: 'Luxury Home',
    },
]

export const reasons = [
    {
        text: 'Buying',
        value: 'Buy',
    },
    {
        text: 'Renting',
        value: 'Rent',
    },
    {
        text: 'Selling',
        value: 'Sell',
    },
]

export const searchAmenities = [
    {
        text: 'Dishwasher'
    },
    {
        text: 'Floor Coverings'
    },
    {
        text: 'Internet'
    },
    {
        text: 'Build Wardrobes'
    },
    {
        text: 'Supermarket'
    },
    {
        text: 'Kids Zone'
    },
]
export const priceRanges = [
    {
        text: 'Low Budget',
        value: 'Low Price'
    },
    {
        text: 'Medium',
        value: 'Medium Price'
    },
    {
        text: 'High Budget',
        value: 'High Price'
    }
]
export const bedBaths = [
    {
        text: 'Single'
    },
    {
        text: 'Double'
    },
    {
        text: 'Up To 3'
    },
    {
        text: 'Up To 5'
    },
    {
        text: 'Supermarket'
    },
]

// ============================== Property Sidebar Page Data End ==============================


// ============================== Property Details Page Data Start ==============================
import propertyDetailsThumb1 from '../../../public/assets/images/thumbs/property-details-1.png';
import propertyDetailsThumb2 from '../../../public/assets/images/thumbs/property-details-2.png';
import propertyDetailsThumb3 from '../../../public/assets/images/thumbs/property-details-3.png';
import propertyDetailsThumb4 from '../../../public/assets/images/thumbs/property-details-4.png';
export const propertyDetailsThumbs = [
    {
        thumb: propertyDetailsThumb1
    },
    {
        thumb: propertyDetailsThumb2
    },
    {
        thumb: propertyDetailsThumb3
    },
    {
        thumb: propertyDetailsThumb4
    },
]

import amenitiesIcon1 from '../../../public/assets/images/icons/amenities1.svg';
import amenitiesIcon2 from '../../../public/assets/images/icons/amenities2.svg';
import amenitiesIcon3 from '../../../public/assets/images/icons/amenities3.svg';
import amenitiesIcon4 from '../../../public/assets/images/icons/amenities4.svg';
import amenitiesIcon5 from '../../../public/assets/images/icons/amenities5.svg';
import amenitiesIcon6 from '../../../public/assets/images/icons/amenities6.svg';
export const propertyDetailsAmenities = [ 
    {
        icon: amenitiesIcon1,
        text: "Room", 
        title: "4 Room"  
    },
    {
        icon: amenitiesIcon2,
        text: "Bed", 
        title: "3 Beds"  
    },
    {
        icon: amenitiesIcon3,
        text: "Bath", 
        title: "2 Baths"  
    },
    {
        icon: amenitiesIcon4,
        text: "Space", 
        title: "3 Space"  
    },
    {
        icon: amenitiesIcon5,
        text: "Size", 
        title: "1020 sqft"  
    },
    {
        icon: amenitiesIcon6,
        text: " Property Type ", 
        title: "Apartment"  
    },
]

export const featureLists = [
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Dream Property Solutions'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Prestige Property Management'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Secure Property Partners'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Global Real Estate Investments'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Doors to Your Future'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'You Home with Experience'
    },
]

export const addressContents = [
    {
        text: 'Address',
        title: 'Mirpur 1,Chineese'
    },
    {
        text: 'Code',
        title: '2365'
    }
]

// Common Sidebar Data
export const categoryLists = [
    {
        link: '/blog',
        text: 'Prime Investments',
        number: '(1)'
    },
    {
        link: '/blog',
        text: 'ProHome Finders',
        number: '(8)'
    },
    {
        link: '/blog',
        text: 'SmartHouse Agency',
        number: '(3)'
    },
    {
        link: '/blog',
        text: 'Secure Property Partners',
        number: '(5)'
    },
]

import SidebarPropertyImg1 from '../../../public/assets/images/thumbs/properties-1.png';
import SidebarPropertyImg2 from '../../../public/assets/images/thumbs/properties-2.png';
import SidebarPropertyImg3 from '../../../public/assets/images/thumbs/properties-3.png';
import SidebarPropertyImg4 from '../../../public/assets/images/thumbs/properties-4.png';
import SidebarPropertyImg5 from '../../../public/assets/images/thumbs/properties-5.png';
import SidebarPropertyImg6 from '../../../public/assets/images/thumbs/properties-6.png';

export const sidebarProperties = [
    {
        link: '/property',
        image: SidebarPropertyImg1,
        text: 'Relax House'
    },
    {
        link: '/property',
        image: SidebarPropertyImg2,
        text: 'Hunting Adventure'
    },
    {
        link: '/property',
        image: SidebarPropertyImg3,
        text: 'Homeowner ship'
    },
    {
        link: '/property',
        image: SidebarPropertyImg4,
        text: 'Real Dreams'
    },
    {
        link: '/property',
        image: SidebarPropertyImg5,
        text: 'New Doors'
    },
    {
        link: '/property',
        image: SidebarPropertyImg6,
        text: 'The Heart'
    },
]

export const sidebarTags = [
    {
        text: 'All Project',
        link: '/blog'
    },
    {
        text: 'Finders',
        link: '/blog'
    },
    {
        text: 'Home Sales',
        link: '/blog'
    },
    {
        text: 'Swift',
        link: '/blog'
    },
    {
        text: 'Reliable Rentals',
        link: '/blog'
    },
    {
        text: 'Living',
        link: '/blog'
    },
]
// ============================== Property Details Page Data End ==============================


// ============================== Listing Page Data Start ==============================
export const addListings = [
    {
        link: '#basicInformation',
        text: 'Basic Information'
    },
    {
        link: '#propertyGallery',
        text: 'Property Gallery'
    },
    {
        link: '#propertyInformation',
        text: 'Property Information'
    },
    {
        link: '#propertyContactDetails',
        text: 'Property Contact Details'
    },
]

export const addAmenities = [
    {
        text: 'Air Condition'
    },
    {
        text: 'Lawn'
    },
    {
        text: 'Swimming Pool'
    },
    {
        text: 'Barbeque'
    },
    {
        text: 'Microwave'
    },
    {
        text: 'TV Cable'
    },
    {
        text: 'Dryer'
    },
    {
        text: 'Outdoor Shower'
    },
    {
        text: 'Washer'
    },
    {
        text: 'Gym'
    },
    {
        text: 'Refrigerator'
    },
    {
        text: 'WiFi'
    },
    {
        text: 'Laundry'
    },
    {
        text: 'Souna'
    },
    {
        text: 'Window Coverings'
    },
]
// ============================== Listing Page Data End ==============================


// ============================== Map Location Page Data Start ==============================
export const mapLocations = [
    {
        id: 1,
        title: 'Alabama',
        mapLocationsCards: [
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
    {
        id: 2,
        title: 'Boston',
        mapLocationsCards: [
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
    {
        id: 3,
        title: 'North America',
        mapLocationsCards: [
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
    {
        id: 4,
        title: 'Gurugram',
        mapLocationsCards: [
            {
                title: 'Gurugram',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: 'Gurugram, Haryana, India'
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: '8178340031'
                    },
                    {
                        icon: <i className="fas fa-envelope"></i>,
                        title: 'Email',
                        address: 'info@360ghar.com'
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.360ghar.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
]
// ============================== Map Location Page Data End ==============================


// ============================== Team Section Data Start ==============================
import teamImg1 from '../../../public/assets/images/thumbs/team1.png';
import teamImg2 from '../../../public/assets/images/thumbs/team2.png';
import teamImg3 from '../../../public/assets/images/thumbs/team3.png';

export const teams = [
    {
        thumb: teamImg1,
        name: 'Annette Black',
        designation: ' President of Sales ',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
    {
        thumb: teamImg2,
        name: 'Savannah Nguyen',
        designation: 'Manager of Sales',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
    {
        thumb: teamImg3,
        name: 'Bessie Cooper',
        designation: 'Director of Sales',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
]

// ============================== Team Section Data End ==============================



// ====================== Faq Page Counter Four Data Start ====================
import counterFourIcon1 from '../../../public/assets/images/icons/counter-four1.svg';
import counterFourIcon2 from '../../../public/assets/images/icons/counter-four2.svg';
import counterFourIcon3 from '../../../public/assets/images/icons/counter-four3.svg';
import counterFourIcon4 from '../../../public/assets/images/icons/counter-four4.svg';

export const counterFourContents = [
    {
        icon: counterFourIcon1,
        number: '800+',
        text: 'Happy Client'
    },
    {
        icon: counterFourIcon2,
        number: '440+',
        text: ' Project done '
    },
    {
        icon: counterFourIcon3,
        number: '500k',
        text: 'Employees'
    },
    {
        icon: counterFourIcon4,
        number: '80+',
        text: ' Award winning '
    },
]
// ====================== Faq Page Counter Four Data End ====================


// ========================= Checkout Page Data Start =========================
import paymentMethodImg1 from '../../../public/assets/images/thumbs/paypal.png';
import paymentMethodImg2 from '../../../public/assets/images/thumbs/visa.png';

export const paymentMethods = [
    {
        text: 'Debit card / Credit card',
        img: paymentMethodImg1
    },
    {
        text: 'Paypal',
        img: paymentMethodImg2
    },
]

// Bill Lists
export const billingLists = [
    {
        text: '3 Rooms Manhattan × 2',
        amount: '321.95'
    },
    {
        text: 'OE Replica Wheels × 2',
        amount: ' $185.00 '
    },
    {
        text: 'Wheel Bearing Retainer × 2',
        amount: ' $130.00'
    },
    {
        text: 'Shipping and Handing',
        amount: ' $15.00'
    },
    {
        text: 'Vat',
        amount: ' $20.00'
    }
]
// ========================= Checkout Page Data End =========================


// ========================= Cart Page Data Start =========================
import cartThumb1 from '../../../public/assets/images/thumbs/property-1.png';
import cartThumb2 from '../../../public/assets/images/thumbs/property-2.png';
import cartThumb3 from '../../../public/assets/images/thumbs/property-3.png';
import cartThumb4 from '../../../public/assets/images/thumbs/property-4.png';

export const cartItems = [
    {       
        thumb: cartThumb1,
        title: '3 Rooms Manhattan',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        price: '85.10'
    },
    {       
        thumb: cartThumb2,
        title: 'Wheel Bearing Retainer',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        price: '50.50'
    },
    {       
        thumb: cartThumb3,
        title: 'Your journey home owner',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        price: '45.80'
    },
    {       
        thumb: cartThumb4,
        title: '3 Rooms Manhattan',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        price: '90.20'
    },
]
// ========================= Cart Page Data End =========================


// ========================= Account Page Data Start =========================
export const accountTabs = [
    {
        icon: <i className="fas fa-home"></i>,
        text: 'Home '
    },
    {
        icon: <i className="fas fa-user"></i>,
        text: ' Profile'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: ' address'
    },
    {
        icon: <i className="fas fa-user"></i>,
        text: ' Account Details'
    },
    {
        icon: <i className="fas fa-list"></i>,
        text: ' My Properties'
    },
    {
        icon: <i className="fas fa-heart"></i>,
        text: ' Favorite Properties'
    },
    {
        icon: <i className="fas fa-map-marked-alt"></i>,
        text: ' Add Property'
    },
    {
        icon: <i className="fas fa-money-check"></i>,
        text: ' Payments'
    },
    {
        icon: <i className="fas fa-lock"></i>,
        text: ' Change Password'
    },
]

export const accountProfileInfos = [ 
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: '66 Broklyant, New York India'
    },
    {
        icon: <i className="fas fa-phone"></i>,
        text: '012 345 678 9101'
    },
    {
        icon: <i className="fas fa-envelope"></i>,
        text: 'example@gmail.com'
    }
]

export const accountAddress = [ 
    {
        title: 'Charging Address alter',
        name: 'Rosalina D. William',
        accountAddressInfos: [
            {
                title: 'location:',
                text: '66 Broklyant, New York India'
            },
            {
                title: 'Phone:',
                text: ' 012 345 678 9101'
            },
            {
                title: 'Email:',
                text: ' example@gmail.com'
            },
        ]
    },
    {
        title: 'Transporting Address alter',
        name: 'Rosalina D. William',
        accountAddressInfos: [
            {
                title: 'location:',
                text: '66 Broklyant, New York India'
            },
            {
                title: 'Phone:',
                text: ' 012 345 678 9101'
            },
            {
                title: 'Email:',
                text: ' example@gmail.com'
            },
        ]
    },
]

import PropertyTableThumb1 from '../../../public/assets/images/thumbs/property-1.png';
import PropertyTableThumb2 from '../../../public/assets/images/thumbs/property-2.png';
import PropertyTableThumb3 from '../../../public/assets/images/thumbs/property-3.png';
import PropertyTableThumb4 from '../../../public/assets/images/thumbs/property-4.png';

export const propertyTables = [ 
    {
        thumb: PropertyTableThumb1,
        title: '3 Rooms Manhattan',
        location: ' 66 Broklyant, New York America ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb2,
        title: 'Wheel Bearing Retainer',
        location: ' 66 Broklyant, New York America ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb3,
        title: 'Your journey home owner',
        location: ' 66 Broklyant, New York America ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb4,
        title: 'Turning Dreams into',
        location: ' 66 Broklyant, New York America ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
]
// ========================= Account Page Data End =========================


// ========================= Project Page Data End =========================
import projectItemThumb1 from '../../../public/assets/images/thumbs/project-img1.png';
import projectItemThumb2 from '../../../public/assets/images/thumbs/project-img2.png';
import projectItemThumb3 from '../../../public/assets/images/thumbs/project-img3.png';
import projectItemThumb4 from '../../../public/assets/images/thumbs/project-img4.png';
export const projectItems = [
    {
        id: 1,
        thumb: projectItemThumb1,
        title: 'Turning Dreams into Addresses Home State',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 2,
        thumb: projectItemThumb2,
        title: 'Your journey homeownership starts here too',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 3,
        thumb: projectItemThumb3,
        title: 'Opening Doors to Your Dreams For Living',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 4,
        thumb: projectItemThumb4,
        title: 'Home is Where Your Story Begins',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 5,
        thumb: projectItemThumb1,
        title: 'Building Trust, One Home at a Tim',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 6,
        thumb: projectItemThumb2,
        title: 'Brick by Brick Your Dream Home Awaits',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 7,
        thumb: projectItemThumb3,
        title: 'Guiding You Home with Experienc',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
    {
        id: 8,
        thumb: projectItemThumb4,
        title: 'A Tradition of Trust in Real Estate',
        desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    },
]

export const challengeLists = [
    {
        text: 'Unleash the Potential of your Interiors'
    },
    {
        text: 'Aliquam eros justo, pos uere loborre loborti'
    },
    {
        text: 'Unleash the Potential of your Interiors'
    },
    {
        text: 'MBA rotter of the litter university in united state'
    },
    {
        text: 'BSC, Engineering of institute of trade and science'
    },
    {
        text: 'MBA rotter of the litter university united state'
    },
]

export const projectSidebarLists = [
    {
        text: 'Client',
        title: 'Sandi leo rakiul'
    },
    {
        text: '150000 USD',
        title: 'consultation real estate'
    },
    {
        text: 'Category',
        title: 'Planing, Real Estate'
    }
]
// ========================= Project Page Data End =========================



// ========================= Project Page Data End =========================
export const contactTopInfos = [
    {
        icon: <i className="fas fa-paper-plane"></i>,
        title: 'Email',
        textOne: 'info@360ghar.com',
        textTwo: '',
        link: 'mailto:'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        title: 'Location',
        text: 'Gurugram, Haryana India, 122001',
    },
    {
        icon: <i className="fas fa-phone"></i>,
        title: 'Contacts ',
        textOne: '8178340031',
        textTwo: '',
        link: 'tel:'
    },
]
// ========================= Project Page Data End =========================


// ========================= Project Page Data End =========================
// export const propertyTables = [
//     {

//     },
// ]
// ========================= Project Page Data End =========================


// ========================= Project Page Data End =========================
// export const propertyTables = [
//     {

//     },
// ]
// ========================= Project Page Data End =========================

