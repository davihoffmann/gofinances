
import { TransactionCardProps } from '../../components/TransactionCard/types';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighLightProps {
  amount: string;
}

export interface HighLightData {
  entries : HighLightProps,
  expensives: HighLightProps,
  total: HighLightProps,
}