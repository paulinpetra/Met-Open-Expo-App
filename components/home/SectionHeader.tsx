import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ChevronRight } from 'lucide-react-native';

import { tokens } from '../../theme/tokens';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  actionIcon?: ReactNode;
}

export function SectionHeader({
  title,
  actionLabel,
  actionIcon = <ChevronRight size={14} color={tokens.colors.dark.primary} />,
}: SectionHeaderProps) {
  return (
    <View className="mb-4 flex-row items-end justify-between px-6">
      <Text className="font-heading text-2xl text-foreground">{title}</Text>
      {actionLabel ? (
        <TouchableOpacity className="flex-row items-center">
          <Text className="mr-1 font-body text-sm text-primary">{actionLabel}</Text>
          {actionIcon}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
