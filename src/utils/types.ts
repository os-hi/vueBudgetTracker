export type Portfolio = {
    type: "assets" | "liabilities"
    name: string;
    amount: number;
    recurring: 'day' | 'week' | 'month' | 'year' ;
}
export type Option = {
    name: string
    portfolios: Portfolio[]
}
export type Category = {
    options: Option[]
    total: number
}

 
