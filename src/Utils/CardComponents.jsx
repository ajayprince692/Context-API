import React,{createContext} from 'react'
export let CardComponents=React.createContext()

function CardComponents({children}) {
   
  let data = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images:
        "https://www.google.com/imgrehttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatoday.in%2Ftechnology%2Fnews%2Fstory%2Fthis-is-iphone-9-or-iphone-se-2-retains-iphone-se-design-with-bigger-screen-home-button-1648306-2020-02-20&psig=AOvVaw06Ayc9PLKnJQ6UNrXGG60L&ust=1704034904680000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCYtae3t4MDFQAAAAAdAAAAABADs?imgurl=https%3A%2F%2Fi.gadgets360cdn.com%2Flarge%2Fiphone_8_small_1575871025953.jpg&tbnid=yUpUgkjvg-ZXwM&vet=12ahUKEwj0i9nqtreDAxXwlGMGHVnMD5AQMygCegQIARB3..i&imgrefurl=https%3A%2F%2Fwww.gadgets360.com%2Fmobiles%2Fnews%2Fiphone-9-not-iphone-se-2-is-likely-the-name-of-apple-s-iphone-se-successor-report-2145618&docid=XaveU6OvBsknnM&w=320&h=240&q=iphone%209%20images&ved=2ahUKEwj0i9nqtreDAxXwlGMGHVnMD5AQMygCegQIARB3",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
  ];
  return <CardComponents.Provider value={data}>{children}</CardComponents.Provider>
}

export default CardComponents