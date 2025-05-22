import React from 'react'; 

// Banner One
import BannerImg from '../../../public/assets/images/thumbs/banner-img.png'; 
export const bannerContent = {
    subtitle: '360 WALKTHROUGH',
    title: 'India\'s first 360° ',
    gradientTitle: 'Home Platform',
    desc: 'Unlock the power of virtual reality in real estate. Easily Rent, Buy, and Sell properties with immersive 360° walkthroughs across Gurgaon.',
    thumb: BannerImg
}

// Filter Tabs
export const filterTabs = [
    {
        id: 1,
        text: 'Rent'
    },
    {
        id: 2,
        text: 'Buy'
    },
    {
        id: 3,
        text: 'Sell'
    },
]
  

// About One Content
export const aboutStatistics = {
    icon: <i className="fas fa-users text-gradient"></i>,
    number: '4000+',
    text: 'Satisfied Clients'
}
import aboutContentThumb from '../../../public/assets/images/thumbs/about-img.png'; 
import aboutContentIcon from '../../../public/assets/images/icons/about-icon.svg'; 
export const aboutContent = {
    thumb: aboutContentThumb,
    icon: aboutContentIcon,
    title: 'Your Dream Home Awaits',
    desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties'
}


// Property Data 
import propertyThumb1 from '../../../public/assets/images/thumbs/property-1.png'; 
import propertyThumb2 from '../../../public/assets/images/thumbs/property-2.png'; 
import propertyThumb3 from '../../../public/assets/images/thumbs/property-3.png'; 
import propertyThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
import propertyThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
import propertyThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 
import propertyThumb7 from '../../../public/assets/images/thumbs/property-7.png'; 
import propertyThumb8 from '../../../public/assets/images/thumbs/property-8.png'; 
import propertyThumb9 from '../../../public/assets/images/thumbs/property-9.png'; 
import propertyThumb10 from '../../../public/assets/images/thumbs/property-10.png'; 
import propertyThumb11 from '../../../public/assets/images/thumbs/property-11.png'; 
import propertyThumb12 from '../../../public/assets/images/thumbs/property-12.png'; 
export const properties = [
    {
        id: 1,
        thumb: propertyThumb1,
        price: '₹45,000',
        day: '/per month',
        title: 'Luxury Apartment in DLF Cyber City',
        desc: 'This elegant apartment in DLF Cyber City offers modern living with easy access to major IT hubs. Features include high-end finishes, 24-hour security, power backup, and beautiful community spaces. Perfect for professionals looking for convenience and luxury in the heart of Gurugram.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'DLF Cyber City, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '2 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '1 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Newest',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Gurugram",
    },
    {
        id: 2,
        thumb: propertyThumb2,
        price: '₹95,00,000',
        day: '',
        title: 'Modern Villa in Sushant Lok',
        desc: 'Spacious villa located in the premium neighborhood of Sushant Lok. This property features high ceilings, large windows for natural light, a private garden, and premium fixtures. Close to schools, hospitals, and retail centers making it an ideal family home in one of Gurgaon\'s most sought-after localities.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Sushant Lok Phase I, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '3 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Buy',
        dataTypes: 'Villa',
        dataLocations: "Gurugram",
    },
    {
        id: 3,
        thumb: propertyThumb3,
        price: '₹75,000',
        day: '/per month',
        title: 'Premium Office Space in Udyog Vihar',
        desc: 'Furnished office space in the commercial hub of Udyog Vihar. This well-designed workspace comes with high-speed internet connectivity, conference rooms, reception area, and ample parking. Perfect for startups and established businesses looking for a professional environment in an accessible location.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Udyog Vihar Phase IV, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Cabins',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '2 Washrooms',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Match',
        dataStatuses: 'Rent',
        dataTypes: 'Office',
        dataLocations: "Gurugram",
    },
    {
        id: 4,
        thumb: propertyThumb4,
        price: '₹1,25,00,000',
        day: '',
        title: 'Spacious Penthouse in Golf Course Road',
        desc: 'Luxurious penthouse with panoramic views of the Aravallis on premium Golf Course Road. This exquisite property features Italian marble flooring, designer kitchen, private terrace, and smart home automation. The complex offers world-class amenities including pool, gym, spa, and clubhouse.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Golf Course Road, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '5 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '4 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Low Price',
        dataStatuses: 'Sell',
        dataTypes: 'Apartments',
        dataLocations: "Gurugram",
    },
    {
        id: 5,
        thumb: propertyThumb5,
        price: '₹1,50,00,000',
        day: '',
        title: 'Garden Villa in Nirvana Country',
        desc: 'Beautiful villa in the lush green community of Nirvana Country. This property features spacious living areas, landscaped garden, modern kitchen, and private parking. Nirvana Country offers excellent amenities including parks, community center, and security, making it ideal for families looking for a serene living environment.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Nirvana Country, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '6 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '4 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'High Price',
        dataStatuses: 'Buy',
        dataTypes: 'Houses',
        dataLocations: "Gurugram",
    },
    {
        id: 6,
        thumb: propertyThumb6,
        price: '₹55,000',
        day: '/per month',
        title: 'Modern Apartment in M3M Urbana',
        desc: 'Contemporary apartment in the popular M3M Urbana complex. This well-designed property offers spacious rooms, modern fittings, and excellent amenities. The complex features swimming pools, gym, landscaped gardens, and children\'s play areas, providing a perfect balance of comfort and convenience.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'M3M Urbana, South City II, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '3 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '2 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Medium Price',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Gurugram",
    },
    {
        id: 7,
        thumb: propertyThumb7,
        price: '₹1,80,00,000',
        day: '',
        title: 'Premium Apartment in DLF Phase 5',
        desc: 'Luxurious apartment in the prestigious DLF Phase 5 area. This premium property features high-end finishes, spacious balconies, and stunning views. The complex offers 24/7 security, swimming pool, gym, and landscaped gardens, perfect for those seeking an upscale lifestyle in a prime location.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'DLF Phase 5, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '3 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Medium Price',
        dataStatuses: 'Buy',
        dataTypes: 'Apartments',
        dataLocations: "Gurugram",
    },
    {
        id: 8,
        thumb: propertyThumb8,
        price: '₹1,10,00,000',
        day: '',
        title: 'Luxury Villa in Sector 47',
        desc: 'Elegant villa in the residential hub of Sector 47. This beautiful property features spacious interiors, multiple balconies, modern kitchen, and stylish bathrooms. The locality offers excellent infrastructure, proximity to schools, hospitals, and markets, making it an ideal family home.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Sector 47, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '3 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Match',
        dataStatuses: 'Buy',
        dataTypes: 'Villa',
        dataLocations: "Gurugram",
    },
    {
        id: 9,
        thumb: propertyThumb9,
        price: '₹40,000',
        day: '/per month',
        title: 'Modern Apartment in Vipul Greens',
        desc: 'Stylish apartment in the well-established Vipul Greens complex. This property offers contemporary design, premium finishes, and excellent ventilation. The community features include swimming pool, gym, jogging track, and landscaped gardens, providing a comfortable and convenient lifestyle.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Vipul Greens, Sohna Road, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '3 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '2 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Low Price',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Gurugram",
    },
    {
        id: 10,
        thumb: propertyThumb10,
        price: '₹1,40,00,000',
        day: '',
        title: 'Premium Floors in Sushant Lok Phase II',
        desc: 'Newly built premium floors in the desirable area of Sushant Lok Phase II. This property features modern architecture, spacious living areas, modular kitchen, and quality fixtures. Located in a well-developed neighborhood with excellent connectivity and amenities nearby.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Sushant Lok Phase II, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '3 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '2 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'High Price',
        dataStatuses: 'Sell',
        dataTypes: 'Apartments',
        dataLocations: "Gurugram",
    },
    {
        id: 11,
        thumb: propertyThumb11,
        price: '₹85,000',
        day: '/per month',
        title: 'Commercial Space in Cyber Hub',
        desc: 'Prime commercial space in the bustling Cyber Hub area. This well-designed office space comes with modern interiors, high-speed internet, conference facilities, and dedicated parking. Located in Gurgaon\'s premier business district with excellent connectivity and proximity to major corporations.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Cyber Hub, DLF Cyber City, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '5 Cabins',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '3 Washrooms',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Newest',
        dataStatuses: 'Rent',
        dataTypes: 'Office',
        dataLocations: "Gurugram",
    },
    {
        id: 12,
        thumb: propertyThumb12,
        price: '₹1,20,00,000',
        day: '',
        title: 'Family Home in Palam Vihar',
        desc: 'Spacious family home in the established neighborhood of Palam Vihar. This property offers generous living spaces, garden area, modern amenities, and ample parking. Located in a quiet residential area with good schools, markets, and parks nearby, perfect for families looking for a comfortable lifestyle.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Palam Vihar, Gurugram, Haryana',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: '3 Baths',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',    
        dataStatuses: 'Buy',
        dataTypes: 'Houses',
        dataLocations: "Gurugram",
    },
]


