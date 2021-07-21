import React from 'react';

import { Breadcrumb, BreadcrumbElement } from './index';

export default {
  title: 'navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    componentSubtitle: 'Breadcrumb component used in Safe Multisig.',
  },
};

export const Breadcrumbs = (): React.ReactElement => (
  <Breadcrumb>
    <BreadcrumbElement text="Address Book" iconType="addressBook" counter="8" />
    <BreadcrumbElement text="Second Level" color="placeHolder" />
  </Breadcrumb>
);

export const RootElementAlone = (): React.ReactElement => (
  <Breadcrumb>
    <BreadcrumbElement text="Transactions" iconType="transactionsInactive" />
  </Breadcrumb>
);

export const Counter = (): React.ReactElement => (
  <Breadcrumb>
    <BreadcrumbElement text="Address Book" iconType="addressBook" counter="8" />
  </Breadcrumb>
);

export const SubSection = (): React.ReactElement => (
  <Breadcrumb>
    <BreadcrumbElement text="Assets" iconType="assets" />
    <BreadcrumbElement text="Coins" color="placeHolder" />
  </Breadcrumb>
);

export const FullOptions = (): React.ReactElement => (
  <Breadcrumb>
    <BreadcrumbElement text="First level" iconType="addressBook" counter="8" />
    <BreadcrumbElement
      text="Second level"
      iconType="addressBook"
      counter="8"
      color="placeHolder"
    />
    <BreadcrumbElement
      text="Third level"
      iconType="addressBook"
      counter="8"
      color="placeHolder"
    />
  </Breadcrumb>
);
