import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"] 
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

 // console.log(categories);


  return (
    // CategoryCard
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          //imgUrl={urlFor(category.image).url()}
          imgUrl="https://links.papareact.com/gn7"
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
