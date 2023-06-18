import { RiskLevel } from "./model";

function isValueInStringEnum<E extends string>(strEnum: Record<string, E>) {
	const enumValues = Object.values(strEnum) as string[];

	return (value: string): value is E => enumValues.includes(value);
}

export const isInRiskLevelEnum = isValueInStringEnum(RiskLevel);

export * from "./api";
export * from "./auth";
export * from "./model";
export * from "./status";
export * from "./settings";
