import {
  TransactionModel,
  TransactionType,
} from '../../../models/transaction-model';

interface ExpenseQueryArgs {
  args: {
    type: TransactionType;
    categoryIds: string[];
    pageSize: number;
    pageNumber: number;
    minAmount: number;
    maxAmount: number;
  };
}

export interface Query {
  [key: string]: unknown;
}

export const expenseQuery = async (_: unknown, { args }: ExpenseQueryArgs) => {
  
  const query: Query = {};

  assignProp(query, "transaction_type", args.type)
  assignProp(query, "categoryId", args.categoryIds)

  const amountQuery: Query = {};

  assignProp(amountQuery, "$gte", args.minAmount)
  assignProp(amountQuery, "$lte", args.maxAmount)
  assignProp(query, "amount", amountQuery)

  return await TransactionModel.find(query)
  .skip(args.pageSize * (args.pageNumber - 1))
  .limit(args.pageSize)
  .exec();

};

export const assignProp = (query: Query, key: string, value: unknown) => {

  if(value != undefined && !isEmptyQuery(value)){
     query[key] = value
  }
}

export const isEmptyQuery = (value: unknown): boolean => {
 
  if(value instanceof Object){
    return Object.keys(value).length == 0
  }else{
    return false
  }

}