// Property Type Data
import propertyTypeIcon1 from '../../../public/assets/images/icons/property-type-icon1.svg';
import propertyTypeIcon2 from '../../../public/assets/images/icons/property-type-icon2.svg';
import propertyTypeIcon3 from '../../../public/assets/images/icons/property-type-icon3.svg';
export const propertyTypes = [ 
    {
        icon: propertyTypeIcon1,
        title: 'Seamless Solutions Your Success ',
        desc: 'Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word'
    },
    {
        icon: propertyTypeIcon2,
        title: 'Proactive Realty Services ',
        desc: 'Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word'
    },
    {
        icon: propertyTypeIcon3,
        title: 'Supreme Home Finders',
        desc: 'Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word'
    },
]


// CountUp Data
export const counts = [ 
    {
        number: '200',
        text: 'HAPPY PATIENTS'
    },
    {
        number: '20',
        text: 'SAVED HEARTS '
    },
    {
        number: '10k',
        text: 'EXPERT DOCTORS'
    },
    {
        number: '900',
        text: 'SERENITY WORK '
    },
]


// portfolio  Data
import portfolioThumb1 from '../../../public/assets/images/thumbs/portfolio1.png'; 
import portfolioThumb2 from '../../../public/assets/images/thumbs/portfolio2.png'; 
import portfolioThumb3 from '../../../public/assets/images/thumbs/portfolio3.png'; 
import portfolioThumb4 from '../../../public/assets/images/thumbs/portfolio4.png'; 
export const portfolios = [
    {
        thumb: portfolioThumb1,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb2,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb3,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb4,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
]


// Testimonial Data
import quoteIcon from '../../../public/assets/images/icons/quote.svg';
export const testimonials = [
    {
        name: 'Sakib Fahad',
        designation: 'Content Creator',
        desc: 'Their product exceeded his my routi  expectations. The the quality and attention to detail a the a moutstanding and it has become an essential most a education the a man who can do tant clearly', 
        quote: quoteIcon
    },
    {
        name: 'John Doe',
        designation: 'Frontend Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, autem! Consectetur illo tempora sed repudiandae eaque velit expedita, ipsa earum explicabo libero, voluptatibus aliquid odio', 
        quote: quoteIcon
    },
]


// Blog Data
import blogThumb1 from '../../../public/assets/images/thumbs/blog1.png'; 
import blogThumb2 from '../../../public/assets/images/thumbs/blog2.png'; 
import blogThumb3 from '../../../public/assets/images/thumbs/blog3.png'; 
import blogThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
import blogThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
import blogThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 
export const blogs = [
    {
        id: 1,
        thumb: blogThumb1,
        admin: 'By Stanio lainto',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (30)'
            },
        ],
        title: 'Discover Endless Possibilities in Real Estate Live Your Best Life in a ',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting properties. It encompasses residential, commercial, and industrial properties. Real estate is a lucrative industry that involves the buying selling and renting properties It encompasses residential commercial and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping',
        linkText: 'Read More',
    },
    {
        id: 2,
        thumb: blogThumb2,
        date: '28 Mar',
        admin: 'By John Doe',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (50)'
            },
        ],
        title: 'Turn Your Real Estate Dreams Into Reality Embrace the Real Estate ',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting properties. It encompasses residential, commercial, and industrial properties. Real estate is a lucrative industry that involves the buying selling and renting properties It encompasses residential commercial and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping',
        linkText: 'Read More',
    },
    {
        id: 3,
        thumb: blogThumb3,
        admin: 'By Rakibul Islam',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Your journey to home ownership starts a here the satisfaction',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting properties. It encompasses residential, commercial, and industrial properties. Real estate is a lucrative industry that involves the buying selling and renting properties It encompasses residential commercial and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping',
        linkText: 'Read More',
    },
    {
        id: 4,
        thumb: blogThumb4,
        admin: 'By Alex',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Experience the best in real estate services a here the satisfaction',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting properties. It encompasses residential, commercial, and industrial properties. Real estate is a lucrative industry that involves the buying selling and renting properties It encompasses residential commercial and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping',
        linkText: 'Read More',
    },
    {
        id: 5,
        thumb: blogThumb5,
        admin: 'By Jenon Doe',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Let us find the perfect property for you Elite Realty Services',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting properties. It encompasses residential, commercial, and industrial properties. Real estate is a lucrative industry that involves the buying selling and renting properties It encompasses residential commercial and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping',
        linkText: 'Read More',
    },
    {
        id: 6,
        thumb: blogThumb6,
        admin: 'By Akramul Hoq',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Investing in real estate made easy the door to your new home',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting properties. It encompasses residential, commercial, and industrial properties. Real estate is a lucrative industry that involves the buying selling and renting properties It encompasses residential commercial and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping',
        linkText: 'Read More',
    },
]
