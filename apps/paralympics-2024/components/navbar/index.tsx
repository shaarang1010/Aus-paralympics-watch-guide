import { Box } from '@ag.ds-next/react/box';
import { MainNav } from '@ag.ds-next/react/main-nav';

type Props = {
  activePath: string;
  navItems: { href: string; label: string }[];
};

export const NavBar: React.FC<Props> = ({ activePath, navItems }) => {
  return (
    <Box palette="dark">
      <MainNav activePath={activePath} items={[...navItems]} />
    </Box>
  );
};
