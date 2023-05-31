import { Avatar, Flex, Typography } from '@cads-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { toVND } from '~/utils/helper';
import { withMinio } from '~/utils/withStatic';

interface Product {
  __typename?: 'Product' | undefined;
  _id: string;
  uuid: string;
  photo: string;
  name: string;
  price: number;
  unit: string;
  isHidden: boolean;
  category?:
    | {
        __typename?: 'Category' | undefined;
        name: string;
      }
    | null
    | undefined;
}
const ProductItemGuest: React.FC<Product> = (props) => {
  return (
    <React.Fragment>
      <Flex direction="column" justifyContent="center" alignItems="center" sx={{ m: 1, p: 0.5, position: 'relative' }}>
        <Link to={`/product/${props.uuid}`}>
          <Box bgcolor="#f5f5f5" sx={{ p: 2, borderRadius: 2 }}>
            <Avatar
              shape="rounded"
              src={withMinio(props.photo)}
              sx={{ bgColor: '#fff', color: 'primary.main', width: 1, height: 1 }}
            />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              align="center"
              sx={{ color: '#9e9e9e', mt: 3, mb: 2, wordBreak: 'break-all' }}
              maxLine={2}
            >
              {props.category?.name}
            </Typography>
            <Typography align="center" sx={{ mt: 3, mb: 2, wordBreak: 'break-all' }} maxLine={2}>
              {props.name}
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              sx={{ color: '#00e676', mt: 3, mb: 2, wordBreak: 'break-all' }}
              maxLine={2}
            >
              {props.price > 0 ? `Chỉ từ ${toVND(props.price)} / ${props.unit}` : 'Liên hệ'}
            </Typography>
          </Box>
        </Link>
      </Flex>
    </React.Fragment>
  );
};

export default ProductItemGuest;
