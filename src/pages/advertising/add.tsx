import Image from '@/components/Image';
import TextTranslate from '@/components/typography/TextTranslate';
import Link from 'next/link';
import React from 'react'

const data = [
    // All for the New Year
    {
        name: 'allForTheNewYear',
        icon: 'all-for-the-new-year.svg'
    },
    // Transportation
    {
        name: 'transportation',
        icon: 'transportation.svg'
    },
    // Real Estate
    {
        name: 'realEstate',
        icon: 'real-estate.svg'
    },
    // Phones, Communications, and Gadgets
    {
        name: 'phonesCommAndGadgets',
        icon: 'phones-communication-and-gadgets.svg'
    },
    // Computers and office equipment
    {
        name: 'computersAndOfficeEquipment',
        icon: 'computers-and-office-equipment.svg'
    },
    // Construction and Repair
    {
        name: 'constructionAndRepair',
        icon: 'construction-and-repair.svg'
    },
    // Clothing, Footwear & Accessories
    {
        name: 'clothingFootwearAndAccessories',
        icon: 'clothing-footwear-and-accessories.svg'
    },
    // Furniture and Interior
    {
        name: 'furnitureAndInterior',
        icon: 'furniture-and-interior.svg'
    },
    // Audio-Video-Photo
    {
        name: 'audioVideoPhoto',
        icon: 'audio-video-photo.svg'
    },
    // Everything Else
    {
        name: 'everythingELse',
        icon: 'everything-else.svg'
    },
    // Everything for celebrations
    {
        name: 'everythingForCelebrations',
        icon: 'everything-for-celebrations.svg'
    },
    // Home Appliances
    {
        name: 'homeAppliances',
        icon: 'home-appliances.svg'
    },
    // Jobs
    {
        name: 'jobs',
        icon: 'jobs.svg'
    },
    // Services
    {
        name: 'services',
        icon: 'services.svg'
    },
    // Sports, Health and Beauty
    {
        name: 'sportsHealthAndBeauty',
        icon: 'sports-health-and-beauty.svg'
    },
    // Tourism, Leisure & Recreation
    {
        name: 'tourismLeisureAndRecreation',
        icon: 'tourism-leisure-and-recreation.svg'
    },
    // Business
    {
        name: 'business',
        icon: 'business.svg'
    },
    // Home and Office
    {
        name: 'homeAndOffice',
        icon: 'home-and-office.svg'
    },
    // Children's World
    {
        name: 'childrensWorld',
        icon: 'children\'s-world.svg'
    },
    // Farming
    {
        name: 'farming',
        icon: 'farming.svg'
    },
    // Pets & Plants
    {
        name: 'petsAndPlants',
        icon: 'pets-and-plants.svg'
    },
    // Musical Instruments
    {
        name: 'musicalInstruments',
        icon: 'musical-instruments.svg'
    },
    // Dating
    {
        name: 'dating',
        icon: 'dating.svg'
    },
]

const Add = () => {
  return (
    <>
        <div>
            <TextTranslate tag='h2' value='chooseCategory' />
            <Link href="#">
                <TextTranslate tag='p' value='dontKnowCategory'/>
            </Link>
        </div>

        <ul style={{display: 'flex', maxHeight: '50vh', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'left', alignContent: 'center'}}>
            {
                data.map(d => (
                    <li>
                        <Link href="#" style={{display: 'grid', gridTemplateColumns: '20px calc(100% - 25px)', alignItems: 'center', justifyItems: 'start', padding: '15px', gap: '5px'}}>
                            <Image alt={d.name} src={d.icon} height={24} width={24} key={`${d.name}-${d.icon}`}/>
                            <TextTranslate tag="p" value={d.name} />
                        </Link>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

Add.withLayout = true;

export default Add