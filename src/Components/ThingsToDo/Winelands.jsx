// https://campcanoe.co.za/about-us/

import React from 'react'
import ThingToDoSection from './ThingToDoSection'

const listOfWinelands=[{
    id: 1,
    name: 'Grub and Vine',
    location: '103 Bree St (Cape Town City Center)',
    description: 'A trendy delicious type of food located in city center. An awesome thing to eat! Yum dinner.',
    photoURL: 'https://www.grubandvine.co.za/content/uploads/2022/02/IMG_2200-scaled.jpg',
    link: 'grubandvine.co.za'
},
{
    id: 2,
    name: 'Grub and Vine',
    location: '103 Bree St (Cape Town City Center)',
    description: 'A trendy delicious type of food located in city center. An awesome thing to eat! Yum dinner.',
    photoURL: 'https://www.grubandvine.co.za/content/uploads/2022/02/IMG_2200-scaled.jpg',
    link: 'grubandvine.co.za'
},
{
    id: 3,
    name: 'Grub and Vine',
    location: '103 Bree St (Cape Town City Center)',
    description: 'A trendy delicious type of food located in city center. An awesome thing to eat! Yum dinner.',
    photoURL: 'https://www.grubandvine.co.za/content/uploads/2022/02/IMG_2200-scaled.jpg',
    link: 'grubandvine.co.za'
},
{
    id: 4,
    name: 'Grub and Vine',
    location: '103 Bree St (Cape Town City Center)',
    description: 'A trendy delicious type of food located in city center. An awesome thing to eat! Yum dinner.',
    photoURL: 'https://www.grubandvine.co.za/content/uploads/2022/02/IMG_2200-scaled.jpg',
    link: 'grubandvine.co.za'
},
{
    id: 5,
    name: 'Grub and Vine',
    location: '103 Bree St (Cape Town City Center)',
    description: 'A trendy delicious type of food located in city center. An awesome thing to eat! Yum dinner.',
    photoURL: 'https://www.grubandvine.co.za/content/uploads/2022/02/IMG_2200-scaled.jpg',
    link: 'grubandvine.co.za'
}]

const Winelands = () => {
     return (
         <ThingToDoSection data={listOfWinelands} sectionTitle="Winelands" />
     )

}

export default Winelands; 