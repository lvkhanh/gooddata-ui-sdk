// (C) 2020 GoodData Corporation
import identity from "lodash/identity";
import { BuilderModifications, builderFactory } from "../../../base/builder";
import { ObjRef } from "../../../objRef";
import { MetadataObjectBuilder } from "../factory";
import { IAnalyticalDashboardMetadataObject } from ".";

/**
 * Analytical dashboard metadata object builder
 * See {@link Builder}
 *
 * @public
 */
export class AnalyticalDashboardMetadataObjectBuilder<
    T extends IAnalyticalDashboardMetadataObject = IAnalyticalDashboardMetadataObject
> extends MetadataObjectBuilder<T> {}

/**
 * Analytical dashboard metadata object factory
 *
 * @param ref - ref of the insight
 * @param modifications - analytical dashboard builder modifications to perform
 * @returns created analytical dashboard metadata object
 * @public
 */
export const newAnalyticalDashboardMetadataObject = (
    ref: ObjRef,
    modifications: BuilderModifications<AnalyticalDashboardMetadataObjectBuilder> = identity,
): IAnalyticalDashboardMetadataObject =>
    builderFactory(
        AnalyticalDashboardMetadataObjectBuilder,
        { type: "analyticalDashboard", ref },
        modifications,
    );
