import { GoalType } from './enums';

interface MenuItem {
  router: string;
  name: string;
  type: GoalType;
  icon?: unknown;
}

const config: MenuItem[] = [
  {
    router: 'junior-accountant',
    name: '初级会计师',
    type: GoalType.JuniorAccountant,
  },
  {
    router: 'intermediate-accountant',
    name: '中级会计师',
    type: GoalType.IntermediateAccountant,
  },
  {
    router: 'senior-accountant',
    name: '高级会计师',
    type: GoalType.SeniorAccountant,
  },
  {
    router: 'finance-related',
    name: '证券/基金/期货/银行',
    type: GoalType.FinanceRelated,
  },
];

export default config;
