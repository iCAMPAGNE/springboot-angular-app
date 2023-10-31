export interface Version {
  number: string;
  dateTime: string
}

export interface ProcessStep {
  order?: number;
  description: string;
  mandatory: boolean;
}
