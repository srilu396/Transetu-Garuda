import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps extends Icons.LucideProps {
  name: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const Icon = (Icons as unknown as Record<string, React.ElementType>)[name];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
};

export default DynamicIcon;