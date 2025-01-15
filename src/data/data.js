const products = [
    {
      id: 1,
      title: 'Zapatillas Running adidas Response',
      precio: 150,
      price: 20,
      //talle:'35,36,37,38,40',
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7c785fe8/products/NIDD9293-401/NIDD9293-401-2.JPG?sw=300&sh=300`,
      category: 'Adidas'
    },
    {
      id: 2,
      title: 'Zapatillas Tenis adidas Solematch Control Hombre',
      price: 35,
      stock: 50,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw96c80ff2/products/ADID1496/ADID1496-2.JPG?sw=300&sh=300`,
      category: 'Adidas'
    },
    {
      id: 3,
      title: 'Zapatillas Running Under Armour Charged Levity Hombre',
      price: 25,
      stock: 30,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw74d28e5d/products/UA3026557-101/UA3026557-101-2.JPG?sw=300&sh=300`,
      category: 'Under'
    },
    {
      id: 4,
      title: 'Zapatillas Nike Downshifter 12 Hombre',
      price: 80,
      stock: 15,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1f8bd7db/products/NIDD9293-600/NIDD9293-600-2.JPG?sw=300&sh=300`,
      category: 'Nike'
    },
    {
      id: 5,
      title: 'Zapatillas Running adidas X_plrphase Hombre',
      price: 10,
      stock: 100,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe154e4d0/products/ADID0430/ADID0430-2.JPG?sw=300&sh=300`,
      category: 'Adidas'
    },
    {
      id: 6,
      title: 'Zapatillas Entrenamiento Topper Strong Pace III Hombre',
      price: 45,
      stock: 25,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3973e5b4/products/TO26219/TO26219-2.JPG?sw=300&sh=300`,
      category: 'Topper'
    },
    {
      id: 7,
      title: 'Zapatillas Topper Abbey Benito',
      price: 20,
      stock: 40,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbcbcbc14/products/TO89105/TO89105-2.JPG?sw=300&sh=300`,
      category: 'Topper'
    },
    {
      id: 8,
      title: 'Zapatillas Nike Air Max Sc',
      price: 12,
      stock: 60,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8c9588aa/products/AS1011B715401/AS1011B715401-2.JPG?sw=300&sh=300`,
      category: 'Nike'
    },
    {
      id: 9,
      title: 'Zapatillas Nike Juniper Trail 3 para Hombre',
      price: 30,
      stock: 20,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5c29632f/products/NIFQ0904-300/NIFQ0904-300-2.JPG?sw=300&sh=300`,
      category: 'Nike'
    },
    {
      id: 10,
      title: 'Zapatillas Puma Caven 2.0',
      price: 50,
      stock: 15,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4c3a2809/products/PU394915-40/PU394915-40-2.JPG?sw=600&sh=600`,
      category: 'Puma'
    },
    {
      id: 11,
      title: 'Zapatillas Entrenamiento Under Armour Tribase Reps',
      price: 15,
      stock: 30,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6b6175da/products/UA3027500-001/UA3027500-001-2.JPG?sw=600&sh=600`,
      category: 'Under'
    },
    {
      id: 12,
      title: 'Zapatillas Reebok Court Advance Hombre',
      price: 25,
      stock: 20,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw92838f5d/products/RE1100034031/RE1100034031-2.JPG?sw=300&sh=300`,
      category: 'Reebok'
    },
    {
      id: 13,
      title: 'Zapatillas Puma Solarflash II',
      price: 120,
      stock: 10,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6737dab2/products/PU107636-08/PU107636-08-2.JPG?sw=300&sh=300`,
      category: 'Puma'
    },
    {
      id: 14,
      title: 'Zapatillas Topper X Forcer',
      price: 35,
      stock: 40,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw296661ab/products/TO_21872/TO_21872-2.JPG?sw=300&sh=300`,
      category: 'Decoracion'
    },
    {
      id: 15,
      title: 'Zapatillas Topper T.350 Mesh',
      price: 2,
      stock: 100,
      img: `https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw296661ab/products/TO_21872/TO_21872-2.JPG?sw=300&sh=300`,
      category: 'Topper'
    }
  ];
  
  export default products;