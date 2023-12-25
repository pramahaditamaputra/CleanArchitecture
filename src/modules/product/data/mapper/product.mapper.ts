import {IProductEntity} from '../../domain/entity/product.entity';
import {IAddProductParams} from '../../domain/params/product.params';
import {IAddProductRequestDto} from '../datasource/api/product.api.requestDto';
import {
  IGetProductListResponseDto,
  IGetProductResponseDto,
} from '../datasource/api/product.api.responseDto';

export const productDtoToEntityMapper = (
  productDto: IGetProductResponseDto,
): IProductEntity => {
  return {
    id: productDto.id,
    title: productDto.title,
    description: productDto.description,
    price: productDto.price,
    discountPercentage: productDto.discountPercentage,
    rating: productDto.rating,
    stock: productDto.stock,
    brand: productDto.brand,
    category: productDto.category,
    thumbnail: productDto.thumbnail,
    images: productDto.images,
  };
};

export const productListDtoToEntityMapper = (
  productListDto: IGetProductListResponseDto,
): IProductEntity[] => {
  const products = productListDto.products.map(productDto => {
    return {
      id: productDto.id,
      title: productDto.title,
      description: productDto.description,
      price: productDto.price,
      discountPercentage: productDto.discountPercentage,
      rating: productDto.rating,
      stock: productDto.stock,
      brand: productDto.brand,
      category: productDto.category,
      thumbnail: productDto.thumbnail,
      images: productDto.images,
    };
  });

  return products;
};

export const addProductParamsToRequestDtoMapper = (
  addProductParams: IAddProductParams,
): IAddProductRequestDto => {
  return {
    id: Math.random(),
    title: addProductParams.title,
    description: addProductParams.description,
    price: addProductParams.price,
    discountPercentage: addProductParams.discountPercentage,
    rating: addProductParams.rating,
    stock: addProductParams.stock,
    brand: addProductParams.brand,
    category: addProductParams.category,
    thumbnail: addProductParams.thumbnail,
    images: addProductParams.images,
  };
};
