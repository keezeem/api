import { fetchOrders } from '@/api/orders';
// import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import dayjs from 'dayjs';
import Link from 'next/link';

export default async function OrdersPage() {
  const orders = await fetchOrders();

  return (
    <Card className="w-full max-w-screen-lg">
    <Link href={`/dashboard/orders/${orders.id}`} key={orders.id}>
          <HStack className="p-4 border-b border-gray-200 gap-4">
            <Text>{orders.id}</Text>
            <Text>{dayjs(orders.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
            <Text className="ml-auto">{orders.status}</Text>
          </HStack>
        </Link>

      {orders.map((order) => (
        <HStack key={order.id} className="p-4 border-b border-gray-200 gap-4">
          <Text>{order.id}</Text>
          <Text>{dayjs(order.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
          <Text className="ml-auto">{order.status}</Text>
        </HStack>
      ))}
    </Card>
  );
}