import { Text, View } from 'react-native';

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <View className="flex-1 rounded-lg border border-border bg-secondary p-5">
      <Text className="font-heading text-2xl text-primary">{value}</Text>
      <Text className="mt-1 font-body text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </Text>
    </View>
  );
}
