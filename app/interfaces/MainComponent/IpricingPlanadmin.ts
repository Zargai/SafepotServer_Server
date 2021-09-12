export interface IPricingPlan {
  _id: string;
  plane_name?: string;
  monthly_price?: string;
  yearly_price?: string;
}

export interface IPricingPlanInput {
  plane_name?: string;
  monthly_price?: string;
  yearly_price?: string;
}
