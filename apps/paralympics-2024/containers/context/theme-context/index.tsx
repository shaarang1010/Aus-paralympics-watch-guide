import React, { PropsWithChildren } from 'react';
import { Core } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Core theme={theme}>{children}</Core>;
};
