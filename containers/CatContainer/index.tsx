import React from 'react';
import CatApi from '../../components/CatApi';
import SiteLayout from '../../components/SiteLayout';

const index = () => {
  return (
    <SiteLayout>
      <CatApi />
    </SiteLayout>
  );
}

export default index;
