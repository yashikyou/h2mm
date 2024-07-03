import { GoalType } from '../../const/enums';

interface MenuItem {
  route: string;
  name: string;
  type: GoalType;
  icon?: unknown;
}

const config: MenuItem[] = [
  {
    route: 'junior-accountant',
    name: '初级会计师',
    type: GoalType.JuniorAccountant,
  },
  {
    route: 'intermediate-accountant',
    name: '中级会计师',
    type: GoalType.IntermediateAccountant,
  },
  {
    route: 'senior-accountant',
    name: '高级会计师',
    type: GoalType.SeniorAccountant,
  },
  {
    route: 'finance-related',
    name: '证券/基金/期货/银行',
    type: GoalType.FinanceRelated,
  },
];

export default config;
