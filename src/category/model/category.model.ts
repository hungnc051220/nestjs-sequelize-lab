import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  Column,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

export interface ICategory {
  id?: number;
  name: string;
  description?: string;
  categoryTemplateId: number;
  metaKeywords?: string;
  metaDescription?: string;
  metaTitle?: string;
  parentCategoryId: number;
  pictureId: number;
  pageSize: number;
  allowCustomersToSelectPageSize: boolean;
  pageSizeOptions?: string;
  priceRanges?: string;
  showOnHomePage: boolean;
  hasDiscountsApplied: boolean;
  subjectToAcl: boolean;
  limitedToStores: boolean;
  published: boolean;
  deleted: boolean;
  displayOrder: number;
  createdOnUtc?: Date;
  updatedOnUtc?: Date;
  isFavorites: boolean;
  level: number;
  subCategories?: string;
  createdUser?: string;
  updatedUser?: string;
}

@Table({ tableName: 'Category', timestamps: false })
export class Category extends Model implements ICategory {
  @ApiPropertyOptional({
    description: 'Category ID',
    example: 1,
    type: 'number',
  })
  @IsOptional()
  @IsNumber()
  @Column({
    field: 'Id',
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  declare id?: number;

  @ApiProperty({
    description: 'Category name',
    example: 'Action Movies',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  @Column({ field: 'Name', type: DataType.STRING })
  declare name: string;

  @ApiPropertyOptional({ description: 'Category description', type: 'string' })
  @IsOptional()
  @IsString()
  @Column({ field: 'Description', allowNull: true, type: DataType.TEXT })
  declare description?: string;

  @ApiProperty({
    description: 'Category template ID',
    example: 1,
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  @Column({
    field: 'CategoryTemplateId',
    type: DataType.INTEGER,
  })
  declare categoryTemplateId: number;

  @ApiPropertyOptional({ description: 'Meta keywords for SEO', type: 'string' })
  @IsOptional()
  @IsString()
  @Column({ field: 'MetaKeywords', allowNull: true, type: DataType.STRING })
  declare metaKeywords?: string;

  @ApiPropertyOptional({
    description: 'Meta description for SEO',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @Column({ field: 'MetaDescription', allowNull: true, type: DataType.TEXT })
  declare metaDescription?: string;

  @ApiPropertyOptional({ description: 'Meta title for SEO', type: 'string' })
  @IsOptional()
  @IsString()
  @Column({ field: 'MetaTitle', allowNull: true, type: DataType.STRING })
  declare metaTitle?: string;

  @ApiProperty({
    description: 'Parent category ID',
    example: 0,
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  @Column({ field: 'ParentCategoryId', type: DataType.INTEGER })
  declare parentCategoryId: number;

  @ApiProperty({ description: 'Picture ID', example: 1, type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  @Column({ field: 'PictureId', type: DataType.INTEGER })
  pictureId!: number;

  @ApiProperty({
    description: 'Page size for listings',
    example: 10,
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  @Column({ field: 'PageSize', type: DataType.INTEGER })
  declare pageSize: number;

  @ApiProperty({
    description: 'Allow customers to select page size',
    example: true,
    type: 'boolean',
  })
  @IsNotEmpty()
  @IsBoolean()
  @Column({
    field: 'AllowCustomersToSelectPageSize',
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare allowCustomersToSelectPageSize: boolean;

  @ApiPropertyOptional({
    description: 'Page size options (comma-separated)',
    example: '10,20,50',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @Column({ field: 'PageSizeOptions', allowNull: true, type: DataType.STRING })
  declare pageSizeOptions?: string;

  @ApiPropertyOptional({ description: 'Price ranges', type: 'string' })
  @IsOptional()
  @IsString()
  @Column({ field: 'PriceRanges', allowNull: true, type: DataType.STRING })
  declare priceRanges?: string;

  @ApiProperty({
    description: 'Show on home page',
    example: false,
    type: 'boolean',
  })
  @IsNotEmpty()
  @IsBoolean()
  @Column({
    field: 'ShowOnHomePage',
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare showOnHomePage: boolean;

  @ApiProperty({
    description: 'Has discounts applied',
    example: false,
    type: 'boolean',
  })
  @IsNotEmpty()
  @IsBoolean()
  @Column({
    field: 'HasDiscountsApplied',
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare hasDiscountsApplied: boolean;

  @ApiProperty({
    description: 'Subject to ACL',
    example: false,
    type: 'boolean',
  })
  @IsNotEmpty()
  @IsBoolean()
  @Column({
    field: 'SubjectToAcl',
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare subjectToAcl: boolean;

  @ApiProperty({
    description: 'Limited to specific stores',
    example: false,
    type: 'boolean',
  })
  @IsNotEmpty()
  @IsBoolean()
  @Column({
    field: 'LimitedToStores',
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare limitedToStores: boolean;

  @ApiProperty({ description: 'Is published', example: true, type: 'boolean' })
  @IsNotEmpty()
  @IsBoolean()
  @Column({ field: 'Published', type: DataType.BOOLEAN, defaultValue: false })
  declare published: boolean;

  @ApiProperty({ description: 'Is deleted', example: false, type: 'boolean' })
  @IsNotEmpty()
  @IsBoolean()
  @Column({ field: 'Deleted', type: DataType.BOOLEAN, defaultValue: false })
  declare deleted: boolean;

  @ApiProperty({ description: 'Display order', example: 1, type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  @Column({ field: 'DisplayOrder', type: DataType.INTEGER, defaultValue: 1 })
  declare displayOrder: number;

  @ApiPropertyOptional({
    description: 'Created date (UTC)',
    example: '2024-01-01T00:00:00Z',
    type: 'string',
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  @Column({ field: 'CreatedOnUtc', allowNull: true, type: DataType.DATE })
  declare createdOnUtc?: Date;

  @UpdatedAt
  @ApiPropertyOptional({
    description: 'Updated date (UTC)',
    example: '2024-01-01T00:00:00Z',
    type: 'string',
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  @Column({ field: 'UpdatedOnUtc', allowNull: true, type: DataType.DATE })
  declare updatedOnUtc?: Date;

  @ApiProperty({
    description: 'Is favorites category',
    example: false,
    type: 'boolean',
  })
  @IsNotEmpty()
  @IsBoolean()
  @Column({ field: 'IsFavorites', type: DataType.BOOLEAN, defaultValue: false })
  declare isFavorites: boolean;

  @ApiProperty({
    description: 'Category level in hierarchy',
    example: 1,
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  @Column({ field: 'Level', type: DataType.INTEGER, defaultValue: 1 })
  declare level: number;

  @ApiPropertyOptional({
    description: 'Sub-categories (comma-separated IDs)',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @Column({ field: 'SubCategories', allowNull: true, type: DataType.STRING })
  subCategories?: string;

  @ApiPropertyOptional({
    description: 'Created user',
    example: 'admin@example.com',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @Column({ field: 'CreatedUser', allowNull: true, type: DataType.STRING })
  declare createdUser?: string;

  @ApiPropertyOptional({
    description: 'Updated user',
    example: 'admin@example.com',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @Column({ field: 'UpdatedUser', allowNull: true, type: DataType.STRING })
  declare updatedUser?: string;
}
