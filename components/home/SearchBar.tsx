import { TextInput, View } from 'react-native';

import { Search } from 'lucide-react-native';

import { tokens } from '../../theme/tokens';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export function SearchBar({ placeholder, value, onChangeText }: SearchBarProps) {
  return (
    <View className="mt-6 flex-row items-center rounded-lg border border-border bg-input px-4 py-3">
      <Search size={18} color={tokens.colors.dark.primary} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={tokens.colors.dark['muted-foreground']}
        className="ml-3 flex-1 font-body text-base text-foreground"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
    </View>
  );
}
