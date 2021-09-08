export interface IPricing {
    _id: string;
    username?: string;
    plane_name?: string;
    monthly_price?: string;
    yearly_price?: string;
    description?: string;
}

export interface IPricingInput {
    username?: string;
    plane_name?: string;
    monthly_price?: string;
    yearly_price?: string;
    description?: string;
}