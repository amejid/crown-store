import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

type CategoryRouteParams = {
  category: string;
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {
        isLoading ? <Spinner />
          : (
            <CategoryContainer>
              {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </CategoryContainer>
          )
      }
    </>
  );
};

export default Category;
