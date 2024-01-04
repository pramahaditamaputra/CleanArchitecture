import {ICartEntity} from '../../domain/entity/cart.entity';
import {
  IGetCartListResponseDto,
  IGetCartResponseDto,
} from '../datasources/api/cart.api.responseDto';

export const cartEntityToCartResponseDtoMapper = (
  cartEntity: ICartEntity,
): IGetCartResponseDto => {
  return {
    id: cartEntity.id,
    total: cartEntity.total,
    discountedTotal: cartEntity.discountedTotal,
    userId: cartEntity.userId,
    totalProducts: cartEntity.totalProducts,
    totalQuantity: cartEntity.totalQuantity,
    products: cartEntity.products.map(productEntity => {
      return {
        id: productEntity.id,
        title: productEntity.title,
        description: productEntity.description,
        price: productEntity.price,
        discountPercentage: productEntity.discountPercentage,
        rating: productEntity.rating,
        stock: productEntity.stock,
        brand: productEntity.brand,
        category: productEntity.category,
        thumbnail: productEntity.thumbnail,
        images: productEntity.images,
      };
    }),
  };
};

export const cartDtoToEntityMapper = (
  cartDto: IGetCartResponseDto,
): ICartEntity => {
  return {
    id: cartDto.id,
    total: cartDto.total,
    discountedTotal: cartDto.discountedTotal,
    userId: cartDto.userId,
    totalProducts: cartDto.totalProducts,
    totalQuantity: cartDto.totalQuantity,
    products: cartDto.products.map(productDto => {
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
    }),
  };
};

export const cartListDtoToEntityMapper = (
  cartDto: IGetCartListResponseDto,
): ICartEntity[] => {
  const carts = cartDto.carts.map(cartDto => {
    return {
      id: cartDto.id,
      total: cartDto.total,
      discountedTotal: cartDto.discountedTotal,
      userId: cartDto.userId,
      totalProducts: cartDto.totalProducts,
      totalQuantity: cartDto.totalQuantity,
      products: cartDto.products.map(productDto => {
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
      }),
    };
  });

  return carts;
};
