

export interface TransactionCardProps {
  type: 'postive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

export interface Props {
  data: TransactionCardProps;
}