// Autó típus definíciója
export type CarType = {
    id: number;
    name: string;
    price: string;
    year: string;
    engine: string;
    seats: string;
    transmission: string;
    image: string;
    features: string[];
    pricing: {
      daily: {
        price: string;
        limit: string;
      };
      threeDays: {
        price: string;
        limit: string;
      };
      sevenDays: string;
      domesticDeposit: string;
      abroadDeposit: string;
    };
  };