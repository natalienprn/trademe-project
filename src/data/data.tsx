

export interface CardData {
    id: string;
    productName: string;
    productImg: string[];
    description: string;
    categoryID: number;
    city: string;
    closeDate: string;
    shippingInfo: string;
    proStatus: string;
    oldPrice: string;
    currentPrice: string;
    
    shopName: string;
    condition: string;
    memory: string;
    hardDriveSize: string;
    cores: string;
    brand: string;
    color: string;

    fullDescription: string[];
    shippingPrice: ShippingPrice[];

}

interface ShippingPrice {
    destination: string;
    price: string;
}
const cardData: CardData[] = [
    {
        id: '1',
        productName: 'Brand New Currumbin Velvet Fabric Corner Lounge Suite',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/plus/2066301121.jpg'],
        description: 'Viewing across locations - Auckland & Hamilton',
        city: 'Canterbury',
        closeDate: 'Sat, 16 Sep',
        shippingInfo: 'Free shipping',
        proStatus: 'Buy Now',
        oldPrice: '$4,989',
        currentPrice: '$3,899',
        categoryID: 1,
        shopName: 'string',
        condition: 'new',
        memory: '',
        hardDriveSize: '',

        color: '',
        cores: '',
        brand: 'John Young Furniture',
        fullDescription: [
            'At Furniture Clearance Outlet, you will get BRAND NEW products at prices that don\'t break the bank.',
            'Experience modern luxury with the Currumbin Corner Lounge Suite by John Young Furniture.',
            'This exquisite 5-seat modular lounge suite is designed to elevate your living space with its sleek and contemporary style. The suite includes 3 scatter cushions, adding a touch of elegance to the overall design.',
            'The Currumbin Lounge Suite features a unique t-cushion design with vertical stitching, creating a visually appealing look on the suite back, sides, and base. The plush feather and foam seating provides exceptional comfort, allowing you to relax and unwind in style.',
            'Upholstered in silky velvet fabric, the Currumbin Lounge Suite is available in the sophisticated Shadow color, adding a touch of sophistication to any room. Upgrade your living room with the Currumbin Corner Lounge Suite and indulge in the perfect blend of comfort and style.',
            'Dimensions (mm): </br> 2.5/S LHF - 1900 x 1010 x 900</br>CNR/W - 1030 x 1030 x 900</br>2.5/S RHF - 1900 x 1010 x 900',
            'Warranty:',
            '1 year fabric',
            '3 year mechanism',
            '5 year frame',
            'Grab yours now: LIMITED STOCK!!',
            'As these are fast sellers and we sell these through other trading platforms, we do run out at times and there is a wait before our next shipment arrives. We will do our best to let you know whenever this is the case. At the time of listing this we have stock available.',
            'Viewings available at multiple locations around Auckland and Hamilton all 7 days. Pick ups can be arranged but only by Prior arrangement.',
            'DELIVERY:',
            'We deliver anywhere in AUCKLAND. We can also arrange very reasonable freight to most areas in the North & South Island. Please contact us for pricing.',
            'We are a Trade Me Store and New Zealand Registered Company. Please Google: Furniture Clearance Outlet Manurewa.',
            'Payment option:',
            'Opening Hours:',
            'Mon - Fri: 9am to 5:30pm',
            'Sat - Sun: 10am to 4pm',
        ],
        shippingPrice: [
            { destination: 'Non-rural - Auckland/Hamilton (free)', price: '$0.00' },
            { destination: 'Non-rural - Bay of Plenty/Whanganui/Gisborne ', price: '$199.00' },
            { destination: 'Non-rural - Napier/New Plymouth', price: '$199.00' },
            { destination: 'Non-rural - Palmerston North/Wellington ', price: '$199.00' },
            { destination: 'Non-rural - Northland/Waikato', price: '$199.00' },
            { destination: 'Rural - Ask us for shipping quote', price: '$0.00' },
            { destination: 'Pick-up available from Manukau, Auckland', price: 'FREE' }

        ]


    },
    {
        id: '2',
        productName: 'Brand New Rex Corner Lounge Suite with Ottoman',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/plus/2074338951.jpg', 'https://trademe.tmcdn.co.nz/photoserver/plus/2066547237.jpg'],
        description: 'Free Shipping to Auckland & Hamilton (Non Rural)',
        city: 'Auckland',
        closeDate: 'Thu, 9 Nov',
        shippingInfo: 'Free shipping',
        proStatus: 'Buy Now',
        oldPrice: '$2,990',
        currentPrice: '$1,989',
        categoryID: 2,
        shopName: 'string',
        condition: 'new',
        memory: '',
        hardDriveSize: '',
        cores: '',
        brand: '',
        color: 'Charcoal',
        fullDescription: [
            'At Furniture Clearance Outlet, you will get BRAND NEW products at prices that don\'t break the bank.',
            'Handcrafted in New Zealand using excellent quality materials, this Lounge Suite features large seating areas perfect for families who love to entertain or relax together.',
            'With plush cushions and an inviting design, this lounge is the perfect way to relax and unwind. The extra padded cushions creates a complementary personalized look to any living room',
            'The lounge comes with the storage ottoman perfect to stock extra pillows, cushions or anything extra for the room.',
            'Dimensions:</br>L 2900 mm, W 2200 mm, D 925 mm, H 780 mm</br>Ottoman: L 1100 x D 600 x H 450 mm',
            '*Accessories are not included.',
            'Warranty:</br>12 months manufacturers warranty',
            'We are a Trade Me Store and New Zealand Registered Company. Please Google: Furniture Clearance Outlet Manurewa.',
            'Payment option: </br>Qcard/Gem Visa/Eftpos/WINZ Quotes/Finance Now/Zip/Afterpay/Cash/Bank Transfer',
            'Opening Hours:</br>Mon - Fri: 9am to 5:30pm</br>Sat - Sun: 10am to 4pm',
        ],
        shippingPrice: [
            { destination: 'Auckland 3-5 days, Standard', price: '$0.00' },
            { destination: 'Hamilton 3-5 days, Standard', price: '$99.00' },
            { destination: 'Bay of Plenty 3-5 days, Standard', price: '$199.00' },
            { destination: 'Taranaki 3-5 days, Standard', price: '$199.00' },
            { destination: 'Hawke\'s Bay 3-5 days, Standard', price: '$199.00' },
            { destination: 'Gisborne 3-5 days, Standard', price: '$199.00' },
            { destination: 'Tauranga 3-5 days, Standard', price: '$199.00' },
            { destination: 'Whanganui 3-5 days, Standard', price: '$199.00' },
            { destination: 'Waikato 3-5 days, Standard', price: '$199.00' },
            { destination: 'Northland 3-5 days, Standard', price: '$199.00' },
            { destination: 'Shipping more than one item', price: 'No extra charge' },
            { destination: 'Pick-up available from Manukau, Auckland', price: 'FREE' }

        ]


    },
    {
        id: '3',
        productName: 'Brand New Dublin Manual Recliner Corner Lounge Suite',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/plus/2066302782.jpg'],
        description: 'Free Shipping to Auckland and Hamilton (Non-Rural)',
        city: 'Auckland',
        closeDate: 'Wed, 8 Nov',
        shippingInfo: '',
        proStatus: 'Buy Now',
        oldPrice: '$3,990',
        currentPrice: '$2,990',
        categoryID: 3,
        shopName: 'string',
        condition: 'new',
        memory: '',
        hardDriveSize: '',
        cores: '',
        color: 'Grey',
        brand: 'Berkley Furniture',

        fullDescription: [
            'At Furniture Clearance Outlet, you will get BRAND NEW products at prices that don\'t break the bank.',
            'Share this luxurious Dublin Corner Sofa Manual Recliner Lounge Suite with your friends, family and guests. Its quality and durability will guarantee your enjoyment perfectly.',
            'The sofa features oversized cozy seating made of Rhino fabric that is perfect for curling up with a good book or watching a movie. The console features a storage compartment and cup holders, so you can keep your drinks and belongings close at hand.',
            'The Dublin Corner Recliner Lounge Suite is sure to complement any décor. So why not treat yourself to a little bit of luxury today?',
            'Measurements (cm):</br>W: 270, 320 D85 H48(Seat)/100(Back)',
            'Warranty:</br>Standard 12 months RTB Warranty',
            'We are a Trade Me Store and New Zealand Registered Company. Please Google: Furniture Clearance Outlet Manurewa.',
            'Payment option: </br>Qcard/Gem Visa/Eftpos/WINZ Quotes/Finance Now/Zip/Afterpay/Cash/Bank Transfer',
            'Opening Hours:</br>Mon - Fri: 9am to 5:30pm</br>Sat - Sun: 10am to 4pm'
        ],
        shippingPrice: [
            { destination: 'To be arranged', price: 'N/A' },
            { destination: 'Pick-up available from Manukau, Auckland', price: 'FREE' }
        ]

    },
    {
        id: '4',
        productName: 'Brand New Webber 3+2 Seater Lounge Suite',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/plus/2066934770.jpg'],
        description: '3 seater and 2 seater fabric lounge suite',
        city: 'Auckland',
        closeDate: 'Fri, 10 Nov',
        shippingInfo: '',
        proStatus: 'Buy Now',
        oldPrice: '',
        currentPrice: '$2,990',
        categoryID: 4,
        shopName: 'string',
        condition: 'new',
        memory: '',
        hardDriveSize: '',
        cores: '',
        brand: '',
        color: 'Grey',
        fullDescription: [
            'At Furniture Clearance Outlet, you will get BRAND NEW products at prices that don\'t break the bank.',
            'Bring simplicity and style into your Living Area with this sleek and modern Webber 3+2 seater Lounge Suite. This masterpiece design makes it perfect for modern family homes.',
            'This lounge suite is wonderfully textured lounge suite chesterfield design that aims to bring out the flair to your home space.',
            'Single seater is also available, please ask us if needed!',
            'Dimension (mm):</br>3 Seater: W2490-D965-H890</br>2 Seater: W1800-D965-H890</br>1 Seater:  W1168-D965-H890',
            'Warranty:</br>Standard 12 month\'s manufacturers warranty.',
            'Grab yours now: LIMITED STOCK!!',
            'As these are fast sellers and we sell these through other trading platforms, we do run out at times and there is a wait before our next shipment arrives. We will do our best to let you know whenever this is the case. At the time of listing this we have stock available.',
            'Viewings available at multiple locations around Auckland and Hamilton all 7 days. Let us know your location and we will guide to the nearest store for viewing.',
            'Pick ups can be arranged but only by Prior arrangement. Please feel free to browse through our other listings.',
            'DELIVERY:</br>We deliver anywhere in AUCKLAND. We can also arrange very reasonable freight to most areas in the North & South Island. Please contact us for pricing.',
            'We are a Trade Me Store and New Zealand Registered Company. Please Google: Furniture Clearance Outlet Manurewa.',
            'Payment option: </br>Qcard/Gem Visa/Eftpos/WINZ Quotes/Finance Now/Zip/Afterpay/Cash/Bank Transfer',
            'Contact 027 418 0505 for more details now!'
        ],
        shippingPrice: [
            { destination: 'Auckland 3-5 days, Standard', price: '$0.00' },
            { destination: 'Hamilton 3-5 days, Standard', price: '$99.00' },
            { destination: 'Bay of Plenty 3-5 days, Standard', price: '$199.00' },
            { destination: 'Taranaki 3-5 days, Standard', price: '$199.00' },
            { destination: 'Hawke\'s Bay 3-5 days, Standard', price: '$199.00' },
            { destination: 'Gisborne 3-5 days, Standard', price: '$199.00' },
            { destination: 'Tauranga 3-5 days, Standard', price: '$199.00' },
            { destination: 'Whanganui 3-5 days, Standard', price: '$199.00' },
            { destination: 'Waikato 3-5 days, Standard', price: '$199.00' },
            { destination: 'Northland 3-5 days, Standard', price: '$199.00' },
            { destination: 'Pick-up available from Manukau, Auckland', price: 'FREE' }

        ]

    },
    {
        id: '5',
        productName: 'GROHE SENSIA ARENA WALL MOUNTED BIDET TOILET',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/full/2082294661.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294664.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294667.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294676.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294681.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294684.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294691.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294692.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294695.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294699.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294703.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294704.jpg', 'https://trademe.tmcdn.co.nz/photoserver/1024sq/2082294706.jpg'],
        description: '',
        city: 'Auckland',
        closeDate: 'Mon, 4 Nov',
        shippingInfo: 'Shipping from $60.00',
        proStatus: 'Buy Now',
        oldPrice: '$10,824',
        currentPrice: '$4,990',
        categoryID: 5,
        shopName: 'string',
        condition: 'New',
        memory: '',
        hardDriveSize: '',
        cores: '',

        color: 'Charcoal',
        brand: 'GROHE',
        fullDescription: [
            'GROHE SENSIA ARENA WALL MOUNTED SHOWER TOILET',
            'GROHE Sensia Arena stands for Intelligent Care. Enjoy innovative functions that are tailored to your personal needs. More comfortable, hygienic and soothing than using paer, with the GROHE Sensia Arena you can experience a new standard of personal hygiene.',
            'BRAND: GROHE</br>CODE: 39354SH1 +  39596000 + 38844000',
            'RRP $10,824</br>NOW $6999',
            'Check with plumber if items are fit to purpose',
            'Includes: Wall hung pan, electronic seat with remote, full frame cistern, automatic flushing kit and chrome push plate ',
            'FEATURES:',
            '- Please see video for Installation',
            '- Requires power',
            '- Requires a 150mm cavity',
            '- Wall hung pan',
            '- Bluetooth to phone app',
            '- 5 Year guarantee - Vitreous China (manufactures defects)',
            '- 1 Year guarantee - seat & cistern valves/washers and electrical components',
            'ONLINE ONLY',
            'TERMS AND CONDITIONS: ',
            '- Items are end of lines/samples/damaged/soiled packaging and may no longer be re-ordered.',
            '- Pick up okay, closed weekends',
            '- No refunds/exchanges/credits or returns on change of mind.',
            '- A contact number is required for all orders being shipped.',
            '- Rural delivery may have additional shipping fee.',
            '- Extra shipping fee may be required if purchasing multiple items, please ask for combined shipping fee.',
            '- To purchase Robertson Bathware current range, please purchase from one of our merchant which we supply to: https://www.robertson.co.nz/where-to-buy',
            '- Warranties: https://www.robertson.co.nz/warranties (parts only)',
            '- To view our outlet store please contact Robertson Bathware to make an appointment.',
            '- Selected items are available to view in the outlet store',
            'Thank you for viewing our page, please make sure to check out our other listings.</br>Robertson Bathware Team'
        ],
        shippingPrice: [
            { destination: 'Auckland 7-10 days, Economy', price: '$60.00' },
            { destination: 'North Island 10-17 days, Economy', price: '$100.00' },
            { destination: 'South Island 10-17 days, Economy', price: '$150.00' },
            { destination: 'Otago 10-17 days, Economy', price: '$200.00' },
            { destination: 'Southland 10-17 days, Economy', price: '$200.00' },
            { destination: 'Pick-up available from Auckland City, Auckland', price: 'FREE' }
        ]
    },
    {
        id: '6',
        productName: 'HP Z2 Mini G4 Workstation | i7-9700 Processor, 16GB RAM, 512GB NVMe SSD, Wi-Fi',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/full/2082835996.jpg'],
        description: '90 Day Warranty',
        city: 'Auckland',
        closeDate: 'Wed, 29 Nov',
        shippingInfo: 'Free shipping nationwide',
        proStatus: 'Buy Now',
        oldPrice: '$1,200',
        currentPrice: '$1,500',
        categoryID: 6,
        shopName: 'string',
        condition: 'New',
        memory: '16 to 31 GB',
        hardDriveSize: '500 to 999 GB',
        cores: '8',
        color: 'Charcoal',
        brand: 'HP',
        fullDescription: [
            'HP Z2 Mini G4 Workstation</br>Intel Core i7-9700 Processor (8 core - 4.7Ghz)</br>16GB Memory (upgradable to 64GB)</br>NVIDIA® Quadro® P1000 (4 GB GDDR5 dedicated)</br>512GB NVMe Turbo Drive (Up to 5x faster than SATA SSD)</br>Intel Gigabit LAN</br>Windows 10 Professional</br>Logitech Z150 Stereo Speakers (integrated sound is scratchy so we are supplying brand new external speakers)',
            'Triple Monitor (Screen) Support with 3 x DisplayPort\'s</br>You can purchase DisplayPort to HDMI, DVI or VGA adapters from any retail computer store for as low as $10ea',
            'Important Notes ',
            'Payment must be made within 5 business days of auction/sale finishing or goods will be relisted.',
            'Usually we see cleared payment, either through Trade me or in our bank account, the day after purchase. We do our very best to get items on the courier that same day but items will definitely be dispatched within 3 working days of payment being cleared.'

        ],
        shippingPrice: [
            { destination: 'Free shipping within New Zealand', price: 'Free' },
            { destination: 'Shipping more than one item', price: 'No extra charge' }
        ]


    },
    {
        id: '7',
        productName: 'Sliding Door with Display Surface Bookshelf-120*120CM Grey',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/full/2069472159.jpg', 'https://trademe.tmcdn.co.nz/photoserver/full/2069479022.jpg', 'https://trademe.tmcdn.co.nz/photoserver/full/2069479035.jpg', 'https://trademe.tmcdn.co.nz/photoserver/full/2069479074.jpg'],
        description: '',
        city: 'Auckland',
        closeDate: 'Wed, 29 Nov',
        shippingInfo: 'Shipping from $80.00',
        proStatus: 'Buy Now',
        oldPrice: '$590.99',
        currentPrice: '$323.00',
        categoryID: 7,
        shopName: 'string',
        condition: 'new',
        memory: '',
        hardDriveSize: '',
        cores: '',
        brand: '',
        color: '',
        fullDescription: [
            'Design: Combine storage cabinet and book display rack together, the sliding door can easily slide from left to the right, or right to the left or in the middle. 3 tier front-facing presentation spaces for books and magazines display. Behind the sliding door bookshelf is 6 storage cabinet, which can store books, toys, art collections, decorations and storage boxes.',
            'Material: Made of high quality EO grade solid wood ecological board, environmentally friendly, tasteless, ready to use, strong and wear-resistant, and stainless steel round rod for magazine and book holders. This cabinet is sturdy, smart and durable.',
            'This  sliding door bookshelf is perfect for bedroom, living room, office and school. Appropriate height is easy for your kids to reach. Rich storage space, children\'s room is not messy. ',
            '***Also the sliding door has different colors can be choose , you can check our other listings, or consult customer service ***',
            'Safety: There is an anti-tilt anchor in the package to secure the cabinet to the wall to ensure safety. Stainless steel round rods support books not falling down.',
            'Dimensions: As shown in the main picture, 120 cm wide * 120 cm high * 39 cm deep, can be purchased individually, or can be purchased with other bookshelves, and can be combined according to the needs of the room, as shown in the picture.',
            'Easy to assemble, picture instruction will guide you step by step.</br>Outer packing size: 126CM22CM44CM</br>Weight: 40KG',
            'Note: Due to the different monitor and light effects, the actual colour of the item might be slightly different from the colour shown in the picture. Kindly allow 1-2cm measuring deviation due to manual measurement.',
            'We are GST registered and are able to provide a GST invoice upon request.'
        ],
        shippingPrice: [
            { destination: 'Auckland 3-4 days, Economy', price: '$80.00' },
            { destination: 'Auckland 4-7 days, Rural Economy', price: '$150.00' },
            { destination: 'North Island 3-4 days, Economy', price: '$100.00' },
            { destination: 'North Island 4-7 days, Rural Economy', price: '$120.00' },
            { destination: 'South Island 3-4 days, Economy', price: '$150.00' },
            { destination: 'South Island 4-7 days, Rural Economy', price: '$160.00' },
            { destination: 'Pick-up available from Henderson, Auckland', price: 'Free' }

        ]

    },
    {
        id: '8',
        productName: 'MOON MODULAR SOFA | LOCAL NZ MADE LOUNGE SUITE | $4999',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/full/1977544065.jpg', 'https://trademe.tmcdn.co.nz/photoserver/plus/1977544080.jpg', 'https://trademe.tmcdn.co.nz/photoserver/plus/1977544100.jpg'],
        description: '',
        city: 'Auckland',
        closeDate: 'Sat, 2 Dec',
        shippingInfo: 'Shipping from $115.00',
        proStatus: 'Buy Now',
        oldPrice: '$4,999',
        currentPrice: '$3,999',
        categoryID: 8,
        shopName: 'string',
        condition: 'new',
        memory: '',
        hardDriveSize: '',
        cores: '',

        color: '',
        brand: 'Sofacreations',
        fullDescription: [
            'The beautiful Moon Sofa by Sofacreations. This stylish, Organic in shape and sculptural sofa is exquisitely upholstered in a gorgeous, Ovis Ivory fabric from Warwick, a sublime seating arrangement that will redefine both modern and traditional interiors. It can smartly divide large, open-plan living areas.',
            'Model: Moon Sofa and Ottoman',
            'Fabric: Warwick Ovis ivory (Ready for Delivery) ',
            'Dimensions approx. (mm): L3150 x D900',
            'Warranty: </br> 5 years on foam, fabric, and workmanship </br> 2 years on fabric',
            'Customization options are available in different sizes, fabrics, and colors starting from $4999</br>*Made-to-order lead time 6-8 weeks.</br>*Moon chair not included</br>*Moon Chair $1499</br>*Measurement is Approx.',
            'The Sofa creations is 100% NZ owned and operated sofa manufacturer with over 22 years of experience in furniture. Our innovative products are perfectly designed with excellent quality of solid wood, thick foam and exceptionally durable smooth fabrics gives you all comfort in corner of your room while having a cup of hot drink. Why don’t you visit us? We are excited to show you wide range of New Zealand made sofas and lounge suit display at out in Auckland and Wellington stores.',
            'Our product and expertise:',
            'Lounge chair, chaise, Coffee table</br>Corner couch, Sectional sofa, Modular sofa</br>Sofa beds, Mattress</br>3 or 2 Seater unit</br>Customizations of size, fabric foam and color for home, office and hospitality requirement.</br>Packing & Delivery: We can arrange delivery nationwide at standard delivery charges.',
            'Payment Options: Cash, EFTPOS, Online Banking, Interest free Qcard options (Check inside store)',
            'Return or Refund Policy</br>we will replace /repair or exchange if you notify us within 7 days. We will not refund if you simply \'change your mind\'. for detail T&C confirm with store before buying.',
            'Contact us: To get the quote visit our Auckland or Wellington Showroom',
            'NZ MADE SOFAS DIRECT TO YOU at factory prices'
        ],
        shippingPrice: [
            { destination: 'North Island 11-18 days, Economy', price: '$350.00' },
            { destination: 'South Island 19-32 days, Economy', price: '$550.00' },
            { destination: 'Auckland 11-18 days, Economy', price: '$115.00' },
            { destination: 'Pick-up available from Auckland City, Auckland', price: 'Free' }

        ]

    },
    {
        id: '9',
        productName: 'PS5 Disc Console Controller Vinyl Decal Cover Skin Sony Playstation Game Sticker',
        productImg: ['https://trademe.tmcdn.co.nz/photoserver/full/1977544065.jpg', 'https://trademe.tmcdn.co.nz/photoserver/plus/1977544080.jpg', 'https://trademe.tmcdn.co.nz/photoserver/plus/1977544100.jpg'],
        description: '',
        city: 'Auckland',
        closeDate: 'Sat, 2 Dec',
        shippingInfo: 'Shipping from $115.00',
        proStatus: 'Buy Now',
        oldPrice: '$4,999',
        currentPrice: '$3,999',
        categoryID: 2,
        shopName: 'string',
        condition: 'new',
        memory: '',
        hardDriveSize: '',
        cores: '',

        color: '',
        brand: 'Sofacreations',
        fullDescription: [
            'The beautiful Moon Sofa by Sofacreations. This stylish, Organic in shape and sculptural sofa is exquisitely upholstered in a gorgeous, Ovis Ivory fabric from Warwick, a sublime seating arrangement that will redefine both modern and traditional interiors. It can smartly divide large, open-plan living areas.',
            'Model: Moon Sofa and Ottoman',
            'Fabric: Warwick Ovis ivory (Ready for Delivery) ',
            'Dimensions approx. (mm): L3150 x D900',
            'Warranty: </br> 5 years on foam, fabric, and workmanship </br> 2 years on fabric',
            'Customization options are available in different sizes, fabrics, and colors starting from $4999</br>*Made-to-order lead time 6-8 weeks.</br>*Moon chair not included</br>*Moon Chair $1499</br>*Measurement is Approx.',
            'The Sofa creations is 100% NZ owned and operated sofa manufacturer with over 22 years of experience in furniture. Our innovative products are perfectly designed with excellent quality of solid wood, thick foam and exceptionally durable smooth fabrics gives you all comfort in corner of your room while having a cup of hot drink. Why don’t you visit us? We are excited to show you wide range of New Zealand made sofas and lounge suit display at out in Auckland and Wellington stores.',
            'Our product and expertise:',
            'Lounge chair, chaise, Coffee table</br>Corner couch, Sectional sofa, Modular sofa</br>Sofa beds, Mattress</br>3 or 2 Seater unit</br>Customizations of size, fabric foam and color for home, office and hospitality requirement.</br>Packing & Delivery: We can arrange delivery nationwide at standard delivery charges.',
            'Payment Options: Cash, EFTPOS, Online Banking, Interest free Qcard options (Check inside store)',
            'Return or Refund Policy</br>we will replace /repair or exchange if you notify us within 7 days. We will not refund if you simply \'change your mind\'. for detail T&C confirm with store before buying.',
            'Contact us: To get the quote visit our Auckland or Wellington Showroom',
            'NZ MADE SOFAS DIRECT TO YOU at factory prices'
        ],
        shippingPrice: [
            { destination: 'North Island 11-18 days, Economy', price: '$350.00' },
            { destination: 'South Island 19-32 days, Economy', price: '$550.00' },
            { destination: 'Auckland 11-18 days, Economy', price: '$115.00' },
            { destination: 'Pick-up available from Auckland City, Auckland', price: 'Free' }

        ]

    },


];
export default cardData;
