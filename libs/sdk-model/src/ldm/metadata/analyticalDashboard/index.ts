// (C) 2020 GoodData Corporation
import { IMetadataObject, isMetadataObject } from "../types";

/**
 * AnalyticalDashboard metadata object
 *
 * @public
 */
export interface IAnalyticalDashboardMetadataObject extends IMetadataObject {
    type: "analyticalDashboard";
}

/**
 * Tests whether the provided object is of type {@link IAnalyticalDashboardMetadataObject}.
 *
 * @param obj - object to test
 * @public
 */
export function isAnalyticalDashboardMetadataObject(obj: unknown): obj is IAnalyticalDashboardMetadataObject {
    return isMetadataObject(obj) && obj.type === "analyticalDashboard";
}
