import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  [key: string]: any;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const Icon = (Icons as any)[name];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
};

export default DynamicIcon;