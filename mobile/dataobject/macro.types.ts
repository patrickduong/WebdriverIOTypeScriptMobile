export interface TriggerType {
  typeTrigger: string;
  selecType: string;
  option: string;
  subOption: string;
}

export interface ActionType {
  typeAction: string;
  selecType: string;
  option: string;
}

export interface ContraintType {
  typeAction: string;
  selecType: string;
  option: string;
}

export interface LocalVariableType {
  variableName: string[];
  variableType: string;
  variableValue: any;
}
