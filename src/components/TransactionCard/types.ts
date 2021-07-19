export interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'postive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export interface Props {
  data: TransactionCardProps;
}