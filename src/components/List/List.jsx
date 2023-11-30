import React from "react";
import "./List.scss";
import Card from "../Card/Card";


const List = () => {

  const data = [
    {
      id: 1,
      img: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/9311/954/700/9311954700_2_7_16.jpg?t=1687951165322&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      img2: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/9311/954/700/9311954700_2_6_16.jpg?t=1687951335262&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      title: "Textured wrap skirt",
      isNew: true,
      price: 65,
     
    },
    {
      id: 2,
      img: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/9409/953/800/9409953800_2_7_16.jpg?t=1687965724692&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      img2: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/9409/953/800/9409953800_1_1_16.jpg?t=1687360404201&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      title: "Striped braided knit dress",
      isNew: true,
      oldPrice: 89,
      price: 89,
    },
    {
      id: 3,
      img: "https://12storeez.store/cdn/shop/files/6446aae76394e-19-04-202328692_720x.jpg?v=1687525143",
      title: "Mulberry silk halter top",
      oldPrice: 65,
      price: 55,
    },
    {
      id: 4,
      img: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/6625/612/500/6625612500_2_5_16.jpg?t=1684911384113&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome",
      title: "Tunic dress",
      oldPrice: 79,
      price: 95,
    },
  ];
    
  return (
    <div className='list'>
        {data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List