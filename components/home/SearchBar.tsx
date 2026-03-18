import { Text, View } from 'react-native';

import { Search } from 'lucide-react-native';

import { tokens } from '../../theme/tokens';

interface SearchBarProps {
  placeholder: string;
}

export function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <View className="mt-6 flex-row items-center rounded-lg border border-border bg-input px-4 py-3">
      <Search size={18} color={tokens.colors.dark.primary} />
      <Text className="ml-3 font-body text-muted-foreground">{placeholder}</Text>
    </View>
  );
}
