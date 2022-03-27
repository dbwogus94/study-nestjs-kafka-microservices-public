import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { Product } from './product.entity';

export class CreateProductDTO extends OmitType(Product, ['id']) {}

export class UpdateProductDTO extends PartialType(
  PickType(Product, [
    'thumbnailImage',
    'detailImage',
    'productType',
    'description',
    'use',
    'prices',
  ]),
) {}
